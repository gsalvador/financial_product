CREATE DATABASE MicroserviceProduct;

USE MicroserviceProduct
GO;

CREATE TABLE Clients (
	id INT NOT NULL,
	name VARCHAR(50) NOT NULL,
	PRIMARY KEY (id));

CREATE TABLE Accouts (
	id INT NOT NULL IDENTITY(1,1),
	userId INT NOT NULL,
	savedMontlyAmount DECIMAL NOT NULL,
	numbeOfPeriods INT NOT NULL,
	interestRate DECIMAL NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(userId) REFERENCES Clients(id));