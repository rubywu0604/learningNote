var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ruby",
  password: "Qazj6qup3u60604",
  database: "rubyDB"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 2, 5";
  // LIMIT 2, 5 is the same as LIMIT 5 OFFSET 2
  // result will list item 3,4,5,6,7

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
