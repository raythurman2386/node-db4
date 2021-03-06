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
  // Get single Recipe
  .get('/recipes/:id', async (req, res, next) => {
    try {
      const recipe = await Recipes.getRecipeById(req.params.id);
      return res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  })
  // single recipe shopping list
  .get('/recipes/:id/shoppingList', async (req, res, next) => {
    // TODO
    try {
      const [recipe] = await Recipes.getRecipeById(req.params.id);
      const list = await Recipes.getShoppingList(req.params.id);
      return res.status(200).json({ recipe, list });
    } catch (error) {
      next(error);
    }
  })
  // instructions for single recipe
  .get('/recipes/:id/instructions', async (req, res, next) => {
    // TODO
    try {
      const [recipe] = await Recipes.getRecipeById(req.params.id);
      const list = await Recipes.getInstructions(req.params.id);
      return res.status(200).json({ recipe, list });
    } catch (error) {
      next(error);
    }
  })
  // all recipes using the same single ingredient
  // .get('/ingredients/:id/recipes', async (req, res, next) => {
  //   // TODO
  // })
  // Add a recipe
  .post('/recipes', async (req, res, next) => {
    try {
      const recipe = await Recipes.addRecipe(req.body);
      return res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  })
  .post('/recipes/:id/instructions', async (req, res, next) => {
    try {
      const step = {
        step_number: req.body.step_number,
        instruction: req.body.instruction,
        recipe_id: req.params.id,
      };
      const newStep = await Recipes.addRecipeStep(step);
      return res.status(200).json(newStep);
    } catch (error) {
      next(error);
    }
  })
  .delete('/recipes/:id', async (req, res, next) => {
    try {
      const deleted = await Recipes.deleteRecipe(req.params.id);
      return res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  });

module.exports = recipeRouter;
