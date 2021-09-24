exports.up = function (knex) {
  return knex.schema.createTable('action', table => {
    table.increments('id')
    table.integer('category_id')
    table.string('title')
    table.string('description')
    table.integer('points')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('action')
}
