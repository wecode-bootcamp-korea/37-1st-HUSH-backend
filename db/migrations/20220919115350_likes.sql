-- migrate:up
CREATE TABLE likes
(
id INT NOT NULL AUTO_INCREMENT,
user_id INT NOT NULL,
product_id INT NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (product_id) REFERENCES products (id),
UNIQUE KEY (user_id, product_id)
);

-- migrate:down
DROP TABLE likes;


