-- Connect to the database
\c cs6440_team36;

-- PATIENT DATA --
INSERT INTO "Patient" ("username", "password", "first_name", "last_name") VALUES
('user01', 'pass01', 'Anitha', 'Krishnamurthi'),
('user02', 'pass02', 'Nara', 'Dadalyan'),
('user03', 'pass03', 'Paolo', 'Pazzaglia');
