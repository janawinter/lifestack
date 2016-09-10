
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 199, username: 'user 1', profile_pic: 'http://www.aspirehire.co.uk/aspirehire-co-uk/_img/profile.svg'}),
        knex('users').insert({id: 198, username: 'user 2', profile_pic: 'http://www.aspirehire.co.uk/aspirehire-co-uk/_img/profile.svg'}),
        knex('users').insert({id: 197, username: 'user 3', profile_pic: 'http://www.aspirehire.co.uk/aspirehire-co-uk/_img/profile.svg'})
      ])
    })
}
