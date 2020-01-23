
exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments()
    tbl.text("name", 120).unique().notNullable().index()
    tbl.text("steps", 1000).notNullable()
  })
  .createTable("ingredients", tbl => {
      tbl.increments()
      tbl.text("name", 120).notNullable().index()
      tbl.float("quantity").notNullable().unsigned()
      tbl.text("type", 120).notNullable()
  })
  .createTable("recipe_ingredients", tbl => {
      tbl.increments()
      tbl.integer("recipes_id").unsigned().notNullable().references("id").inTable("recipes").onUpdate("CASCADE").onDelete("CASCADE")
      tbl.integer("ingredients_id").unsigned().notNullable().references("id").inTable("ingredients").onUpdate("CASCADE").onDelete("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_ingredients")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes")
};
