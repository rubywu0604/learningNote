//server: index.js
//1. host static file (index.html) | 2. save to databases | 3. authenticate

const express = require('express');
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
  console.log('I got a request!')
  console.log(request.body); // receive the POST package(combine data)
})