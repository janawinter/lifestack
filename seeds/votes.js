
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userVotes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('userVotes').insert({}),
        knex('userVotes').insert({})
      ])
    })
}
