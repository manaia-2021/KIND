
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_action').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_action').insert([
        {user_id: 1, action_id: 1, completed: true, counter: 0},
        {user_id: 1, action_id: 1, completed: true, counter: 0},
        {user_id: 1, action_id: 1, completed: true, counter: 0},
        {user_id: 1, action_id: 1, completed: true, counter: 0},
        {user_id: 1, action_id: 1, completed: true, counter: 0}
      ]);
    });
};
