
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Kerry', user_name: 'kindKerry', avatar_url: 'https://', points: 0},
        {id: 2, name: 'Brad', user_name: 'kindBrad', avatar_url: 'https://', points: 0},
        {id: 3, name: 'ChrisA', user_name: 'kindChirs', avatar_url: 'https://', points: 0},
        {id: 4, name: 'ChrisW', user_name: 'kindChrisW', avatar_url: 'https://', points: 0},
        {id: 5, name: 'Nirvan', user_name: 'kindNirvan', avatar_url: 'https://', points: 0} 
      ]);
    });
};
