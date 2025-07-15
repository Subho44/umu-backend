module.exports = (req,res,next)=> {
    req.user = {
        id:101,
        name:'subhojit santra',
        role:'Admin'
    };
    console.log('user data added');
    next();
};