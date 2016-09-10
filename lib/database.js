"use strict"

const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

module.exports = {
  getSkillsById,
  addUser,
  getUserById,
  getUserDetails,
  getSkills,
  getTop3
}

function addUser (id, username, profile_pic) {
  return knex('users')
    .insert({twitter_id: id, username: username, profile_pic: profile_pic})
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
      votes: key.votes
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
    case 'attempted':
      return 50
    case 'succeeded':
      return 75
    case 'contributed':
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
