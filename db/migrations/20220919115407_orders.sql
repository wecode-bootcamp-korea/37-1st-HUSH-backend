-- migrate:up
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    order_status_id INT,
    address VARCHAR(50),
    req_message VARCHAR(100),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (order_status_id) REFERENCES order_status (id)
)
-- migrate:down
DROP TABLE orders;