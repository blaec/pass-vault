# changelist №45
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