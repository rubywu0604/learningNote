var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ruby",
  password: "Qazj6qup3u60604",
  database: "rubyDB"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO customers (name, address) VALUES ('Jerome', 'ChangAn Rd')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
