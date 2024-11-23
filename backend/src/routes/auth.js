/*
* Sign-in / Sign-up functionallity
*/

const express    = require("express");
const bcrypt     = require("bcrypt");
const JWT        = require("jsonwebtoken");
const ENV_SECRET = require("../secrets/misc_secret.js").ENV_SECRET;
const fetchy     = require("../functions/misc.js");
const router = express.Router();

router.post("/signup", async (req, res) => {
    // Payload body
    const userIn = {
        user: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        igAcc: req.body.igAcc,
        discAcc: req.body.discAcc,
    }

    // Invalid request
    if (userIn.user == undefined || userIn.password == undefined) {
        console.log("Invalid request received.");
        res.sendStatus(400).send();
        return;
    }

    try {
        userIn.password = await bcrypt.hash(userIn.password, 10);

        const result = fetchy("localhost:6644/signup", "POST", userIn);

        res.sendStatus(201).send();
    }

    catch(E) {
        console.log(E);
        res.sendStatus(500).send();
    }
});

router.post("/login", async (req, res) => {
    // Payload body
    const userIn = {
        email: req.body.email,
        password: req.body.password,
    }

    // Invalid request
    if (userIn.user == undefined || userIn.password == undefined) {
        console.log("Invalid request received.");
        res.sendStatus(400).send();
        return;
    }

    const result = fetchy("localhost:6644/login", "GET", userIn);

    // User not found
    if (userIn.password != result) {
        console.log("User not found.");
        res.sendStatus(404).send();
        return;
    }


    try {
        if (await bcrypt.compare(userIn.password, result)) {
            const token = JWT.sign(user, ENV_SECRET, { expiresIn: "1h" });

            res.cookie("token", token, {
                httpOnly: true,
            });

            res.sendStatus(200).send();
        }

        else
            res.sendStatus(401).send();
    }

    catch(E) {
        console.log(E);
        res.sendStatus(500).send();
    }
});

module.exports = router;