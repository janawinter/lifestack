exports.up = (knex, Promise) => {
  return knex.schema.createTable('skills', (table) => {
    table.increments('id').primary()
    table.string('skillName')
    table.string('category')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('skills')
}
