// this is called namespacing
var Blog = Blog || {};
var View = View || {};

$(document).ready(function() {
  Blog.all();
  // console.log(Blog)
  View.initialise();
});

View = {
  initialise: function() {
    $('#blog-form').on('submit', function(e) {
      e.preventDefault();
      // turns data into key value pairs
      Blog.create($(this).serialize());
      console.log(this);
    });
    // Event delegation
    $('#blog-ul').on('click', '.js-close', function(e) {
      Blog.delete($(this).data('id'));
    });
  },
  render: function(templateElement, object, parentElement) {
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
}

Blog = {
  all: function() {
    $.get('/blogs', function(response) {
      // var blogs = JSON.parse(response);
      var blog = response;
      console.log(blog);
      $.each(blog, function(index, blog) {
        console.log(blog);
        View.render($('#blog-item-template'), blog, $('#blog-ul'));
      })
    });
  },
  create: function(blogParams) {
    $.post('/blogs', blogParams)
    .done(function(response) {
      // var food = JSON.parse(response);
      var blog = response;
      View.render($('#blog-item-template'), blog, $('#blog-ul'));
    })
    .done(function() {
      $('#blog-form').trigger('reset');
    })
  },
  delete: function(blogId) {
    $.ajax({
      url: '/blogs/' + blogId,
      type: 'DELETE'
    })
    .done(function(response) {
      console.log(response);
      $('#blog-ul').empty();
      Blog.all();
    });
  }

}