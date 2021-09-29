exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_action').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_action').insert([
        { user_id: 1, action_id: 1, completed: false, counter: 0 },
        { user_id: 1, action_id: 2, completed: true, counter: 0 },
        { user_id: 1, action_id: 5, completed: true, counter: 0 },
        { user_id: 1, action_id: 23, completed: true, counter: 0 },
        { user_id: 2, action_id: 22, completed: true, counter: 0 },
        { user_id: 3, action_id: 15, completed: true, counter: 0 },
        { user_id: 5, action_id: 7, completed: true, counter: 0 },
        { user_id: 6, action_id: 10, completed: true, counter: 0 }
      ])
    })
}
