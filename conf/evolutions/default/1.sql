# --- !Ups

CREATE TABLE accommodation (
  id   SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  desc VARCHAR(255) NOT NULL,
  imageUrl TEXT NOT NULL
);

INSERT INTO accommodation (name, desc, imageUrl) values ('a1', '宿舍1', 'http://www.kremslehnerhotels.at/files/kremslehner-hotels/hotel-regina-kremslehner-vienna/2-rooms/superior/hotel-regina-superior-rooms-vienna.jpg');
INSERT INTO accommodation (name, desc, imageUrl) values ('a2', '宿舍2', 'http://www.automation-drive.com/EX/05-14-08/Accommodation.jpg');
INSERT INTO accommodation (name, desc, imageUrl) values ('a3', '宿舍3', 'http://www.byron-bay.com.au/accommodation.JPG');
# --- !Downs

DROP TABLE IF EXISTS accommodation;