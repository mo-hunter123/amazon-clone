

CREATE TABLE IF NOT EXISTS `categories` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  catName char(200) NOT NULL
)


CREATE TABLE IF NOT EXISTS `clients` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  password char(255) NOT NULL
)





CREATE TABLE IF NOT EXISTS `products` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_categorie int(11) NOT NULL, 
  title varchar(255) NOT NULL,
  image varchar(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  rating int(11) NOT NULL, 
  FOREIGN KEY(id_categorie) REFERENCES categories(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




CREATE TABLE `orders` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `id_client` int(11) NOT NULL,
  `orderDate` datetime NOT NULL, 
  FOREIGN KEY (`id_client`) REFERENCES clients(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `order_lines` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `id_order` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `qte` int(11) NOT NULL, 
  `price` DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (`id_order`) REFERENCES orders(id), 
  FOREIGN KEY (`id_product`) REFERENCES products(id) 

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `products` (`id_categorie`, `title`, `image`, `price`, `rating`) VALUES
(1, 'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback', '1234', '11.96', 5),
(1, 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl', '3002', '230.96', 4),
(1, 'Old Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)', '2000', '5000.00', 1),
(1, 'Samsung LC49RG90SSUXEN 49\ Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440', '5493', '12.96', 2),
(1, 'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric', '3444', '3.96', 5);