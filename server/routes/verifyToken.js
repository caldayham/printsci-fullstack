const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) { 

        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) return res.status(401).json("you're not authenticated");
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("you're not authenticated, bad header token");
    }
};

const verifyTokenAndAuth = (req, res, next) => {
    verifyToken(req, res, () => {

        req.params.id ? (req.params.id).trim(" ") : console.log("no params.id"); 
        
        if (req.user.id === (req.params.id) || req.user.isAdmin) {
            next();
        }else{
            res.status(403).json("not allowed, sorry");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        
        if (req.user.isAdmin) {
            next();
        }else{
            res.status(403).json("not allowed, sorry (THIS IS ADMIN VERIFY)");
        }
    });
};

module.exports = { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin}; 