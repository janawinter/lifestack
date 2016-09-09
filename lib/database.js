const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

module.exports = {
  getSkillsById

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
  videoList.tutorial = []
  videoList.showcase = []

  data.map(key => {
    videoList.id = key.skill_id
    videoList.skillName = key.skillName
    videoList.category = key.category

    if(key.type === 'tutorial') {
      videoList.tutorial.push({id: key.id, url: key.url, votes: key.votes})
    }
    if(key.type === 'showcase') {
      videoList.showcase.push({id: key.id, url: key.url, votes: key.votes})
    }

  })
  return videoList
}
