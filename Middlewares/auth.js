const res = require('express/lib/response');
const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const {authorization} = req.headers;

    //if token is not present
    if(!authorization){
        console.log('no token');
        return res.status(401).send('Access Denied');
    } 

    try {
        const verified = jwt.verify(token,process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch(err){
        res.status(400).send('Invalid Token');
    }
}