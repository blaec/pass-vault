# changelist #45
DROP TABLE IF EXISTS secure_notes;

CREATE TABLE secure_notes
(
    id              INT auto_increment,
    folder_id       INT 			            NULL,
    title           VARCHAR(100) 			    NOT NULL,
    note            VARCHAR(300) 			    NULL,
    creation_date   DATE     					NOT NULL,
    FOREIGN KEY (folder_id) REFERENCES folders (id),
    PRIMARY KEY     (id)
);

ALTER TABLE secure_notes AUTO_INCREMENT = 100000;

# changelist #44
DROP TABLE IF EXISTS credit_cards;

CREATE TABLE credit_cards
(
    id                  INT auto_increment,
    folder_id           INT 			            NULL,
    title               VARCHAR(100) 			    NOT NULL,
    note                VARCHAR(300) 			    NULL,
    creation_date       DATE     					NOT NULL,
    cardholder_name     VARCHAR(100) 			    NOT NULL,
    card_number         VARCHAR(19)			        NOT NULL,
    expiration_date     DATE     					NOT NULL,
    cvv                 SMALLINT    			    NOT NULL,
    card_pin            INT         			    NOT NULL,
    FOREIGN KEY (folder_id) REFERENCES folders (id),
    PRIMARY KEY     (id)
);

ALTER TABLE credit_cards AUTO_INCREMENT = 100000;

# changelist #51
ALTER TABLE passwords DROP COLUMN deleted;
ALTER TABLE passwords ADD COLUMN deleted BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE secure_notes DROP COLUMN deleted;
ALTER TABLE secure_notes ADD COLUMN deleted BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE credit_cards DROP COLUMN deleted;
ALTER TABLE credit_cards ADD COLUMN deleted BOOLEAN NOT NULL DEFAULT false;

# changelist #52
DROP TABLE IF EXISTS password_history;
CREATE TABLE password_history
(
    id                  INT auto_increment,
    password_id         INT 			            NULL,
    password            VARCHAR(100) 			    NOT NULL,
    creation_date       DATE     					NOT NULL,
    expiration_date     DATE     					NOT NULL,
    FOREIGN KEY (password_id) REFERENCES passwords (id),
    PRIMARY KEY     (id)
);