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
  let skillPage = {}
    skillPage.tutorial = []
    skillPage.showcase = []
  data.map(key => {
    skillPage.id = key.skill_id
    skillPage.skillName = key.skillName
    skillPage.category = key.category

    if(key.type === 'tutorial') {
      skillPage.tutorial.push({id: key.id, url: key.url, votes: key.votes})
    }
    if(key.type === 'showcase') {
      skillPage.showcase.push({id: key.id, url: key.url, votes: key.votes})
    }

  })
  return skillPage
}
