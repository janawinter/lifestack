
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userSkills').del()
    .then(function () {
      return Promise.all([

        knex('userSkills').insert({id: 1097, user_id: 197, skill_id: 104, showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'}),
        knex('userSkills').insert({id: 1096, user_id: 197, skill_id: 105, showcaseURL: 'https://www.youtube.com/embed/J5_HmfZyhKo'}),
        knex('userSkills').insert({id: 1095, user_id: 197, skill_id: 106, showcaseURL: 'https://www.youtube.com/embed/pAWduxoCgVk'}),
        knex('userSkills').insert({id: 1094, user_id: 197, skill_id: 107, showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'}),
        knex('userSkills').insert({id: 1093, user_id: 197, skill_id: 108, showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'}),
        knex('userSkills').insert({id: 1092, user_id: 198, skill_id: 109, showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'}),
        knex('userSkills').insert({id: 1091, user_id: 198, skill_id: 1010, showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'}),
        knex('userSkills').insert({id: 1090, user_id: 198, skill_id: 1011, showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'}),
        knex('userSkills').insert({id: 1089, user_id: 198, skill_id: 1012, showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'}),
        knex('userSkills').insert({id: 1088, user_id: 198, skill_id: 1013, showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'}),
        knex('userSkills').insert({id: 1087, user_id: 198, skill_id: 1014, showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'}),
        knex('userSkills').insert({id: 1086, user_id: 199, skill_id: 1015, showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'})

      ])
    })
}
