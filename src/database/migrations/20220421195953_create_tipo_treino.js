exports.up = function (knex) {
  return knex.schema.createTable('tipo', function (table) {
    table.increments()
    table.string('nome').notNullable()
    table.string('tipo_id').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tipo')
}
