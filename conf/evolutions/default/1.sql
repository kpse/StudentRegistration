# --- !Ups

CREATE TABLE college (
  id   SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL
);

INSERT INTO college (name, title) values ('jiaotong', '西安交通大学');
INSERT INTO college (name, title) values ('xidian', '西安电子科技大学');
INSERT INTO college (name, title) values ('qinghua', '清华池大学');
# --- !Downs

DROP TABLE IF EXISTS college;