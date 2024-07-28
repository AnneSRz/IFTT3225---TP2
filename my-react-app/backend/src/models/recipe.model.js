const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Mongoose schema for User
const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    recipeImagesURL: {
        type: [String],
        default: []
    },
    author: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        default: ''
    },
    ingredients: {
        type: [String],
        default: []
    },
    portions: {  //assumes 1 is one portion
        type: Number,
        default: ''
    },
    cookingTime: { //assumes 1 is one minute
        type: Number,
        default: ''
    },
    preparationTime: {  //assumes 1 is one minute
        type: Number,
        default: ''
    },
    category: {
        type: String,
        default: '',
    },
});

// Define and export the Mongoose model for User
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
