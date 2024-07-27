const Category = require('../models/category.model'); // Assuming category.model.js exports the Category model
const mongoose = require('mongoose');

// Controller functions
class CategoryController {
    async  getAllCategories(req, res) {
        try {
            const categorys = await Category.find({});
            res.json(categorys);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // GET category by ID
    async  getCategoryById(req, res) {
        try {
            const category = await Category.findById(req.params.id);
            if (!category) {
                res.status(404).json({ message: 'Category not found' });
                return;
            }
            res.json(category);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // POST create a new category
    async  createCategory(req, res) {
        try {
            // Destructure the properties from the request body
            const { title } = req.body;
            // Create the document
            const newCategory = new Category({title});
            const savedCategory = await newCategory.save();
            res.status(201).json(savedCategory);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // PUT update category by ID
    async  updateCategory(req, res) {
        try {
            const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedCategory) {
                res.status(404).json({ message: 'Category not found' });
                return;
            }
            res.json(updatedCategory);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // DELETE category by ID
    async  deleteCategory(req, res) {
        try {
            const deletedCategory = await Category.findByIdAndDelete(req.params.id);
            if (!deletedCategory) {
                res.status(404).json({ message: 'Category not found' });
                return;
            }
            res.json({ message: 'Category deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}


module.exports = new CategoryController();