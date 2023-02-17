var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function (req,res) {
  var q = url.parse(req.url, true);
  var fileName = "." + q.pathname; //"." means the html file is in the same folder as Node.js file
  fs.readFile(fileName, function(err, data) {
    if (err) {
      res.writeHead(404, {"Content-Type": "text/html"});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    return res.end();
  })
}).listen(8080);

//open with "http://localhost:8080/home.html" => home.html
//open with "http://localhost:8080/love.html" => love.html
