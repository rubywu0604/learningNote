DROP TABLE IF EXISTS customers;
CREATE TABLE customers
(orderKey INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  address VARCHAR(255),
  PRIMARY KEY (orderKey)
);
INSERT INTO customers(name, address) VALUES('John', 'Highway 7');
INSERT INTO customers(name, address) VALUES('Peter', 'Lowstreet 4');
INSERT INTO customers(name, address) VALUES('Amy', 'Apple st 652');
INSERT INTO customers(name, address) VALUES('Hannah', 'Mountain 21');
INSERT INTO customers(name, address) VALUES('Michael', 'Valley 345');
INSERT INTO customers(name, address) VALUES('Sandy', 'Ocean blvd 2');
INSERT INTO customers(name, address) VALUES('Betty', 'Green Grass 1');
INSERT INTO customers(name, address) VALUES('Richard', 'Sky st 331');
INSERT INTO customers(name, address) VALUES('Susan', 'One way 98');
INSERT INTO customers(name, address) VALUES('Vicky', 'Yellow Garden 2');
INSERT INTO customers(name, address) VALUES('Ben', 'Park Lane 38');
INSERT INTO customers(name, address) VALUES('William', 'Central st 954');
INSERT INTO customers(name, address) VALUES('Chuck', 'Main Road 989');
INSERT INTO customers(name, address) VALUES('Viola', 'Sideway 1633');
INSERT INTO customers(name, address) VALUES('Michelle', 'Blue Village 1');
INSERT INTO customers(name, address) VALUES('Ruby', 'WenHua 2 Rd');
INSERT INTO customers(name, address) VALUES('Jerome', 'ChangAn Rd');
