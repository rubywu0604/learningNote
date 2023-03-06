//server: index.js
//1. host static file (index.html) | 2. save to databases | 3. authenticate

const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`listen on the port: ${port}`));
app.use(express.static('public'));