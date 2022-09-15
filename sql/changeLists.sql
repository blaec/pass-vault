# changelist №45
DROP TABLE IF EXISTS secret_notes;

CREATE TABLE secret_notes
(
    id              INT auto_increment,
    folder_id       INT 			            NULL,
    title           VARCHAR(100) 			    NOT NULL,
    note            VARCHAR(300) 			    NULL,
    creation_date   DATE     					NOT NULL,
    FOREIGN KEY (folder_id) REFERENCES folders (id),
    PRIMARY KEY     (id)
);

ALTER TABLE passwords AUTO_INCREMENT = 100000;