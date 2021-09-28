exports.up = function (knex) {
  return knex.schema.table('category', table => {
    table.string('description')
    table.string('icon')
  })
}

exports.down = function (knex) {
  return knex.schema.table('category', table => {
    table.dropColumn('description')
    table.string('icon')
  })
}
