exports.up = function (knex) {
  return knex.schema.createTable('alunos', function (table) {
    table.string('id').primary()
    table.string('nome').notNullable()
    table.string('dt_nasc').notNullable()
    table.string('genero').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('endereco').notNullable()
    table.string('cidade').notNullable()
    table.string('uf', 2).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('alunos')
}
