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
	phoneNumber BIGINT,
	isTutor BINARY, -- 1 FOR TUTOR, 0 FOR STUDENT
	PRIMARY KEY (userName)
);

DROP TABLE IF EXISTS KEYWORD;
CREATE TABLE KEYWORD
(
	category VARCHAR(30),
	subCategory VARCHAR(30)
);

DROP TABLE IF EXISTS TUTORS;
CREATE TABLE TUTORS
(
	userName VARCHAR(50),
    subCategory VARCHAR(30),
    
    FOREIGN KEY (userName) REFERENCES USERS(userName) ON DELETE CASCADE 
    -- FOREIGN KEY (subCategory) REFERENCES KEYWORD(subCategory)
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

-- This trigger has a function to insert all
-- users flagged as tutors into a new table
-- which will further contain a keyword associated
-- with expertise of the tutor
DROP TRIGGER IF EXISTS insertTutor;
DELIMITER //
CREATE TRIGGER insertTutor AFTER INSERT ON USERS
FOR EACH ROW
BEGIN
	IF NEW.isTUTOR = 1 THEN
    INSERT INTO TUTORS(userName, subCategory)
    VALUES(NEW.userName, NULL);
    END IF;
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


INSERT INTO USERS VALUES
('John', 'Lennon', 'skkgj583', 'shesSoHeavy', 'john1980@gmail.com', '1596875634', 1),
('Paul', 'McCartney', 'khhiy^76', 'yesterday1965', 'macca19st@gmail.com', '465894352', 1),
('Ringo', 'Starr', 'fjeb7$&', 'submarineYell0w', 'yell0wsub@gmail.com', '4953576985', 1),
('George', 'Harrison', 'kjdny*Q', 'something165', 'krishnahare@gmail.com', '6957893249', 0),
('George', 'Martin', 'wnwdu&3*@', '5thbeatle', 'xX_suits_Xx@gmail.com', '6957823694', 0)
;

select * From users; 

select u.name, q.keyword, u.username from users u inner join questions q on u.username = q.username; 
select * from questions; 
drop table questions; 
CREATE TABLE Questions
(
	id int primary key auto_increment, 
    username varchar(255) not null,
    status varchar(50) DEFAULT 'Sandnes',  
	title VARCHAR(100)  not null,
	description VARCHAR(255) not null,
	keyword VARCHAR(255) not null
	
);

create table subjects (
	id int primary key auto_increment, 
    userName varchar(255) unique not null, 
    subject varchar(255) not null, 
	FOREIGN KEY (userName) REFERENCES USERS(userName) 
); 

-- 1 - hansolKim - Math
-- 2 - hansolKim - Tech

-- get all the userNames that are tutors that teach math and science 
-- select * from users where isTutor = 1 and userName in 
-- (select userName from subjects where subject ('Math', 'Science'); 
commit; 