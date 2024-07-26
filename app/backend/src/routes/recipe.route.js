const express = require('express');
const RecipeController = require('../controllers/recipe.controller');

const router = express.Router();

// Route: GET all recipes
router.get('/', RecipeController.getAllRecipes);

// Route: GET recipe by ID
router.get('/:id', RecipeController.getRecipeById);

// Route: POST create a new recipe
router.post('/', RecipeController.createRecipe);

// Route: PUT update recipe by ID
router.put('/:id', RecipeController.updateRecipe);

// Route: DELETE recipe by ID
router.delete('/:id', RecipeController.deleteRecipe);

module.exports =  router;
