const db = require('../db-config');

function getRecipes() {
  return db('recipes').select();
}

function getShoppingList(recipe_id) {
  return db('recipe_ingredients as RI')
    .join('ingredients as I', 'RI.ingredient_id', 'I.Id')
    .select('I.name')
    .where({ recipe_id: recipe_id });
}

function getInstructions(recipe_id) {}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
