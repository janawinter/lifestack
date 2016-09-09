
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userSkills').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        // knex('userSkills').insert({id: 1099, user_id: 199, skill_id: 101, showcaseURL: 'https://www.youtube.com/watch?v=KBtkup2PWAU'}),
        // knex('userSkills').insert({id: 1098, user_id: 198, skill_id: 101, showcaseURL: 'https://www.youtube.com/watch?v=KBtkup2PWAU'}),
        // knex('userSkills').insert({id: 1097, user_id: 197, skill_id: 103, showcaseURL: 'https://www.youtube.com/watch?v=jpIX1_qQni8'}),
        knex('userSkills').insert({id: 1097, user_id: 197, skill_id: 104, showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'}),
        knex('userSkills').insert({id: 1096, user_id: 196, skill_id: 105, showcaseURL: 'https://www.youtube.com/embed/J5_HmfZyhKo'}),
        knex('userSkills').insert({id: 1095, user_id: 195, skill_id: 106, showcaseURL: 'https://www.youtube.com/embed/pAWduxoCgVk'})
        knex('userSkills').insert({id: 1094, user_id: 194, skill_id: 107,
        knex('userSkills').insert({id: 1093, user_id: 193, skill_id: 108,
        knex('userSkills').insert({id: 1092, user_id: 192, skill_id: 109,
        knex('userSkills').insert({id: 1091, user_id: 191, skill_id: 1010,
        knex('userSkills').insert({id: 1090, user_id: 190, skill_id: 1011,
        knex('userSkills').insert({id: 1089, user_id: 189, skill_id: 1012,
        knex('userSkills').insert({id: 1088, user_id: 188, skill_id: 1013,
        knex('userSkills').insert({id: 1087, user_id: 187, skill_id: 1014,
        knex('userSkills').insert({id: 1086, user_id: 186, skill_id: 1015



      ])
    })
}
