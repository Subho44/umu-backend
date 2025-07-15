const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({message:'all producrs'});
});
router.post('/',(req,res)=>{
    res.json({message:'create producrs', data:req.body});
});

module.exports = router;