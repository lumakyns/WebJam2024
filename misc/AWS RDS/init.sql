DROP DATABASE IF EXISTS `PetrFindr_MAINDB`;
CREATE DATABASE `PetrFindr_MAINDB`;
USE `PetrFindr_MAINDB`;

-- ENTITIES
CREATE TABLE instagram_accs (
	iid  INTEGER      NOT NULL AUTO_INCREMENT,
    name VARCHAR(40)  NOT NULL,
    link VARCHAR(100) NOT NULL,
    
    PRIMARY KEY (iid),
    UNIQUE KEY (link)
);

CREATE TABLE drops (
	did     INTEGER     NOT NULL AUTO_INCREMENT,
    iid     INTEGER     NOT NULL,
    post_id VARCHAR(20) NOT NULL,
    date    DATE,
    time    TIME,
    
    PRIMARY KEY (did),
    FOREIGN KEY (iid) REFERENCES instagram_accs(iid)    
);

CREATE TABLE user (
	uid     INTEGER      NOT NULL AUTO_INCREMENT,
    name    VARCHAR(20)  NOT NULL,
    email   VARCHAR(100) NOT NULL,
    pw      VARCHAR(40)  NOT NULL,
    pfp     VARCHAR(40), -- TODO
    phone   VARCHAR(16),
    igAcc   VARCHAR(20),
    discAcc VARCHAR(20),
    
    PRIMARY KEY (uid),
    UNIQUE KEY (email)
);

CREATE TABLE petr (
	pid  INTEGER     NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    img  VARCHAR(40) NOT NULL,
    did  INTEGER,
    
    PRIMARY KEY (pid),
    FOREIGN KEY (did) REFERENCES drops(did)
);

-- RELATIONS
CREATE TABLE userHas (
	uid INTEGER NOT NULL,
    pid INTEGER NOT NULL,
    
    PRIMARY KEY (uid, pid),
    FOREIGN KEY (uid) REFERENCES user(uid),
    FOREIGN KEY (pid) REFERENCES petr(pid)
);

CREATE TABLE userWants (
	uid INTEGER NOT NULL,
    pid INTEGER NOT NULL,
    
    PRIMARY KEY (uid, pid),
    FOREIGN KEY (uid) REFERENCES user(uid),
    FOREIGN KEY (pid) REFERENCES petr(pid)
);