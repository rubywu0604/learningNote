var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ruby",
  password: "Qazj6qup3u60604",
  database: "rubyDB"
});


con.connect(function(err) {
  if (err) throw err;
  // con.query("SELECT * FROM customers WHERE address LIKE 'R%'", function (err, result) {
  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    var string = JSON.stringify(result);
    var data = JSON.parse(string);
    //formating the result (remove "RowDataPacket")
    console.log(result);
    console.log(string);
    console.log(data);
  });
});
