-- First, we drop the database if it exists
DROP DATABASE IF EXISTS cs6440_team36;

-- Now we create the database with the specified collation
CREATE DATABASE cs6440_team36
    WITH ENCODING 'UTF8'
    LC_COLLATE='en_US.utf8'
    LC_CTYPE='en_US.utf8'
    TEMPLATE=template0;

-- Connect to the database
\c cs6440_team36;

-- Tables
-- Table `User`
CREATE TABLE "Patient" (
  "username" VARCHAR(16) NOT NULL,
  "password" VARCHAR(16) NOT NULL,
  "first_name" VARCHAR(64) NOT NULL,
  "last_name" VARCHAR(64) NOT NULL,
  PRIMARY KEY ("username")
);