var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url); //Read the Query String
  res.end();
}).listen(8080);

//open with "http://localhost:8080/summer" => /summer
//open with "http://localhost:8080/winter" => /winter
