
exports.up = (knex, Promise) => {
  return knex.schema.table('skills', (table) => {
    table.string('difficulty')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.table('skills', (table) => {
    table.dropColumn('difficulty')
  })
}
