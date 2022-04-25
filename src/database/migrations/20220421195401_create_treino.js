exports.up = function (knex) {
  return knex.schema.createTable('treino', function (table) {
    table.increments('id')
    table.string('aluno_id').notNullable()
    table.string('tipo_id').notNullable()
    table.string('semana_id').notNullable()
    table.string('exerc_id').notNullable()
    table.string('quantidade').notNullable()
    table.string('carga').notNullable()

    table.foreign('aluno_id').references('id').inTable('alunos')
    table.foreign('semana_id').references('id').inTable('semana')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('treino')
}
