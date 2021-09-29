exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('user_name')
    table.string('email_address').unique()
    table.string('avatar_url').defaultTo('/images/avatar.jpg')
    table.integer('points').defaultTo(0)
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
