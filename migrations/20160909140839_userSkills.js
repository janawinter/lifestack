exports.up = (knex, Promise) => {
  return knex.schema.createTable('userSkills', (table) => {
    table.increments('id').primary()
    table.integer('skill_id')
    table.integer('user_id')
    table.string('status')
    table.string('showcaseURL')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('userSkills')
}
