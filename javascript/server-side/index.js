//server: index.js
//1. host static file (index.html) | 2. save to databases | 3. authenticate

const express = require('express');
const fs = require('fs')
const app = express();
const port = 8080;

app.listen(port, () => console.log(`listen on the port: ${port}`));
//1. host static file (index.html)
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

// to see whether the endpoint('api') can receive the client's request or not
// request: server get all info from client's
// response: server sent thing back to the client base on their req
app.post('/api', (request, response) => {
  const location = request.body;
  console.log('new position: ', location);

  fs.appendFile('data.txt', JSON.stringify(location), function (err) {
    if (err) throw err;
    console.log('data file updated as below.'); // receive the POST package(combine data)

  fs.readFile('data.txt', function(err, data){
    if (err) throw err;
    console.log(data.toString());
  }) ;
});

  response.json({
    status: 'success',
    latitude: request.body.lat,
    loogitude: request.body.lon,
  });
});
