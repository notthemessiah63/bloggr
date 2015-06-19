// go into node repl and seed data
var REPL = require('repl');
var db = require('./models');

var repl = REPL.start('Blogs >');
var repl = REPL.start('Comments >');
// setting the Blogss database
repl.context.db = db;

// remove all documents from db - clear seed data
db.Blog.collection.remove();
db.Comment.collection.remove();

var b1 = db.Blog.create({
  title: 'The bloke n the bus',
  author: 'Dave Brown',
  body: 'I saw this bloke who was reading the times.. inside he was reading the Beano..'
  }, function(err, blog){
    console.log('Blog created');
    console.log(blog);
  });

var b2 = db.Blog.create({
  title: 'The dog and duck',
  author: 'Mad bert',
  body: 'A man walks into a bar.. said ouch!'
  }, function(err, blog){
    console.log('Blog created');
    console.log(blog);
    console.log('Database seeded');
    // Once all records seeded we output a message then exit.
    process.exit();
  });

var c1 = db.Comment.create({
  commentby: 'Steve',
  commentbody: 'so funny'
});

var c2 = db.Comment.create({
  commentby: 'Stuart',
  commentbody: 'so mad'
});






