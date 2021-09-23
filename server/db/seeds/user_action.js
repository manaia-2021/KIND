
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_action').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_action').insert([
        {user_id: 1, action_id: 1, completed: true, counter: 0},
        {user_id: 2, action_id: 2, completed: true, counter: 0},
        {user_id: 3, action_id: 3, completed: true, counter: 0},
        {user_id: 4, action_id: 4, completed: true, counter: 0},
        {user_id: 5, action_id: 5, completed: true, counter: 0}
      ]);
    });
};
