### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	meat BOOLEAN NOT NULL DEFAULT true,
	onion BOOLEAN NOT NULL DEFAULT true,
	cheese BOOLEAN NOT NULL DEFAULT true,
	devoured BOOLEAN NOT NULL DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
