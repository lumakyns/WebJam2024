
-- signup
INSERT INTO user
VALUES (${name}, ${email}, ${password}, ${null}, ${phone}, ${igAcc}, ${discAcc});

-- login
SELECT user.pw
FROM user
WHERE user.email = ${email};

-- getUser
SELECT *
FROM user
WHERE user.email = ${email};

-- getDrops
SELECT * 
FROM drops 
ORDER BY drops.date ASC;

-- getPetrs
SELECT * 
from petrs
ORDER BY petrs.name;