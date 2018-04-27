var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var routes = require("./controllers/burgers_controller");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride("__method"));









app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });