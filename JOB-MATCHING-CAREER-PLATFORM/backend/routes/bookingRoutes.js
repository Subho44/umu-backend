const express = require('express');
const router = express.Router();
const payctrl = require('../controlers/bookingController');

router.post('/create-order',payctrl.createorder);

router.post('/verify-payment',payctrl.verifypayment);

module.exports = router;