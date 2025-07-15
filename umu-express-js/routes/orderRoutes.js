const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({message:'all orders'});
});
router.post('/',(req,res)=>{
    res.json({message:'place order', data:req.body});
});

module.exports = router;