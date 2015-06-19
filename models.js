var mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost/blogdb');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
  commentby: String,
  commentbody: String
});
// Create a mongoose Blog Model to allow us to instasiate 

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comment: [commentSchema]
});

var Blog = mongoose.model('Blog', blogSchema);
// Create a mongoose Blog Model to allow us to instasiate
var Comment = mongoose.model('Comment', commentSchema);

// following line exports above code available to which function/file requires it.
module.exports.Blog = Blog;
module.exports.Comment = Comment;




