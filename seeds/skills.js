
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      return Promise.all([

        knex('skills').insert({id: 104, skillName: 'How to Cook Scrambled Eggs', category: 'Cooking'}),
        knex('skills').insert({id: 105, skillName: 'How to Fry Eggs', category: 'Cooking'}),
        knex('skills').insert({id: 106, skillName: 'How to Poach Eggs Perfectly', category: 'Cooking'}),

        knex('skills').insert({id: 107, skillName: 'How to Change A Car Tyre', category: 'Auto'}),
        knex('skills').insert({id: 108, skillName: 'How To Jumpstart Your Car', category: 'Auto'}),
        knex('skills').insert({id: 109, skillName: 'How to Check Your Tyre Pressure', category: 'Auto'}),

        knex('skills').insert({id: 1010, skillName: 'How to Iron Clothes Properly?', category: 'Domestic'}),
        knex('skills').insert({id: 1011, skillName: 'How to Change a Light Bulb', category: 'Domestic'}),
        knex('skills').insert({id: 1012, skillName: 'How to Wash Clothes', category: 'Domestic'}),

        knex('skills').insert({id: 1013, skillName: 'How to Write a Cheque', category: 'Budget'}),
        knex('skills').insert({id: 1014, skillName: 'How to Write a Budget', category: 'Budget'}),
        knex('skills').insert({id: 1015, skillName: 'How to Save Money', category: 'Budget'})


      ])
    })

}
