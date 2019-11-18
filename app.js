// Ramon Lucindo
// CST 336
// Spring, 2019 B
// Module 5 : hw4

const express = require("express");
const app = express();

var faker = require("faker");
var randomFirstName = faker.name.firstName();
var randomLastName = faker.name.lastName();
var randomEmail = faker.internet.email(randomFirstName, randomLastName);


app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));
    
// routes
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/planning", function(req, res) {
    res.render("planning.html");
});

app.get("/requirements", function(req, res) {
    res.render("requirements.html");
});

app.get("/design", function(req, res) {
    res.render("design.html");
});

app.get("/softwareDevelopment", function(req, res) {
    res.render("softwareDevelopment.html");
});

app.get("/testing", function(req, res) {
    res.render("testing.html");
});

app.get("/deployment", function(req, res) {
    res.render("deployment.html");
});

app.get("/operationMaintenance", function(req, res) {
    res.render("operationMaintenance.html");
});

app.use(function(req, res) {
    res.render("partials/footer.ejs", {"randomEmail": value});
});


// listener
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express Server is Running...");
});
