exports.up = function (knex) {
  return knex.schema.createTable('semana', function (table) {
    table.string('id').primary()
    table.string('nome').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('semana')
}
