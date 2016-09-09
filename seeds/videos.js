
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('videos').insert({id: 201, skill_id: 101 , url: 'https://www.youtube.com/watch?v=jpIX1_qQni8', votes: 150, type: "tutorial"}),
        knex('videos').insert({id: 202, skill_id: 102 , url: 'https://www.youtube.com/watch?v=KBtkup2PWAU', votes: 50, type: "tutorial"}),
        knex('videos').insert({id: 203, skill_id: 103 , url: 'https://www.youtube.com/watch?v=aaqzPMOd_1g', votes: 5, type: "tutorial"})
        knex('videos').insert({id: 204, skill_id: 102 , url: 'https://www.youtube.com/watch?v=KBtkup2PWAU', votes: 50, type: "showcase"})
        knex('videos').insert({id: 205, skill_id: 101 , url: 'https://www.youtube.com/watch?v=jpIX1_qQni8', votes: 5, type: "showcase"})
      ])
    })
}
