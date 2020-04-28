DROP DATABASE IF EXISTS TUTORING;
CREATE DATABASE TUTORING;
USE TUTORING;

DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS
(
	name VARCHAR(100),
	lastName VARCHAR(100),
	password VARCHAR(50), -- MD5 hashed password
	userName VARCHAR(50) UNIQUE,
	email VARCHAR(100),
	phoneNumber INT,
	isTutor BINARY, -- 1 FOR TUTOR, 0 FOR STUDENT
	PRIMARY KEY (userName)
);

DROP TABLE IF EXISTS KEYWORD;
CREATE TABLE KEYWORD
(
	category VARCHAR(30),
	subCategory VARCHAR(30)
);


/*
==================================== SQL TRIGGERS  =====================================
*/

-- This trigger will replace the plaintext password into
-- the MD5 checksum hash for it and replace it.
DROP TRIGGER IF EXISTS NewUser;
DELIMITER //
CREATE TRIGGER NewUser BEFORE INSERT ON USERS
FOR EACH ROW
BEGIN
	SET NEW.password = MD5(NEW.password);
END; //
DELIMITER ;

-- This trigger will replace the curent password
-- to the MD5 checksum hash for the new one 
-- and replace it.
DROP TRIGGER IF EXISTS changePassword;
DELIMITER //
CREATE TRIGGER changePassword BEFORE UPDATE ON USERS
FOR EACH ROW
BEGIN
	SET NEW.password = MD5(NEW.password);
END; //
DELIMITER ;

/*
==================================== STORED PROCEDURES  =====================================
*/
-- DROP PROCEDURE IF EXISTS GetAllTutors;
-- DELIMITER //
-- CREATE PROCEDURE GetAllTutors ()
-- BEGIN
--     SELECT * FROM USERS WHERE isTutor = 1;
-- END//
-- DELIMETER ;
