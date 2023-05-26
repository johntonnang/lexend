-- create a table
CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
);

CREATE TABLE furniture (
  furniture_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(category_id),
  description TEXT,
  price NUMERIC(10, 2)
);

-- insert values
INSERT INTO categories (name)
VALUES ('Chairs'),
       ('Lamps'),
       ('Sofas'),
       ('Tables');

INSERT INTO furniture (name, category_id, description, price)
VALUES ('Armchair', 1, 'A cozy armchair for relaxation', 199.99),
       ('Floor Lamp', 2, 'A modern floor lamp for ambient lighting', 79.99),
       ('Sectional Sofa', 3, 'A spacious sectional sofa with chaise', 899.99),
       ('Coffee Table', 4, 'A sleek coffee table for your living room', 149.99);

-- update values
UPDATE categories
SET name = 'Armchairs', description = 'Various types of armchairs'
WHERE category_id = 1;

UPDATE categories
SET description = 'Different styles of lighting fixtures'
WHERE category_id = 2;

UPDATE furniture
SET name = 'Modern Armchair', price = 249.99
WHERE furniture_id = 1;

UPDATE furniture
SET description = 'An elegant floor lamp with adjustable brightness'
WHERE furniture_id = 2;

-- alter column
ALTER TABLE categories
DROP COLUMN description;

ALTER TABLE categories
ADD COLUMN description TEXT;

-- remove a row
DELETE FROM categories
WHERE category_id = 3;

-- remove a table
DROP TABLE categories;

ALTER TABLE furniture
ADD COLUMN image TEXT,
ADD COLUMN image_file TEXT;





-- Create the categories table
CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

-- Insert category data
INSERT INTO categories (name, description)
VALUES ('Chairs', 'This category contains various chairs.'),
       ('Lamps', 'This category includes different types of lamps.'),
       ('Sofas', 'This category offers a selection of sofas.'),
       ('Tables', 'This category consists of different types of tables.');

-- Create a table for each category

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories(category_id),
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255),
  price DECIMAL,
  extra_image_url VARCHAR(255)
);

-- Chairs table
CREATE TABLE chairs (
  product_id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories(category_id),
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255),
  price DECIMAL,
  extra_image_url VARCHAR(255)
);

-- Lamps table
CREATE TABLE lamps (
  product_id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories(category_id),
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255),
  price DECIMAL,
  extra_image_url VARCHAR(255)
);

-- Sofas table
CREATE TABLE sofas (
  product_id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories(category_id),
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255),
  price DECIMAL,
  extra_image_url VARCHAR(255)
);

-- Tables table
CREATE TABLE tables (
  product_id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories(category_id),
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255),
  price DECIMAL,
  extra_image_url VARCHAR(255)
);

-- Insert product data for each category

INSERT INTO products (category_id, name, image_url, price, extra_image_url)
VALUES (1, 'Flowing lounge chair', 'rectangle-37@2px.png', 15.000, 'colors01.svg'),
       (1, 'Moderna armchair', 'rectangle-371@2px.png', 12.000, 'colors11.svg'),
       (1, 'Regal armchair', 'rectangle-372@2px.png', 15.000, 'colors21.svg'),
       (1, 'Wooden dining chair', 'rectangle-373@2px.png', 3.000, 'colors31.svg'),
       (1, 'Leather armchair', 'rectangle-374@2px.png', 20.000, 'colors41.svg'),
       (1, 'Mahogany stool', 'rectangle-375@2px.png', 2.000, 'colors51.svg'),
       (2, 'Lamp 1', 'lamp1.jpg', 29.99, 'lamp1_extra.jpg'),
       (2, 'Lamp 2', 'lamp2.jpg', 34.99, 'lamp2_extra.jpg'),
       (2, 'Lamp 3', 'lamp3.jpg', 39.99, 'lamp3_extra.jpg'),
       (2, 'Lamp 4', 'lamp4.jpg', 44.99, 'lamp4_extra.jpg'),
       (2, 'Lamp 5', 'lamp5.jpg', 49.99, 'lamp5_extra.jpg'),
       (2, 'Lamp 6', 'lamp6.jpg', 54.99, 'lamp6_extra.jpg');

-- Chairs products
INSERT INTO chairs (category_id, name, image_url, price, extra_image_url)
VALUES (1, 'Flowing lounge chair', 'rectangle-37@2px.png', 15.000, 'colors01.svg'),
       (1, 'Moderna armchair', 'rectangle-371@2px.png', 12.000, 'colors11.svg'),
       (1, 'Regal armchair', 'rectangle-372@2px.png', 15.000, 'colors21.svg'),
       (1, 'Wooden dining chair', 'rectangle-373@2px.png', 3.000, 'colors31.svg'),
       (1, 'Leather armchair', 'rectangle-374@2px.png', 20.000, 'colors41.svg'),
       (1, 'Mahogany stool', 'rectangle-375@2px.png', 2.000, 'colors51.svg');

-- Lamps products
INSERT INTO lamps (category_id, name, image_url, price, extra_image_url)
VALUES (2, 'Lamp 1', 'lamp1.jpg', 29.99, 'lamp1_extra.jpg'),
       (2, 'Lamp 2', 'lamp2.jpg', 34.99, 'lamp2_extra.jpg'),
       (2, 'Lamp 3', 'lamp3.jpg', 39.99, 'lamp3_extra.jpg'),
       (2, 'Lamp 4', 'lamp4.jpg', 44.99, 'lamp4_extra.jpg'),
       (2, 'Lamp 5', 'lamp5.jpg', 49.99, 'lamp5_extra.jpg'),
       (2, 'Lamp 6', 'lamp6.jpg', 54.99, 'lamp6_extra.jpg');

-- Sofas products
INSERT INTO sofas (category_id, name, image_url, price, extra_image_url)

  ALTER TABLE categories
  RENAME COLUMN image_file TO image_url;
