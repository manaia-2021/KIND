exports.up = function (knex) {
  return knex.schema.createTable('user_action', table => {
    table.increments('id')
    table.integer('user_id')
    table.integer('action_id')
    table.boolean('completed').defaultTo(false)
    table.integer('counter').defaultTo(0)
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_action')
}
