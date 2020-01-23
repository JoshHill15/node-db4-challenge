
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'pepperonies', quantity: 3.3, type: "gram"},
        {name: 'flour', quantity: 4.3, type: "pound"},
        {name: 'eggs', quantity: 2, type: "each"}
      ]);
    });
};
