var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ruby",
  password: "Qazj6qup3u60604",
  database: "rubyDB"
});

con.connect(function(err) {
  if (err) throw err;
  var name = 'Amy';
  var adr = 'Mountain 21';
  //Escape the name and the address values:
  var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
  //Send an array with value(s) to replace the escaped values:
  con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    var string = JSON.stringify(result);
    // [{"orderKey":3,"name":"Amy","address":"Apple st 652"},{"orderKey":4,"name":"Hannah","address":"Mountain 21"}]
    var data = JSON.parse(string);
    // [
    //   { orderKey: 3, name: 'Amy', address: 'Apple st 652' },
    //   { orderKey: 4, name: 'Hannah', address: 'Mountain 21' }
    // ]
    console.log(data);
  });
});
