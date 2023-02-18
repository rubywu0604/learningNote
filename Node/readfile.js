
/* normal case : open with "http://localhost:8080/" => Hello World!
*/

// var http = require('http');
//
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("Hello World!");
//   res.end();
// }).listen(8080);
//

/* readfile case :
*/

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

/* upper case : open with "http://localhost:8080/" => HELLO WORLD!
*/

var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);
