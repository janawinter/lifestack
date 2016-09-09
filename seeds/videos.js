
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        // knex('videos').insert({id: 201, skill_id: 101 , url: 'https://www.youtube.com/watch?v=jpIX1_qQni8', votes: 150, type: "tutorial"}),
        // knex('videos').insert({id: 202, skill_id: 102 , url: 'https://www.youtube.com/watch?v=KBtkup2PWAU', votes: 50, type: "tutorial"}),
        // knex('videos').insert({id: 203, skill_id: 103 , url: 'https://www.youtube.com/watch?v=aaqzPMOd_1g', votes: 5, type: "tutorial"}),
        // knex('videos').insert({id: 204, skill_id: 102 , url: 'https://www.youtube.com/watch?v=KBtkup2PWAU', votes: 50, type: "showcase"}),
        // knex('videos').insert({id: 205, skill_id: 101 , url: 'https://www.youtube.com/watch?v=jpIX1_qQni8', votes: 5, type: "showcase"}),
        knex('videos').insert({id: 206, skill_id: 104 , url: 'https://www.youtube.com/embed/s9r-CxnCXkg', votes: 50, type: "tutorial"}),
        knex('videos').insert({id: 207, skill_id: 104 , url: 'https://www.youtube.com/embed/PUP7U5vTMM0', votes: 200, type: "tutorial"}),
        knex('videos').insert({id: 208, skill_id: 104 , url: 'https://www.youtube.com/embed/Vuy2nrJz0Zw', votes: 150, type: "tutorial"}),

        knex('videos').insert({id: 209, skill_id: 105 , url: 'https://www.youtube.com/embed/J5_HmfZyhKo', votes: 75, type: "tutorial"}),
        knex('videos').insert({id: 2010, skill_id: 105 , url: 'https://www.youtube.com/embed/a5z4ZN3XVRY', votes: 55, type: "tutorial"}),
        knex('videos').insert({id: 2011, skill_id: 105 , url: 'https://www.youtube.com/embed/dowcKoAZdFI', votes: 105, type: "tutorial"}),

        knex('videos').insert({id: 2012, skill_id: 106 , url: 'https://www.youtube.com/embed/pAWduxoCgVk', votes: 303, type: "tutorial"}),
        knex('videos').insert({id: 2013, skill_id: 106 , url: 'https://www.youtube.com/embed/cIvpbSEboYI', votes: 90, type: "tutorial"}),
        knex('videos').insert({id: 2014, skill_id: 106 , url: 'https://www.youtube.com/embed/nIKkzRQOkdw', votes: 80, type: "tutorial"}),

        knex('videos').insert({id: 2015, skill_id: 107 , url: 'https://www.youtube.com/embed/0kfJ7Lu4tvo', votes: 118, type: "tutorial"}),
        knex('videos').insert({id: 2016, skill_id: 107 , url: 'https://www.youtube.com/embed/AT_pPlJTiyE', votes: 118, type: "tutorial"}),
        knex('videos').insert({id: 2017, skill_id: 107 , url: 'https://www.youtube.com/embed/joBmbh0AGSQ', votes: 118, type: "tutorial"}),

        knex('videos').insert({id: 2018, skill_id: 108 , url: 'https://www.youtube.com/embed/dKzxqZcpkgI', votes: 91, type: "tutorial"}),
        knex('videos').insert({id: 2019, skill_id: 108 , url: 'https://www.youtube.com/embed/TUnFeVfEkp0', votes: 70, type: "tutorial"}),
        knex('videos').insert({id: 2020, skill_id: 108 , url: 'https://www.youtube.com/embed/wjvZw9jZCaE', votes: 100, type: "tutorial"}),

        knex('videos').insert({id: 2021, skill_id: 109 , url: 'https://www.youtube.com/embed/w8dBrT5q4aY', votes: 121, type: "tutorial"}),
        knex('videos').insert({id: 2022, skill_id: 109 , url: 'https://www.youtube.com/embed/asfclAs8dU8', votes: 40, type: "tutorial"}),
        knex('videos').insert({id: 2023, skill_id: 109 , url: 'https://www.youtube.com/embed/QTst6ZdlVtg', votes: 77, type: "tutorial"}),

        knex('videos').insert({id: 2024, skill_id: 1010, url: 'https://www.youtube.com/embed/vnkHbDKnSJ4', votes: 107, type: "tutorial"}),
        knex('videos').insert({id: 2025, skill_id: 1010, url: 'https://www.youtube.com/embed/0EpinulvKTA', votes: 67, type: "tutorial"}),
        knex('videos').insert({id: 2026, skill_id: 1010, url: 'https://www.youtube.com/embed/z91MtZpcsKY', votes: 157, type: "tutorial"}),

        knex('videos').insert({id: 2027, skill_id: 1011, url: 'https://www.youtube.com/embed/-oRCvLtnYMY', votes: 67, type: "tutorial"}),
        knex('videos').insert({id: 2028, skill_id: 1011, url: 'https://www.youtube.com/embed/JW2Br1yjwZA', votes: 123, type: "tutorial"}),
        knex('videos').insert({id: 2029, skill_id: 1011, url: 'https://www.youtube.com/embed/Mceug13fjiQ', votes: 111, type: "tutorial"}),

        knex('videos').insert({id: 2030, skill_id: 1012, url: 'https://www.youtube.com/embed/T708UDZ-uBM', votes: 40, type: "tutorial"}),
        knex('videos').insert({id: 2031, skill_id: 1012, url: 'https://www.youtube.com/embed/BfnIleOEmZM', votes: 240, type: "tutorial"}),
        knex('videos').insert({id: 2032, skill_id: 1012, url: 'https://www.youtube.com/embed/PNU21gVWOK8', votes: 121, type: "tutorial"}),

        knex('videos').insert({id: 2033, skill_id: 1013, url: 'https://www.youtube.com/embed/XYmqVYlLO7U', votes: 40, type: "tutorial"}),
        knex('videos').insert({id: 2034, skill_id: 1013, url: 'https://www.youtube.com/embed/b7Virks8rlw', votes: 177, type: "tutorial"}),
        knex('videos').insert({id: 2035, skill_id: 1013, url: 'https://www.youtube.com/embed/b7Virks8rlw', votes: 119, type: "tutorial"}),

        knex('videos').insert({id: 2036, skill_id: 1014, url: 'https://www.youtube.com/embed/Rs8P0Eh7Zbc', votes: 150, type: "tutorial"}),
        knex('videos').insert({id: 2037, skill_id: 1014, url: 'https://www.youtube.com/embed/pN709oX9Bzk', votes: 54, type: "tutorial"}),
        knex('videos').insert({id: 2038, skill_id: 1014, url: 'https://www.youtube.com/embed/8bfiXoEeYq4', votes: 159, type: "tutorial"}),

        knex('videos').insert({id: 2039, skill_id: 1015, url: 'https://www.youtube.com/embed/FpHK_uDQLH4', votes: 100, type: "tutorial"}),
        knex('videos').insert({id: 2040, skill_id: 1015, url: 'https://www.youtube.com/embed/GH_JLA-fkBY', votes: 77, type: "tutorial"}),
        knex('videos').insert({id: 2041, skill_id: 1015, url: 'https://www.youtube.com/embed/5mjzftwnmjc', votes: 59, type: "tutorial"}),





      ])
    })
}
