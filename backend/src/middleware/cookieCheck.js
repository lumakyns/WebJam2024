const JWT =        require("jsonwebtoken");
const ENV_SECRET = require("../secrets/misc_secret.js").ENV_SECRET;

exports.cookieJWTAuth = (req, res, next) => {
    const token = req.cookies.token;
    try {
        const user = JWT.verify(token, ENV_SECRET);
        req.user = user;
        next();
    }

    catch(E) {
        res.clearCookie("token");
        res.setStatus(418).send();
    }
}