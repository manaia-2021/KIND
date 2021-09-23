
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 101, title: 'travel'},
        {id: 102, title: 'energy'},
        {id: 103, title: 'water'},
        {id: 104, title: 'transport'},
        {id: 105, title: 'food_and_drink'},
        {id: 106, title: 'waste'}
      ]);
    });
};
