
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userSkills').del()
    .then(function () {
      return Promise.all([

        knex('userSkills').insert({id: 1097, user_id: 198, skill_id: 104, status: "contributed",showcaseURL: 'https://www.youtube.com/embed/s9r-CxnCXkg'}),
        knex('userSkills').insert({id: 1096, user_id: 198, skill_id: 105, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/J5_HmfZyhKo'}),
        knex('userSkills').insert({id: 1095, user_id: 198, skill_id: 106, status: "contributed",showcaseURL: 'https://www.youtube.com/embed/Vuy2nrJz0Zw'}),
        knex('userSkills').insert({id: 1094, user_id: 198, skill_id: 107, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/J5_HmfZyhKo'}),
        knex('userSkills').insert({id: 1093, user_id: 198, skill_id: 108, status: "contributed",showcaseURL: 'https://www.youtube.com/embed/a5z4ZN3XVRY'}),
        knex('userSkills').insert({id: 1092, user_id: 198, skill_id: 109, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/dowcKoAZdFI'}),
        knex('userSkills').insert({id: 1091, user_id: 198, skill_id: 1010, status: "contributed",showcaseURL: 'https://www.youtube.com/embed/pAWduxoCgVk'}),
        knex('userSkills').insert({id: 1090, user_id: 198, skill_id: 1011, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/cIvpbSEboYI'}),
        knex('userSkills').insert({id: 1089, user_id: 198, skill_id: 1012, status: "contributed",showcaseURL: 'https://www.youtube.com/embed/nIKkzRQOkdw'}),
        knex('userSkills').insert({id: 1088, user_id: 198, skill_id: 1013, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/0kfJ7Lu4tvo'}),
        knex('userSkills').insert({id: 1087, user_id: 198, skill_id: 1014, status: "contributed",showcaseURL: 'https://www.youtube.com/embed/AT_pPlJTiyE'}),
        knex('userSkills').insert({id: 1086, user_id: 198, skill_id: 1015, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/joBmbh0AGSQ'}),
        knex('userSkills').insert({id: 1085, user_id: 198, skill_id: 1016, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/dKzxqZcpkgI'}),
        knex('userSkills').insert({id: 1084, user_id: 198, skill_id: 1017, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/TUnFeVfEkp0'}),
        knex('userSkills').insert({id: 1083, user_id: 198, skill_id: 1018, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/wjvZw9jZCaE'}),
        knex('userSkills').insert({id: 1082, user_id: 198, skill_id: 1019, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/w8dBrT5q4aY'}),
        knex('userSkills').insert({id: 1081, user_id: 198, skill_id: 1020, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/asfclAs8dU8'}),
        knex('userSkills').insert({id: 1080, user_id: 198, skill_id: 1021, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/QTst6ZdlVtg'}),
        knex('userSkills').insert({id: 1079, user_id: 198, skill_id: 1022, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/vnkHbDKnSJ4'}),
        knex('userSkills').insert({id: 1078, user_id: 198, skill_id: 1023, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/0EpinulvKTA'}),
        knex('userSkills').insert({id: 1077, user_id: 198, skill_id: 1024, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/z91MtZpcsKY'}),
        knex('userSkills').insert({id: 1076, user_id: 198, skill_id: 1025, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/-oRCvLtnYMY'}),
        knex('userSkills').insert({id: 1075, user_id: 198, skill_id: 1026, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/JW2Br1yjwZA'}),
        knex('userSkills').insert({id: 1074, user_id: 198, skill_id: 1027, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/Mceug13fjiQ'}),
        knex('userSkills').insert({id: 1073, user_id: 198, skill_id: 1028, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/T708UDZ-uBM'}),
        knex('userSkills').insert({id: 1072, user_id: 198, skill_id: 1029, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/BfnIleOEmZM'}),
        knex('userSkills').insert({id: 1071, user_id: 198, skill_id: 1030, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/PNU21gVWOK8'}),
        knex('userSkills').insert({id: 1070, user_id: 198, skill_id: 1031, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/XYmqVYlLO7U'}),
        knex('userSkills').insert({id: 1069, user_id: 198, skill_id: 1032, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/b7Virks8rlw'}),
        knex('userSkills').insert({id: 1068, user_id: 198, skill_id: 1033, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/CgEu5EAvZYY'}),
        knex('userSkills').insert({id: 1067, user_id: 198, skill_id: 1034, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/Rs8P0Eh7Zbc'}),
        knex('userSkills').insert({id: 1066, user_id: 198, skill_id: 1035, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/pN709oX9Bzk'}),
        knex('userSkills').insert({id: 1065, user_id: 198, skill_id: 1036, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/8bfiXoEeYq4'}),
        knex('userSkills').insert({id: 1064, user_id: 198, skill_id: 1037, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/FpHK_uDQLH4'}),
        knex('userSkills').insert({id: 1063, user_id: 198, skill_id: 1038, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/GH_JLA-fkBY' }),
        knex('userSkills').insert({id: 1062, user_id: 198, skill_id: 1039, status: "contributed", showcaseURL: 'https://www.youtube.com/embed/5mjzftwnmjc'}),
      ])
    })
}
