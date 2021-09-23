exports.up = function (knex) {
  return knex.schema.createTable('category', table => {
    table.increments('id')
    table.string('title')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('category')
}
