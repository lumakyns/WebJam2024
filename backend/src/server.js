/*
* Express server for PetrFindr
*
* @author Lumakyns
*/

const express       = require("express");
const cookie        = require("cookie-parser");
const cookieChecker = require("./middleware/cookieCheck.js");
const userRoute     = require("./routes/auth.js");
const infoRoute     = require("./routes/retrieve.js");

const app = express();
const PORT = 3344;

app.use(express.json());
app.use(cookie());

app.use("/user", userRoute);
app.use("/get", infoRoute);

app.listen(PORT, () => {
    console.log("\nListening on port", PORT, "...");
});



