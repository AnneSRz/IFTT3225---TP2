const express = require('express');
const AuthenticationController = require('../controllers/authentication.controller');

const router = express.Router();

// Route: POST login
router.post('/login', AuthenticationController.login);

// Route: POST register
router.post('/register', AuthenticationController.signup);

module.exports = router;
