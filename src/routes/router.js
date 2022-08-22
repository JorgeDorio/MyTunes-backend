const { Router } = require('express')
const login = require('../controller/login.controller')
const register = require('../controller/register.controller')
const loginValidation = require('../middleware/login.validations')
const { LOGIN, REGISTER } = require('./paths')

const router = Router();

router.post(LOGIN, loginValidation, login);
router.post(REGISTER, register);

module.exports = router;
