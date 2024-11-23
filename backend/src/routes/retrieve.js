/*
* Getting Info Functionnality
*/

const express    = require("express");
const fetchy     = require("../functions/misc.js");
const router = express.Router();

router.get("/getDrops", (req, res) => {
    fetchy("localhost:6644/getDrops", "GET", {});
});

router.get("/getPetrs", (req, res) => {
    fetchy("localhost:6644/getPetrs", "GET", {});
});

router.get("/getUser", (req, res) => {
    fetchy("localhost:6644/getUser", "GET", {user: req.body.user});
});

module.exports = router;