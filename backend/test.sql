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
ADD COLUMN image bytea;

-- remove a row
DELETE FROM categories
WHERE category_id = 3;

-- remove a table
DROP TABLES categories;
