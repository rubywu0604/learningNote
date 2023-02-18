var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month; // Split the Query String
  res.end(txt);
}).listen(8080);

//open with "http://localhost:8080/?year=2023&month=Feb" => 2023 Feb
