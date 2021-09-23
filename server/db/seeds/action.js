
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {id: 1, category_id: 101,title: 'travel',description: 'Purchase electric vehicle',points: 100 },
        {id: 2, category_id: 101,title: 'travel',description: 'Telecommute to work',points: 20 },
        {id: 3, category_id: 101,title: 'travel',description: 'Ride by bike',points: 10 },
        {id: 4, category_id: 101,title: 'travel',description: 'Take public transportation',points: 5 },
        {id: 5, category_id: 101,title: 'travel',description: 'Carpool to work',points: 5 },
        {id: 6, category_id: 101,title: 'travel',description: 'Purchase hybrid vehicle',points: 30 },
        {id: 7, category_id: 101,title: 'travel',description: 'Maintain vehicles	',points: 5 },
        {id: 8, category_id: 101,title: 'travel',description: 'walk to work',points: 20 },
        {id: 9, category_id: 102,title: 'energy',description: 'Switch to CFLs or LEDs',points: 5 },
        {id: 10, category_id: 102,title: 'energy',description: 'Turn off lights leaving home or daytime',points: 5 },
        {id: 11, category_id: 102,title: 'energy',description: 'Purchase high-efficiency heating',points: 5 },
        {id: 12, category_id: 102,title: 'energy',description: 'Purchase high-efficiency cooling',points: 5 },
        {id: 13, category_id: 102,title: 'energy',description: 'Line dry washing',points: 5 },
        {id: 14, category_id: 102,title: 'energy',description: 'Install a solar pannel',points: 120 },
        {id: 15, category_id: 102,title: 'energy',description: 'Replace electrical appliances with better Energy Star',points: 20 },
        {id: 16, category_id: 103,title: 'water',description: 'Install a solar water heater',points: 30 },
        {id: 17, category_id: 103,title: 'water',description: 'Install low flow toilets',points: 5 },
        {id: 18, category_id: 103,title: 'water',description: 'Turn off the faucet while brushing your teeth',points: 5 },
        {id: 19, category_id: 103,title: 'water',description: 'Only run the washing machine and dishwasher when you have a full load.',points: 5 },
        {id: 20, category_id: 103,title: 'water',description: 'Install a rain barrel for outdoor watering',points: 10 },
        {id: 21, category_id: 103,title: 'water',description: 'Use a low flow shower head and faucet aerators',points: 10},
        {id: 22, category_id: 103,title: 'water',description: 'Fix leaks',points: 5 },
        {id: 23, category_id: 104,title: 'food and drink',description: 'bring your own reusable mug into coffer shops',points: 5 },
        {id: 24, category_id: 104,title: 'food and drink',description: 'Use a reusable bottle/cup for beverages on-the-go',points: 5 },
        {id: 25, category_id: 104,title: 'food and drink',description: 'buy locally and organically ',points: 10 },
        {id: 26, category_id: 104,title: 'food and drink',description: 'grow your own produce',points: 5 },
        {id: 27, category_id: 104,title: 'food and drink',description: 'eat sustainable sea food',points: 15 },
        {id: 28, category_id: 104,title: 'food and drink',description: 'eat less red meat',points: 20 },
        {id: 29, category_id: 104,title: 'food and drink',description: 'go vegan',points: 30 },
        {id: 30, category_id: 105,title: 'waste',description: 'Purchase wisely and recycle',points: 15 },
        {id: 31, category_id: 105,title: 'waste',description: 'Use second hand objects',points: 5 },
        {id: 32, category_id: 105,title: 'waste',description: 'Prefer washable nappies ',points: 10 },
        {id: 33, category_id: 105,title: 'waste',description: 'compost it',points: 20 },
        {id: 34, category_id: 105,title: 'waste',description: 'Avoid single-use food and drink containers and utensils',points: 10 },
        {id: 35, category_id: 105,title: 'waste',description: 'Buy secondhand items and donate used goods',points: 5 },
        {id: 36, category_id: 105,title: 'waste',description: 'Curb your use of paper: mail, receipts, magazines',points: 5 },
    
      ]);
    });
};
