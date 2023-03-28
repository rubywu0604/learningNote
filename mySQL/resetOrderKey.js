var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ruby",
  password: "Qazj6qup3u60604",
  database: "rubyDB"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE customers SET id = id - 1 WHERE id > 15";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "ALTER TABLE customers RENAME COLUMN id TO orderKey";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
