exports.up = function (knex) {
  return knex.schema.table('users', table => {
    table.string('email_address').unique()
  })
}

exports.down = function (knex) {
  return knex.schema.table('users', table => {
    table.dropColumn('email_address')
  })
}
