# --- !Ups

CREATE TABLE REGISTER_MODULE (
  id        SERIAL PRIMARY KEY,
  collegeId LONG,
  name      VARCHAR(255) NOT NULL,
  url       VARCHAR(255) NOT NULL,
  desc      VARCHAR(255) NOT NULL,
  displayIndex      INT NOT NULL,
  enable    INT          NOT NULL
);

--jiaotong
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (1, 1, 'p0', '个人信息', 'individual', 0);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (1, 1, 'p1', '在线缴费', 'onlinePay', 1);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (1, 1, 'p2', '网上选宿舍', 'accommodation', 2);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (1, 1, 'p3', '军训服装', 'trainingUniform', 3);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (1, 1, 'p4', '生活用品', 'utilities', 4);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (1, 1, 'p5', '免费手机选送', 'freeCellPhone', 5);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (1, 1, 'p6', '分班', 'classChoosing', 6);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (1, 1, 'p7', '饭卡办理', 'prepaidCard', 7);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (1, 1, 'p8', '通讯录', 'contacts', 8);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (1, 1, 'p9', '咨询', 'counseling', 9);

--xidian
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (2, 1, 'p0', '个人信息', 'individual', 0);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (2, 1, 'p1', '在线缴费', 'onlinePay', 1);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (2, 1, 'p2', '网上选宿舍', 'accommodation', 2);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (2, 1, 'p3', '军训服装', 'trainingUniform', 3);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (2, 1, 'p4', '生活用品', 'utilities', 4);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (2, 1, 'p5', '免费手机选送', 'freeCellPhone', 5);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (2, 1, 'p6', '分班', 'classChoosing', 6);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (2, 1, 'p7', '饭卡办理', 'prepaidCard', 7);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (2, 0, 'p8', '通讯录', 'contacts', 8);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (2, 0, 'p9', '咨询', 'counseling', 9);

-- qinghua
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (3, 0, 'p0', '个人信息', 'individual', 0);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (3, 0, 'p1', '在线缴费', 'onlinePay', 1);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (3, 1, 'p2', '网上选宿舍', 'accommodation', 2);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (3, 1, 'p3', '军训服装', 'trainingUniform', 3);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (3, 1, 'p4', '生活用品', 'utilities', 4);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (3, 1, 'p5', '免费手机选送', 'freeCellPhone', 5);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (3, 1, 'p6', '分班', 'classChoosing', 6);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (3, 1, 'p7', '饭卡办理', 'prepaidCard', 7);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (3, 0, 'p8', '通讯录', 'contacts', 8);
INSERT INTO REGISTER_MODULE (collegeId, enable, name, desc, url, displayIndex) VALUES (3, 0, 'p9', '咨询', 'counseling', 9);

# --- !Downs

DROP TABLE IF EXISTS REGISTER_MODULE;