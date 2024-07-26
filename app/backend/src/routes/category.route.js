const express = require('express');
const CategoryController = require('../controllers/category.controller');

const router = express.Router();


// Route: GET all users
router.get('/', CategoryController.getAllCategories);

// Route: GET user by ID
router.get('/:id', CategoryController.getCategoryById);

// Route: POST create a new user
router.post('/', CategoryController.createCategory);

// Route: PUT update user by ID
router.put('/:id', CategoryController.updateCategory);

// Route: DELETE user by ID
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;
