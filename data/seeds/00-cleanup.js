exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipe_ingredients').truncate();
  await knex('ingredients').truncate();
  await knex('steps').truncate();
  await knex('recipes').truncate();
};
