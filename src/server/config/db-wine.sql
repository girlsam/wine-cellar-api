DROP DATABASE IF EXISTS wine_cellar;
CREATE DATABASE wine_cellar;
\connect wine_cellar;

CREATE TABLE wines (
  id serial primary key,
  name varchar(255) NOT NULL,
  region varchar(255) NOT NULL,
  year int NOT NULL,
  price varchar(255) NOT NULL,
  notes varchar(255) NOT NULL,
  rating varchar(255) NOT NULL
);
