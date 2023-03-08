//server: index.js
//1. host static file (index.html) | 2. save to databases | 3. authenticate

const express = require('express');
const fs = require('fs')
const app = express();
const port = 8080;
const Datastore = require('nedb')

app.listen(port, () => console.log(`listen on the port: ${port}`));
//1. host static file (index.html)
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const source = new Datastore('index.db');
source.loadDatabase();

// to see whether the endpoint('api') can receive the client's request or not
// request: server get all info from client's
// response: server sent thing back to the client base on their req
app.post('/api', (request, response) => {
  console.log('I got a request!')
  const data = request.body;
  const timestamp = Date.now();
  data.time = timestamp;
  source.insert(data);
  console.log(data);
 // receive the POST package(combine data)
  response.json(data);
});


app.get('/api', (request, response) => {
  console.log('here is the data')
  source.find({}, function (err, source) {
    if(err) {
      response.end();
      return;
    };
    response.json(source);
  });
})