exports.up = async function(knex) {
  // Recipes
  await knex.schema.createTable('recipes', tbl => {
    tbl.increments('id');
    tbl.string('name').notNullable();
  });

  // Steps / Instruction for each recipe
  await knex.schema.createTable('steps', tbl => {
    tbl.increments('id');
    tbl.integer('step_number').unsigned();
    tbl.string('instruction').notNullable();
    tbl
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });

  // Ingredients
  await knex.schema.createTable('ingredients', tbl => {
    tbl.increments('id');
    tbl.string('name').notNullable();
  });

  // What ingredients each recipe gets
  await knex.schema.createTable('recipe_ingredients', tbl => {
    tbl
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('ingredient_id')
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    // Set the primary key for the table
    tbl.primary(['recipe_id', 'ingredient_id']);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipe_ingredients');
  await knex.schema.dropTableIfExists('ingredients');
  await knex.schema.dropTableIfExists('steps');
  await knex.schema.dropTableIfExists('recipes');
};
