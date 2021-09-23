
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {id: 1, category_id: 101,title: 'travel',description: 'Purchase electric vehicle',points: 5 },
        {id: 2, category_id: 101,title: 'travel',description: 'Telecommute to work',points: 5 },
        {id: 3, category_id: 101,title: 'travel',description: 'Ride by bike',points: 5 },
        {id: 4, category_id: 101,title: 'travel',description: 'Take public transportation',points: 5 },

      ]);
    });
};
