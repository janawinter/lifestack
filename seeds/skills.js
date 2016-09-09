
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('table_name').insert({id: 101, skillName: 'Change Lightbulb', category: 'Domestic'}),
        knex('table_name').insert({id: 102, skillName: 'How to Write a cheque', category: 'Budget'}),
        knex('table_name').insert({id: 103, skillName: 'How to Grow Herbs', category: 'Outside'})
      ])
    })
}
