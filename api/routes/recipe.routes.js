const recipeRouter = require('express').Router();
const Recipes = require('../../data/helpers/recipe.models');

recipeRouter
  // all recipes
  .get('/recipes', async (req, res, next) => {
    try {
      const recipes = await Recipes.getRecipes();
      return res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  })
  // single recipe shopping list
  .get('/recipes/:id/shoppingList', async (req, res, next) => {
    // TODO
    try {
      const list = await Recipes.getShoppingList(req.params.id);
      return res.status(200).json(list);
    } catch (error) {
      next(error);
    }
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
