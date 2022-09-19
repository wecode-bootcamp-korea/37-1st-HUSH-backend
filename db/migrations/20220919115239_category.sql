-- migrate:up
CREATE TABLE category (
    id INT NOT NULL auto_increment,
    name VARCHAR(50),
    PRIMARY KEY (id)
)
-- migrate:down
DROP TABLE category;