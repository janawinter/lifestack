
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      return Promise.all([

        knex('skills').insert({id: 104, skillName: 'How to Cook Scrambled Eggs', category: 'Cooking', difficulty: 'easy'}),
       knex('skills').insert({id: 105, skillName: 'How to Fry Eggs', category: 'Cooking', difficulty: 'medium'}),
       knex('skills').insert({id: 106, skillName: 'How to Poach Eggs Perfectly', category: 'Cooking', difficulty: 'easy'}),
       knex('skills').insert({id: 107, skillName: 'How to Operate a BBQ', category: 'Cooking', difficulty: 'easy'}),
       knex('skills').insert({id: 108, skillName: 'How to Make a Pot of Coffee', category: 'Cooking', difficulty: 'easy'}),

       knex('skills').insert({id: 109, skillName: 'How to Change A Car Tyre', category: 'Auto', difficulty: 'easy'}),
       knex('skills').insert({id: 1010, skillName: 'How To Jumpstart Your Car', category: 'Auto', difficulty: 'medium'}),
       knex('skills').insert({id: 1011, skillName: 'How to Check Your Tyre Pressure', category: 'Auto', difficulty: 'hard'}),
       knex('skills').insert({id: 1012, skillName: 'How To Parallel Park', category: 'Auto', difficulty: 'hard'}),
       knex('skills').insert({id: 1013, skillName: 'How to Change Your Oil', category: 'Auto', difficulty: 'easy'}),

       knex('skills').insert({id: 1014, skillName: 'How to Iron Clothes Properly', category: 'Domestic', difficulty: 'medium'}),
       knex('skills').insert({id: 1015, skillName: 'How to Change a Light Bulb', category: 'Domestic', difficulty: 'easy'}),
       knex('skills').insert({id: 1016, skillName: 'How to Wash Clothes', category: 'Domestic', difficulty: 'easy'}),
       knex('skills').insert({id: 1017, skillName: 'How to Fix a Hem', category: 'Domestic', difficulty: 'medium'}),
       knex('skills').insert({id: 1018, skillName: 'How to Change a Duvet Cover', category: 'Domestic', difficulty: 'easy'}),
       knex('skills').insert({id: 1019, skillName: 'How to Sew a Button', category: 'Domestic', difficulty: 'medium'}),
       knex('skills').insert({id: 1020, skillName: 'How to Remove a Stain', category: 'Domestic', difficulty: 'easy'}),

       knex('skills').insert({id: 1021, skillName: 'How to Write a Cheque', category: 'Budget', difficulty: 'medium'}),
        knex('skills').insert({id: 1022, skillName: 'How to Write a Budget', category: 'Budget', difficulty: 'hard'}),
        knex('skills').insert({id: 1023, skillName: 'How to Save Money', category: 'Budget', difficulty: 'hard'}),
        knex('skills').insert({id: 1024, skillName: 'How to Do Your Taxes', category: 'Budget', difficulty: 'hard'}),
        knex('skills').insert({id: 1025, skillName: 'How to Ask for a Raise', category: 'Budget', difficulty: 'hard'}),

        knex('skills').insert({id: 1026, skillName: 'How to Weed a Garden', category: 'Outdoors', difficulty: 'medium'}),
        knex('skills').insert({id: 1027, skillName: 'How to Build a Fire', category: 'Outdoors', difficulty: 'medium'}),
        knex('skills').insert({id: 1028, skillName: 'How to Grow Herbs', category: 'Outdoors', difficulty: 'hard'}),
        knex('skills').insert({id: 1029, skillName: 'How to Recycle', category: 'Outdoors', difficulty: 'easy'}),
        knex('skills').insert({id: 1030, skillName: 'How to Pitch a Tent', category: 'Outdoors', difficulty: 'easy'}),

        knex('skills').insert({id: 1031, skillName: 'How to Tie a Tie', category: 'Personal', difficulty: 'easy'}),
        knex('skills').insert({id: 1032, skillName: 'How to Nail a Job Interview', category: 'Personal', difficulty: 'hard'}),
        knex('skills').insert({id: 1033, skillName: 'Basic Geography', category: 'Personal', difficulty: 'easy'}),
        knex('skills').insert({id: 1034, skillName: 'Know CPR and Heimlich Maneuver', category: 'Personal', difficulty: 'medium'}),
        knex('skills').insert({id: 1035, skillName: 'How to Write A Professional Email', category: 'Personal', difficulty: 'medium'})

      ])
    })

}
