
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userComments', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('video_id')
    table.string('comments')
    table.timestamps(false, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('userComments')
}
