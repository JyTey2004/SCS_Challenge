const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateAccountCreate, validateAccount, validateAccountLogin } = require('../middleware/validation/account');
const { isAuth } = require('../middleware/validation/auth');

// Create a new account
router.post('/create', validateAccountCreate, validateAccount, userController.createAccount);

// Login
router.post('/login', validateAccountLogin, userController.login);

// Get all account
router.get('/', userController.getAllAccounts);

// Get a account by email
router.get('/email/:email', userController.getAccountByEmail);

// Get a account by ID
router.get('/profile', isAuth, userController.getAccountById);

// Update a account by ID
router.put('/:id', userController.updateAccountById);

// Delete a account by ID
router.delete('/:id', userController.deleteAccount);

module.exports = router;