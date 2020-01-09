const recipeRouter = require('express').Router();

recipeRouter
  // all recipes
  .get('/recipes', async (req, res, next) => {
    // TODO
  })
  // single recipe shopping list
  .get('/recipes/:id/shoppingList', async (req, res, next) => {
    // TODO
  })
  // instructions for single recipe
  .get('/recipes/:id/instructions', async (req, res, next) => {
    // TODO
  })
  // all recipes using the same single ingredient
  .get('/ingredients/:id/recipes', async (req, res, next) => {
    // TODO
  });

module.exports = recipeRouter;
