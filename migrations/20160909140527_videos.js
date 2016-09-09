exports.up = (knex, Promise) => {
  return knex.schema.createTable('videos', (table) => {
    table.increments('id').primary()
    table.integer('skill_id')
    table.string('url')
    table.integer('votes')
    table.string('type')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('videos')
}
