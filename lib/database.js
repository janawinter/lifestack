"use strict"

const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

module.exports = {
  getSkillsById,
  getUserById,
  getSkills

}

function getSkills () {
  return knex ('skills')
    .then(data => {
      return data
    })
}

function getSkillsById (id) {
  return knex ('skills')
    .join('videos', 'skill_id' , '=', 'skills.id')
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
    .join('userSkills', 'user_id', '=', 'users.id')
    .where('user_id', id)
    .then(data => {
      userDisplay(data)
    })
}


function userDisplay (data) {
  let display = {}
  display.array = []
  display.skillList = []

  data.map(key => {
    display.id = key.id
    display.userName = key.username
    display.profile_pic = key.profile_pic
    display.array.push({id: key.skill_id})
  })
  display.array.map(id => {
    getSkills()
    .then(skills => {
      skills.map(key => {
        if(key.id === id){
          display.skillList.push[{
            id: id,
            skillname: key.skillname

          }]
        }
      })
    })
  })

  console.log(display)

}

function getSkill (id, callback) {
  return knex ('skills')
    .where('id', id)
    .then(data => {
      callback()
    })
}

function getXp (status) {
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
