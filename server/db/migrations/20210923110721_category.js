exports.up = function (knex) {
  return knex.schema.createTable('category', table => {
    table.increments('id')
    table.string('title')
    table.string('description')
    table.string('icon')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('category')
}
