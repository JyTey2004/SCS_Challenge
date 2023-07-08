const {check, validationResult} = require('express-validator');

exports.validateAccountCreate = [
    check('username')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Username is required')
    .isString()
    .withMessage('Must be a valid name')
    .isLength({min: 3, max: 20})
    .withMessage('Username must be within 3-20 characters'),
    check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is required')
    .isLength({min: 8, max: 20})
    .withMessage('Password must be within 3-20 characters'),
    check('email').normalizeEmail().isEmail().withMessage('Invalid email address'),
]

exports.validateAccount = (req, res, next) => {
    const result = validationResult(req).array();
    if (!result.length) return next()

    const error = result[0].msg;
    res.json({
        isSuccess: false,
        message: error
    });
}

exports.validateAccountLogin = [
    check('email')
    .trim()
    .isEmail()
    .withMessage('Email / Password is incorrect'),
    check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email / Password is incorrect')
]