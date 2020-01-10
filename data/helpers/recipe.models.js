const db = require('../db-config');

function getRecipes() {
  return db('recipes').select();
}

function getRecipeById(recipe_id) {
  return db('recipes')
    .select()
    .where({ id: recipe_id });
}

function getShoppingList(recipe_id) {
  return db('recipe_ingredients as RI')
    .join('ingredients as I', 'RI.ingredient_id', 'I.Id')
    .select('I.name')
    .where({ recipe_id: recipe_id });
}

function getInstructions(recipe_id) {
  return db('steps as S')
    .join('recipes as R', 'S.recipe_id', 'R.id')
    .select('S.step_number', 'S.instruction')
    .where({ recipe_id: recipe_id })
    .orderBy('S.step_number');
}

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
};
