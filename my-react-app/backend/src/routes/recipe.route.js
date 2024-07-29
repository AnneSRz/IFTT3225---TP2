const express = require('express');
const RecipeController = require('../controllers/recipe.controller');
const { authenticateToken } = require('../middleware/authenticator.middleware');
const router = express.Router();

// Route: GET all recipes
router.get('/', RecipeController.getAllRecipes);

// Route: GET recipe by ID
router.get('/:id',authenticateToken, RecipeController.getRecipeById);

// Route: GET (SEARCH) recipe by ID
router.get('/search/:id', RecipeController.getRecipeByFilter);

// Route: POST create a new recipe
router.post('/',authenticateToken, RecipeController.createRecipe);

// Route: PUT update recipe by ID
router.put('/:id',authenticateToken, RecipeController.updateRecipe);

// Route: DELETE recipe by ID
router.delete('/:id',authenticateToken, RecipeController.deleteRecipe);

module.exports =  router;
