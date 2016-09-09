
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('skills').insert({id: 101, skillName: 'Change Lightbulb', category: 'Domestic'}),
        knex('skills').insert({id: 102, skillName: 'How to Write a Cheque', category: 'Budget'}),
        knex('skills').insert({id: 103, skillName: 'How to Grow Herbs', category: 'Outside'})
      ])
    })
}
