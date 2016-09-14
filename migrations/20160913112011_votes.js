
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userVotes', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('video_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('userVotes')
}
