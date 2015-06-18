var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// serve js & css files into a public folder
app.use(express.static(__dirname + '/public'));

// body parser config
app.use(bodyParser.urlencoded({ extended: true }));

var http = require('http');

// root path
app.get("/", function (req, res){
  res.send('hello');
});


// listen on port 3000
app.listen(3000, function (){
  console.log("listening on port 3000");
});