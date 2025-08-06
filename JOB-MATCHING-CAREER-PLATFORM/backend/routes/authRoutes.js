const express = require('express');
const router = express.Router();

const authctrl = require('../controlers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register',authctrl.register);
router.post('/login',authctrl.login);
router.get('/dashboard',authctrl.dashboard);

module.exports = router;