# --- !Ups

CREATE TABLE accommodation (
  id        SERIAL PRIMARY KEY,
  collegeId LONG,
  name      VARCHAR(255) NOT NULL,
  desc      VARCHAR(255) NOT NULL,
  imageUrl  TEXT         NOT NULL
);

INSERT INTO accommodation (name, desc, imageUrl, collegeId) VALUES ('a1', '宿舍1', 'http://www.kremslehnerhotels.at/files/kremslehner-hotels/hotel-regina-kremslehner-vienna/2-rooms/superior/hotel-regina-superior-rooms-vienna.jpg', 1);
INSERT INTO accommodation (name, desc, imageUrl, collegeId) VALUES ('a2', '宿舍2', 'http://www.automation-drive.com/EX/05-14-08/Accommodation.jpg', 1);
INSERT INTO accommodation (name, desc, imageUrl, collegeId) VALUES ('a3', '宿舍3', 'http://www.byron-bay.com.au/accommodation.JPG', 1);
INSERT INTO accommodation (name, desc, imageUrl, collegeId) VALUES ('a4', '宿舍4', 'http://www.settlersvillage.co.za/accommodation2b.jpg', 2);
INSERT INTO accommodation (name, desc, imageUrl, collegeId) VALUES ('a5', '宿舍5', 'http://www.varianostravel.com/images/Phoenician_accommodation.jpg', 3);
# --- !Downs

DROP TABLE IF EXISTS accommodation;