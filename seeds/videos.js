
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      return Promise.all([

        knex('videos').insert({id: 206, skill_id: 104 , url: 'https://www.youtube.com/embed/s9r-CxnCXkg', votes: 50, type: "tutorial"}),
        knex('videos').insert({id: 207, skill_id: 105 , url: 'https://www.youtube.com/embed/J5_HmfZyhKo', votes: 75, type: "tutorial"}),
        knex('videos').insert({id: 208, skill_id: 106 , url: 'https://www.youtube.com/embed/pAWduxoCgVk', votes: 303, type: "tutorial"}),
        knex('videos').insert({id: 209, skill_id: 107 , url: 'https://www.youtube.com/embed/ZRC46-UCmsI', votes: 118, type: "tutorial"}),
        knex('videos').insert({id: 2010, skill_id: 108 , url: 'https://www.youtube.com/embed/NYmC0QXhKDI', votes: 91, type: "tutorial"}),

        knex('videos').insert({id: 2011, skill_id: 109 , url: 'https://www.youtube.com/embed/joBmbh0AGSQ', votes: 121, type: "tutorial"}),
        knex('videos').insert({id: 2012, skill_id: 1010, url: 'https://www.youtube.com/embed/iI1o2hNy2hE', votes: 107, type: "tutorial"}),
        knex('videos').insert({id: 2013, skill_id: 1011, url: 'https://www.youtube.com/embed/8vVk8oHmvbs', votes: 67, type: "tutorial"}),
        knex('videos').insert({id: 2014, skill_id: 1012, url: 'https://www.youtube.com/embed/gPe5eFv0blk', votes: 40, type: "tutorial"}),
        knex('videos').insert({id: 2015, skill_id: 1013, url: 'https://www.youtube.com/embed/O1hF25Cowv8', votes: 40, type: "tutorial"}),

        knex('videos').insert({id: 2016, skill_id: 1014, url: 'https://www.youtube.com/embed/vnkHbDKnSJ4', votes: 150, type: "tutorial"}),
        knex('videos').insert({id: 2017, skill_id: 1015, url: 'https://www.youtube.com/embed/wDtfFrHKotc', votes: 30, type: "tutorial"}),
        knex('videos').insert({id: 2018, skill_id: 1016, url: 'https://www.youtube.com/embed/BfnIleOEmZM', votes: 18, type: "tutorial"}),
        knex('videos').insert({id: 2019, skill_id: 1017, url: 'https://www.youtube.com/embed/kfULbRcK0b8', votes: 11, type: "tutorial"}),
        knex('videos').insert({id: 2020, skill_id: 1018, url: 'https://www.youtube.com/embed/K-a36PqpUxM', votes: 125, type: "tutorial"}),
        knex('videos').insert({id: 2021, skill_id: 1019, url: 'https://www.youtube.com/embed/fu3F8GSK8DQ', votes: 300, type: "tutorial"}),
        knex('videos').insert({id: 2022, skill_id: 1020, url: 'https://www.youtube.com/embed/TNciJiLlCZw', votes: 26, type: "tutorial"}),

        knex('videos').insert({id: 2023, skill_id: 1021, url: 'https://www.youtube.com/embed/5iqZmYZezgs', votes: 55, type: "tutorial"}),
        knex('videos').insert({id: 2024, skill_id: 1022, url: 'https://www.youtube.com/embed/8bfiXoEeYq4', votes: 83, type: "tutorial"}),
        knex('videos').insert({id: 2025, skill_id: 1023, url: 'https://www.youtube.com/embed/5mjzftwnmjc', votes: 90, type: "tutorial"}),
        knex('videos').insert({id: 2026, skill_id: 1024, url: 'https://www.youtube.com/embed/Qe187IICZww', votes: 222, type: "tutorial"}),
        knex('videos').insert({id: 2027, skill_id: 1025, url: 'https://www.youtube.com/embed/nOYz_ZTKy0I', votes: 67, type: "tutorial"}),

        knex('videos').insert({id: 2028, skill_id: 1026, url: 'https://www.youtube.com/embed/5Ojl28uJeUo', votes: 45, type: "tutorial"}),
        knex('videos').insert({id: 2029, skill_id: 1027, url: 'https://www.youtube.com/embed/_2tBWIeTxH0', votes: 78, type: "tutorial"}),
        knex('videos').insert({id: 2030, skill_id: 1028, url: 'https://www.youtube.com/embed/y0RiY7j6zzs', votes: 89, type: "tutorial"}),
        knex('videos').insert({id: 2031, skill_id: 1029, url: 'https://www.youtube.com/embed/eqagBlj9StM', votes: 167, type: "tutorial"}),
        knex('videos').insert({id: 2032, skill_id: 1030, url: 'https://www.youtube.com/embed/Bi2fITIKOJg', votes: 26, type: "tutorial"}),

        knex('videos').insert({id: 2033, skill_id: 1031, url: 'https://www.youtube.com/embed/JuOgaFnpTB0', votes: 111, type: "tutorial"}),
        knex('videos').insert({id: 2034, skill_id: 1032, url: 'https://www.youtube.com/embed/VvVUvWwUrzI', votes: 56, type: "tutorial"}),
        knex('videos').insert({id: 2035, skill_id: 1033, url: 'https://www.youtube.com/embed/4O8DmkAC2wI', votes: 22, type: "tutorial"}),
        knex('videos').insert({id: 2036, skill_id: 1034, url: 'https://www.youtube.com/embed/Ya6eKss6sqk', votes: 05, type: "tutorial"}),
        knex('videos').insert({id: 2037, skill_id: 1035, url: 'https://www.youtube.com/embed/07HoVJUPqEs', votes: 29, type: "tutorial"})

      ])
    })
}
