/*
* Express server for MySql I/O (Running MySql on AWS RDS)
*
* @author Lumakyns
*/

const express = require("express");
const mysql   = require("mysql2");
const db      = require("./secrets/db_secret");
const dbOp    = require("./functions/dbfunctions");

// MySql Connection Pool
const pool = mysql.createPool({
    host: db.ENDPOINT,
    user: db.USER,
    password: db.PW,
    database: db.DB,
}).promise();

const app = express();
const PORT = 6644;

app.use(express.json());

app.listen(PORT, () => {
    console.log("\n(MySql I/O) Listening on port", PORT, "...");
});


app.post("/signup", dbOp.signin);

// login
app.get("/login", dbOp.login);

// getUser
app.get("/getUser", dbOp.getUser);

// getDrops
app.get("/getDrops", dbOp.getDrops);

// getPetrs
app.get("/getPetrs", dbOp.getPetrs);
