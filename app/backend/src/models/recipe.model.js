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
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User',
        validate: {
            validator: async function(authorId) {
                // Check if the authorId exists in the User collection
                const user = await User.findById(authorId).exec();
                return !!user; // Returns true if user exists, false otherwise
            },
            message: 'Author does not exist in the User collection.'
        }
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
    tags: {
        type: [String],
        default: [],
        validate: {
            validator: async function(tags) {
                // Check if all tags are valid
                const validTags = await Tag.find({ name: { $in: tags } }).exec();
                return validTags.length === tags.length;
            },
            message: 'One or more tags are invalid.'
        }
    },
});

// Define and export the Mongoose model for User
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
