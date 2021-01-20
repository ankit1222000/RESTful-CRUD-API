CREATE TABLE IF NOT EXISTS `customer`(
    id int (11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email varchar (255) NOT NULL UNIQUE,
    name varchar(255) NOT NULL UNIQUE,
    active BOOLEAN DEFAULT false
    )ENGINE=InnoDB DEFAULT CHARSET=utf8