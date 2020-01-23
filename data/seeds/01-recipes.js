
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'apple pie', steps: "do this and this"},
        {name: 'pizza', steps: "do this and that"},
        {name: 'omelet', steps: "do that and that"}
      ]);
    });
};
