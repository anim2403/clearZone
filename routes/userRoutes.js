const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', [
    body('firstName').notEmpty().withMessage('First name is required'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('userType').isIn(['Admin', 'Customer', 'Partner']).withMessage('Invalid user type')
],
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser
)

router.get('/logout', authMiddleware.authUser, userController.logoutUser)


module.exports = router;
