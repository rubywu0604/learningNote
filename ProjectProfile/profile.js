// Imports
const express = require("express");
const app = express();
const port = 8080;

// Static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));


// Set webpage
app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/home.html", function (req, res) {  // open with "http://localhost:8080/home.html"
  res.render("home");
})

app.get("/love.html", function (req, res) {  // open with "http://localhost:8080/love.html"
  res.render("love");
})

// Listen on port
app.listen(port, () => console.info(`listen on port ${port}`));
