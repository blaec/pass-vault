DROP TABLE IF EXISTS passwords;
DROP TABLE IF EXISTS folders;

CREATE TABLE folders
(
    id              INT auto_increment,
    name            VARCHAR(100) 			    NULL,
    PRIMARY KEY     (id)
);
ALTER TABLE folders AUTO_INCREMENT = 100000;


CREATE TABLE passwords
(
    id              INT auto_increment,
    folder_id       INT 			            NULL,
    title           VARCHAR(100) 			    NOT NULL,
    user            VARCHAR(100) 			    NOT NULL,
    password        VARCHAR(100) 			    NOT NULL,
    website         VARCHAR(100) 			    NOT NULL,
    note            VARCHAR(300) 			    NULL,
    creation_date   DATE     					NOT NULL,
    FOREIGN KEY (folder_id) REFERENCES folders (id),
    PRIMARY KEY     (id)
);

ALTER TABLE passwords AUTO_INCREMENT = 100000;
