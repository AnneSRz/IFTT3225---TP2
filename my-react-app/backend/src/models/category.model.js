const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Tags schema
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

// Define and export the Tags model
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
