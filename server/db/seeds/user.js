exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Kerry', user_name: 'kindKerry', email_address: 'email@address.com' },
        { id: 2, name: 'Brad', user_name: 'kindBrad', email_address: 'email1@address.com' },
        { id: 3, name: 'ChrisA', user_name: 'kindChirs', email_address: 'email2@address.com' },
        { id: 4, name: 'ChrisW', user_name: 'kindChrisW', email_address: 'email3@address.com' },
        { id: 5, name: 'Nirvan', user_name: 'kindNirvan', email_address: 'email4@address.com' }
      ])
    })
}
