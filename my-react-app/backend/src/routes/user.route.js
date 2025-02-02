const express = require('express');
const UserController = require('../controllers/user.controller');


const router = express.Router();


// Route: GET all users
router.get('/', UserController.getAllUsers);

// Route: GET user by ID
router.get('/:id', UserController.getUserById);

// Route: POST create a new user
router.post('/', UserController.createUser);

// Route: PUT update user by ID
router.put('/:id', UserController.updateUser);

// Route: DELETE user by ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;
