exports.up = (knex, Promise) => {
  return knex.schema.createTable('userSkills', (table) => {
    table.increments('id').primary()
    table.integer('skill_id').references('id').inTable('skills').onUpdate('CASCADE').onDelete('CASCADE')
    table.integer('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
    table.string('status')
    table.string('showcase')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('userSkills')
}
