"use strict"

const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

module.exports = {
  getSkillsById,
  addUser,
  getUserById,
  getUserDetails,
  getSkills,
  getTop3,
  addTutorialVideo,
  uploadTutorial,
  statusUpdate,
  upVote,
  downVote,
  addSkillToUser,
  random,
  checkIfUserHasSkill
}

function addUser (id, username, profile_pic) {
  return knex('users')
    .insert({twitter_id: id, username: username, profile_pic: profile_pic})
    .then(data => {
      return knex ('users')
        .where('twitter_id', id)
    })
}

function getSkills () {
  return knex ('skills')
    .then(data => {
      return data
    })
}

function getTop3 () {
  return knex ('skills')
    .join('videos', 'skill_id', '=', 'skills.id')
    .then(data => {
      return sort(data)
    })
}

function uploadTutorial (user_id, id, url) {
  return knex ('userSkills')
    .where('user_id', user_id)
    .then((data) => {
      data.map((elem) => {
        if(elem.showcaseURL === url) {
          return console.log("URL is currently in database")
        } else {
          return knex ('userSkills')
            .insert({
              user_id: user_id,
              skill_id: id,
              showcaseURL: url,
              status: "attempted"
            })
        }
      })
    })
}

function addTutorialVideo (id, url) {
  return knex ('videos')
    .insert({
      skill_id: id,
      url: url,
      type: 'tutorial',
      votes: 0
    })
}

function sort (data) {
  data.sort(function(a, b) {
    if (a.votes > b.votes) {
      return -1
    }
    if (a.votes < b.votes) {
      return 1
    }
    return 0
  })

  let top3 = data.map(key => {
    return ({
      skillName: key.skillName,
      url: key.url,
      votes: key.votes,
      difficulty: key.difficulty
    })
  })

  return top3.slice(0, 3)
}

function getSkillsById (id) {
  return knex ('skills')
    .join('videos', 'skill_id', '=', 'skills.id')
    .where('skill_id', id)
    .then(data => {
      return createArray(data)
    })
}

function createArray (data) {
  let videoList = {}
  videoList.videos = []

  data.map(key => {
    videoList.id = key.skill_id
    videoList.skillName = key.skillName
    videoList.category = key.category
    videoList.difficulty = key.difficulty
    videoList.videos.push({id: key.id, url: key.url, votes: key.votes, type: key.type})
  })
  return videoList
}

function getUserById (id) {
  return knex ('users')
    .where('twitter_id', id)
}

function getUserDetails (id) {
  return knex ('users')
    .select()
    .where('id', id)
    .then(data => {
        return knex ('userSkills')
          .join('skills', 'skills.id', '=', 'skill_id')
          .where('user_id', id)
          .then(results => {
            const skillList = results.map(result =>{
              return Object.assign({}, result, {
                skillXp: getSkillXp(result.status)
              })
            })
            return Object.assign({}, data[0], {
                level: level(totalXp(skillList)),
                totalXp: totalXp(skillList),
                remainingXp: remainingXp(totalXp(skillList))
                }, {skillList: skillList}
              )
          })
    })
}



function getSkillXp (status) {
  switch (status) {
    case 'watched':
      return 25
    case 'contributed':
      return 50
    case 'mastered':
      return 100
  }
}

function level (totalXp) {
  return Math.floor(totalXp/100)
}

function totalXp (skillList) {
  return skillList.reduce((sum, elem) => {
    return sum + elem.skillXp
  }, 0)
}

function remainingXp (totalXp) {
  return 100 - totalXp % 100
}


function statusUpdate (user_id, skill_id, status) {
  return knex ('userSkills')
    .where({
      user_id: user_id,
      skill_id: skill_id
    })
    .update({
      status: status
    })
    .then(data => {
      return knex ('userSkills')
        .where({
          user_id: user_id,
          skill_id: skill_id
        })
    })
}

function addSkillToUser (user_id, skill_id, status) {
  return knex ('userSkills')
    .insert({
      user_id: user_id,
      skill_id: skill_id,
      status: status
    })
    .then(data => {
      return knex ('userSkills')
        .where({
          user_id: user_id,
          skill_id: skill_id
        })
    })
}

function checkIfUserHasSkill (user_id, skill_id, status) {
  return knex ('userSkills')
    .where({
      user_id: user_id,
      skill_id: skill_id
    })
}

function upVote (id, video_id) {
  return knex ('videos')
    .where('id', video_id)
    .increment('votes', 1)
    .then(() => {
      updateStatus(video_id)
      return getSkillsById (id)
    })
}

function downVote (id, video_id) {
  return knex ('videos')
    .where('id', video_id)
    .where('votes', '>', 0)
    .decrement('votes', 1)
    .then(() => {
      updateStatus(video_id)
      return getSkillsById (id)
    })
}

function random (id) {
  return knex ('userSkills')
    .where('user_id', id)
    .then(data => {
      return knex('skills')
        .then(skills => {
          const randomList = skills.filter(skills => !data.find(users => skills.id === users.skill_id))
          const length = randomList.length
          const randomNum = Math.floor(Math.random() * length)
          return getSkillsById(randomList[randomNum].id)
        })
    })
}

function updateStatus (video_id) {
  return knex ('videos')
    .join('userSkills', 'url', '=', 'showcaseURL')
    .where('videos.id', video_id)
    .then(data => {
      if(data[0]) {
        if(data[0].votes > 9) {
          return knex ('userSkills')
            .where('showcaseURL', data[0].url)
            .update({
              status: 'master'
            })
        }
        return knex ('userSkills')
          .where('showcaseURL', data[0].url)
          .update({
            status: 'contributed'
          })
      }
    })
}
