var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ruby",
  password: "Qazj6qup3u60604"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
