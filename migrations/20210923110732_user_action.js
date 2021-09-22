exports.up = function (knex) {
  return knex.schema.createTable('user_action', table => {
    table.integer('user_id')
    table.integer('action_id')
    table.boolean('completed')
    table.integer('counter')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_action')
}
