var http = require('http');
var dt = require("./myfirstmodule")

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});  // res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.
  res.write("The date and time are currently: " + dt.myDateTime())
  res.end();
}).listen(8080);

//open with "http://localhost:8080/" => The date and time are currently: date & time
