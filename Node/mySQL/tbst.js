var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ruby",
  password: "Qazj6qup3u60604",
  database: "rubyDB"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "select * from customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    var string = JSON.stringify(result);
    var data = JSON.parse(string);
    console.log(data);
  });
});
