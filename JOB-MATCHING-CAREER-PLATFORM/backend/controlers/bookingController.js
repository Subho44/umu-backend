
require('dotenv').config();
const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});


exports.createorder = async(req,res)=>{
    try {
        const {amount} = req.body;
        const options = {
            amount:amount*100,
            currency:"INR",
            receipt:`rcpt_${Date.now()}`
        };
        const order = await razorpay.orders.create(options);
        res.json(order);
    }catch(err){
        res.status(400).send('not create order');
    }
};

exports.verifypayment = (req,res)=>{
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;

    const sign = crypto
    .createHmac('sha256',process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + '|'+razorpay_payment_id)
    .digest('hex');

    if(sign === razorpay_signature) {
        res.json({success:true});
    }else {
        res.status(400).json({success:false});
    }
}