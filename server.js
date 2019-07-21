// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8082;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname+'/public'));
//app.use('/static', express.static('public'));

// Routes
app.get("/", function (req, res) {
    res.render("about");
});
app.get("/about", function (req, res) {
    res.render("about");
});


app.get("/portfolio", function (req, res) {
    res.render("portfolio")
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
