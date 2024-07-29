const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const secretKey = process.env.HASH_KEY

const authenticateToken = (req, res, next) => {
    //extract the 'Authorization' header from the incoming request
    const token = req.headers.authorization
    //
    if (!token) return res.sendStatus(401);    //if is no token present, send a 401 Unauthorized response
    //
    //
    // verify via key
    jwt.verify(token, secretKey, (err, user) => {

        if (err) return res.sendStatus(403); //if missmatch Forbidden
        //
        //console.log(user.username)
        req.user = user.username; //we add information to the request
        next();        // next middleware
    });
};

module.exports = { authenticateToken };