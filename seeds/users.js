
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 199, username: 'Janawhat',twitter_id:'297120112', profile_pic: 'http://www.aspirehire.co.uk/aspirehire-co-uk/_img/profile.svg'}),
        knex('users').insert({id: 198, username: 'phant35', twitter_id:'473383919', profile_pic: 'http://www.aspirehire.co.uk/aspirehire-co-uk/_img/profile.svg'})
      ])
    })
}
