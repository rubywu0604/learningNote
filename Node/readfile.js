var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

//open with "http://localhost:8080/" => Hello World!


// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function (req, res) {
//   fs.readFile("../html/home.html", function(err, data) {   //Open a file on the server and return its content:
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);
