-- Create table User (Пользователь)
CREATE TABLE User_tb (
	id INT AUTO_INCREMENT PRIMARY KEY,
	_login VARCHAR(150) NOT NULL UNIQUE,
	second_name VARCHAR(255) NOT NULL,
	first_name VARCHAR(255) NOT NULL,
	_patronymic VARCHAR(255) NULL,
	_email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL
);

-- create table Team (Команда)
 CREATE TABLE Team_tb (
   id INT AUTO_INCREMENT PRIMARY KEY,
   _name VARCHAR(255) NOT NULL,
   created_by INT NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES User_tb(id)
 );

-- Create table UserTeam (Связь между пользователями и командами)
 CREATE TABLE UserTeam_tb (
   id INT AUTO_INCREMENT PRIMARY KEY,
   user_id INT NOT NULL,
   team_id INT NOT NULL,
   FOREIGN KEY (user_id) REFERENCES User_tb(id),
   FOREIGN KEY (team_id) REFERENCES Team_tb(id)
 );

-- Create tb File (Файлы)
 CREATE TABLE File_tb (
   id INT AUTO_INCREMENT PRIMARY KEY,
   _name VARCHAR(255) NOT NULL,
   _type VARCHAR(50) NOT NULL,
   size INT NOT NULL,
   uploaded_by INT NOT NULL,
   uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   team_id INT,
   FOREIGN KEY (uploaded_by) REFERENCES User_tb(id), 
   FOREIGN KEY (team_id) REFERENCES Team_tb(id)
 );

-- Create table FilePermission (Права доступа к файлам)
CREATE TABLE FilePermission_tb (
  id INT AUTO_INCREMENT PRIMARY KEY,
  file_id INT NOT NULL,
  user_id INT,
  team_id INT,
  read_access BOOLEAN DEFAULT FALSE,
  write_access BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (file_id) REFERENCES File_tb(id),
  FOREIGN KEY (user_id) REFERENCES User_tb(id),
  FOREIGN KEY (team_id) REFERENCES Team_tb(id)
);

-- Create tb Message (Сообщения)
CREATE TABLE Message_tb (
  id INT AUTO_INCREMENT PRIMARY KEY,
  _text TEXT,
  sender_id INT NOT NULL,
  team_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sender_id) REFERENCES User_tb(id),
  FOREIGN KEY (team_id) REFERENCES Team_tb(id)
);

-- Create table MessageFile (Связь между сообщениями и файлами)
CREATE TABLE MessageFile_tb (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message_id INT NOT NULL,
  file_id INT NOT NULL,
  FOREIGN KEY (message_id) REFERENCES Message_tb(id),
  FOREIGN KEY (file_id) REFERENCES File_tb(id)
);
