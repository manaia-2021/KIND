exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        { id: 101, title: 'Travel', description: 'Road, air, rail and ocean', icon: '/images/travel.png' },
        { id: 102, title: 'Energy', description: 'Electricity and other utilities', icon: '/images/energy.png' },
        { id: 103, title: 'Water', description: 'Council water supply', icon: '/images/water.png' },
        { id: 104, title: 'Food & Drink', description: 'Household grocery and dining', icon: '/images/food.png' },
        { id: 105, title: 'Waste', description: 'General waste and recycling', icon: '/images/waste.png' }
      ])
    })
}
