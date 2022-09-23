const jwt = require("jsonwebtoken");
const key = process.env.KEY;


const validToken = async(req, res, next) =>{
    const userToken = req.header("authorization");

    if( !userToken ) return res.status(400).json({message : "KEY_ERROR" });

    const decoded = jwt.verify(userToken, key);
    const {id} = decoded;

    req.userId = id;
    
    return next();
}

module.exports = {
    validToken
}