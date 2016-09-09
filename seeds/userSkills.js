
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userSkills').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('userSkills').insert({id: 1099, user_id: 199, skill_id: 101, showcaseURL: 'https://www.youtube.com/watch?v=KBtkup2PWAU'}),
        knex('userSkills').insert({id: 1098, user_id: 198, skill_id: 101, showcaseURL: 'https://www.youtube.com/watch?v=KBtkup2PWAU'}),
        knex('userSkills').insert({id: 1097, user_id: 197, skill_id: 103, showcaseURL: 'https://www.youtube.com/watch?v=jpIX1_qQni8'})
      ])
    })
}
