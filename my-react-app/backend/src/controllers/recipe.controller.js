const Recipe = require('../models/recipe.model'); // Assuming recipe.model.js exports the Recipe model
const mongoose = require('mongoose');

// Controller functions
class RecipeController {
    async  getAllRecipes(req, res) {
        try {
            const recipes = await Recipe.find({});
            res.json(recipes);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // GET recipe by ID
    async  getRecipeById(req, res) {
        try {
            const recipe = await Recipe.findById(req.params.id);
            if (!recipe) {
                res.status(404).json({ message: 'Recipe not found' });
                return;
            }
            res.json(recipe);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // POST create a new recipe
    async  createRecipe(req, res) {
        try {
            // Destructure the properties from the request body
            console.log(req.body)
            const { title, recipeImagesURL, author, createdAt,description,ingredients,portions,cookingTime,preparationTime,category } = req.body;
            // Create the document
            const newRecipe = new Recipe({
                title, 
                recipeImagesURL, 
                author: req.user, 
                createdAt,
                description,
                ingredients,
                portions,
                cookingTime,
                preparationTime,
                category
            });
            const savedRecipe = await newRecipe.save();
            res.status(201).json(savedRecipe);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // PUT update recipe by ID
    async  updateRecipe(req, res) {
        try {
            const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedRecipe) {
                res.status(404).json({ message: 'Recipe not found' });
                return;
            }
            res.json(updatedRecipe);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // DELETE recipe by ID
    async  deleteRecipe(req, res) {
        try {
            const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
            if (!deletedRecipe) {
                res.status(404).json({ message: 'Recipe not found' });
                return;
            }
            res.json({ message: 'Recipe deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}


module.exports = new RecipeController();


