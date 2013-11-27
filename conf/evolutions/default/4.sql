# --- !Ups

CREATE TABLE dorm (
  id        SERIAL PRIMARY KEY,
  studentId LONG NOT NULL,
  accommodationId LONG NOT NULL
);

# --- !Downs

DROP TABLE IF EXISTS dorm;