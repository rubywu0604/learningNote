// Imports
const express = require("express");
const app = express();
const port = 8080;

// Static files
app.use(express.static("webpage"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));



// Listen on port
app.listen(port, () => console.info(`listen on port ${port}`));
