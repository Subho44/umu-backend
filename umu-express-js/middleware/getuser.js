module.exports = (req,res,next)=> {
    if(req.user)  {
        res.json({
         message:'User Profile',
         userData: req.user
        });
        
    }   else {
      res.status(400).json({error:'user not found'});
    }  
};