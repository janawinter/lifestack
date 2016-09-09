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
  videoList.videos = []

  data.map(key => {
    videoList.id = key.skill_id
    videoList.skillName = key.skillName
    videoList.category = key.category
    videoList.videos.push({id: key.id, url: key.url, votes: key.votes, type: key.type})
  })
  return videoList
}
