var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// mongoose create a connecton to the database from the server
var db = require('./models');

// serve js & css files into a public folder
app.use(express.static(__dirname + '/public'));

// body parser config
app.use(bodyParser.urlencoded({ extended: true }));

var http = require('http');

// root path
app.get("/", function (req, res){
  // res.send("hello mum");
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

// ===================

app.get("/blogs", function (req, res){

  db.Blog.find({}, function(err, blogs){
    res.send(blogs);
  });
});

app.post("/blogs", function (req, res){

  db.Blog.create(req.body, function(err, blog){
    res.send(201, blog); //success, object created hence 201
  });
});

app.delete("/blogs/:id", function (req, res){
  var blogId = req.params.id;


  db.Blog.findByIdAndRemove({
    _id: req.params.id
  }, function(err, blog) {
    res.send(204) //sucess, all gone!
  })
});


// ====================


// listen on port 3000
app.listen(3000, function (){
  console.log("listening on port 3000");
});