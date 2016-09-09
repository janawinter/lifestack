exports.up = (knex, Promise) => {
  return knex.schema.createTable('userSkills', (table) => {
    table.increments('id').primary()
    table.string('skill_id').references('id').inTable('skills').onUpdate('CASCADE').onDelete('CASCADE')
    table.string('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
    table.string('status')
    table.string('showcase')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('userSkills')
}
