
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Kerry', user_name: 'kindKerry'},
        {id: 2, name: 'Brad', user_name: 'kindBrad'},
        {id: 3, name: 'ChrisA', user_name: 'kindChirs'},
        {id: 4, name: 'ChrisW', user_name: 'kindChrisW'},
        {id: 5, name: 'Nirvan', user_name: 'kindNirvan'} 
      ]);
    });
};
