function signup(req, res) {
    // user, email, password, phone, igAcc, discAcc
    user = req.body.user;
    email = req.body.email;
    password = req.body.password;
    phone = req.body.phone;
    igAcc = req.body.igAcc;
    discAcc = req.body.discAcc;
    
    const [rows] = pool.query(`INSERT INTO user VALUES ( ${user}, ${email}, ${password}, ${null}, ${phone}, ${igAcc}, ${discAcc});`);
    res.send(rows);
}

function login(req, res) {
    email = req.body.email;

    const [rows] = pool.query(`SELECT user.pw FROM user WHERE user.email = ${email};`);
    res.send(rows);
}

function getUser(req, res) {
    user = req.body.user;

    const [rows] = pool.query(`SELECT * FROM user WHERE user.name = ${user};`);
    res.send(rows);
}

function getDrops(req, res) {
    const [rows] = pool.query(`SELECT * FROM drops ORDER BY drops.date ASC;`);
    res.send(rows);
}

function getPetrs(req, res) {
    const [rows] = pool.query(`SELECT * from petrs ORDER BY petrs.name;`);
    res.send(rows);
}

module.export = {
    signup, login, getUser, getDrops, getPetrs
};