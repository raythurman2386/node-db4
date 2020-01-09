const db = require('../db-config');

function getRecipes() {
  return db('recipes').select();
}

function getShoppingList(recipe_id) {}

function getInstructions(recipe_id) {}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
