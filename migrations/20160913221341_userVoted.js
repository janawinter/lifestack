
exports.up = (knex, Promise) => {
  return knex.schema.table('userVotes', (table) => {
    table.integer('voted')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.table('userVotes', (table) => {
    table.dropColumn('voted')
  })
}
