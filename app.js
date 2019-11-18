// Ramon Lucindo
// CST 336
// Spring, 2019 B
// Module 5 : hw4

const express = require("express");
const app = express();

var faker = require('faker');
var randomFirstName = faker.name.firstName();
var randomLastName = faker.name.lastName();
var randomEmail = faker.internet.email(randomFirstName, randomLastName);


app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

    
// routes
app.get("/", function(req, res) {
    res.render("index.ejs", {"email":randomEmail});
});

app.get("/planning", function(req, res) {
    
    res.render("planning.ejs", {"email":randomEmail});
});

app.get("/requirements", function(req, res) {
    
    res.render("requirements.ejs", {"email":randomEmail});
});

app.get("/design", function(req, res) {
    
    res.render("design.ejs", {"email":randomEmail});
});

app.get("/softwareDevelopment", function(req, res) {
    
    res.render("softwareDevelopment.ejs", {"email":randomEmail});
});

app.get("/testing", function(req, res) {
    
    res.render("testing.ejs", {"email":randomEmail});
});

app.get("/deployment", function(req, res) {
                                                                                            
    res.render("deployment.ejs", {"email":randomEmail});
});

app.get("/operationMaintenance", function(req, res) {
    
    res.render("operationMaintenance.ejs", {"email":randomEmail});
});


// listener
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express Server is Running...");
});
