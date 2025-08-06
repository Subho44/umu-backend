const jwt = require('jsonwebtoken');
module.exports = (res,reg,next)=>{
    const authheader = req.headers.authorization;
    if(!authheader) return res.status(401).json({error:'no token provied'});

    const token = authheader.split('')[1];

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch{
        res.status(401).json({error:'invalid token'});
    }
}