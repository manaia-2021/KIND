exports.up = function (knex) {
  return knex.schema.table('users', table => {
    table.string('email_address') // you might want to put a unique constraint so two users can't have the same email
  })
}

exports.down = function (knex) {
  return knex.schema.table('users', table => {
    table.dropColumn('email_address')
  })
}
