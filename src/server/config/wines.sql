TRUNCATE wines CASCADE;

INSERT INTO wines (name, region, year, price, notes, rating)
VALUES
('White Wine', 'New Zealand', '2014', '15.99', 'wine notes', '93'),
('Red Wine', 'France', '2013', '19.99', 'red notes', '87'),
('Sparkling Wine', 'Champagne', '2015', '10.99', 'sparkling notes', '89')
