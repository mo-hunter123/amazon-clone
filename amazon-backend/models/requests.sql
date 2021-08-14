CREATE TABLE IF NOT EXISTS `products` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  image varchar(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  rating int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
