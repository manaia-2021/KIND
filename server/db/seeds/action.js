exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        { id: 1, category_id: 101, title: 'travel', description: 'Purchase an electric vehicle', points: 100 },
        { id: 2, category_id: 101, title: 'travel', description: 'Telecommute to work today', points: 20 },
        { id: 3, category_id: 101, title: 'travel', description: 'Ride to work by bike today', points: 10 },
        { id: 4, category_id: 101, title: 'travel', description: 'Take public transportation today', points: 5 },
        { id: 5, category_id: 101, title: 'travel', description: 'Carpool to work today', points: 5 },
        { id: 6, category_id: 101, title: 'travel', description: 'Purchase a hybrid vehicle', points: 30 },
        { id: 7, category_id: 101, title: 'travel', description: 'Book your vehicle in for a service', points: 5 },
        { id: 8, category_id: 101, title: 'travel', description: 'Walk to work today', points: 20 },
        { id: 9, category_id: 102, title: 'energy', description: 'Switch to CFLs or LEDs', points: 5 },
        { id: 10, category_id: 102, title: 'energy', description: 'Turn off all appliances before leaving home', points: 5 },
        { id: 11, category_id: 102, title: 'energy', description: 'Purchase a heat pump', points: 5 },
        { id: 12, category_id: 102, title: 'energy', description: 'Purchase high-efficiency cooling', points: 5 },
        { id: 13, category_id: 102, title: 'energy', description: 'Line dry your washing today', points: 5 },
        { id: 14, category_id: 102, title: 'energy', description: 'Install a solar panel', points: 120 },
        { id: 15, category_id: 102, title: 'energy', description: 'Replace an electrical appliance with better Energy Star rating', points: 20 },
        { id: 16, category_id: 103, title: 'water', description: 'Install a solar water heater', points: 30 },
        { id: 17, category_id: 103, title: 'water', description: 'Install low flow toilets', points: 5 },
        { id: 18, category_id: 103, title: 'water', description: 'Turn off the tap while brushing your teeth', points: 5 },
        { id: 19, category_id: 103, title: 'water', description: 'Only run the washing machine and dishwasher when you have a full load', points: 5 },
        { id: 20, category_id: 103, title: 'water', description: 'Install a rain barrel for outdoor watering', points: 10 },
        { id: 21, category_id: 103, title: 'water', description: 'Use a low flow shower head and tap aerators', points: 10 },
        { id: 22, category_id: 103, title: 'water', description: 'Fix any known leaks', points: 5 },
        { id: 23, category_id: 104, title: 'food and drink', description: 'Buy a reusable mug', points: 5 },
        { id: 24, category_id: 104, title: 'food and drink', description: 'Use a reusable bottle for beverages on-the-go', points: 5 },
        { id: 25, category_id: 104, title: 'food and drink', description: 'Buy locally grown produce today ', points: 10 },
        { id: 26, category_id: 104, title: 'food and drink', description: 'Plant your own produce today', points: 5 },
        { id: 27, category_id: 104, title: 'food and drink', description: 'Buy sustainable sea food', points: 15 },
        { id: 28, category_id: 104, title: 'food and drink', description: 'Have a meat-less day', points: 20 },
        { id: 29, category_id: 104, title: 'food and drink', description: 'Go vegan for a day', points: 30 },
        { id: 30, category_id: 105, title: 'waste', description: 'Check your rubbish for items that can be recycled', points: 15 },
        { id: 31, category_id: 105, title: 'waste', description: 'Purchase a second hand item', points: 5 },
        { id: 32, category_id: 105, title: 'waste', description: 'Switch to washable nappies', points: 10 },
        { id: 33, category_id: 105, title: 'waste', description: 'Buy a compost bin', points: 20 },
        { id: 34, category_id: 105, title: 'waste', description: 'Avoid single-use food and drink containers today', points: 10 },
        { id: 35, category_id: 105, title: 'waste', description: 'Donate any unused goods', points: 5 },
        { id: 36, category_id: 105, title: 'waste', description: 'Curb your use of paper: mail, receipts, magazines', points: 5 }

      ])
    })
}
