
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 101, title: 'travel'},
        {id: 102, title: 'energy'},
        {id: 103, title: 'water'},
        {id: 104, title: 'food and drink'},
        {id: 105, title: 'waste'}
      ]);
    });
};
