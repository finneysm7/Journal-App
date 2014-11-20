
JournalApp.Routers.Router = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'posts/new' : 'newPost',
    'posts/:id' : 'show'
  },
  
  initialize: function(options) {
    this.$el = options.$el
    this.$sidebar = $('#sidebar');
    this.posts = new JournalApp.Collections.Posts();
    this.posts.fetch();
    var indexView = new JournalApp.Views.PostsIndex({collection: this.posts});
    this.$sidebar.html(indexView.render().$el);
  },
  
  index: function() {
    this.$el.empty();
  },

  show: function(id){
    this.posts = this.posts || new JournalApp.Collections.Posts();
    var post = this.posts.getOrFetch(id);
    var showPost = new JournalApp.Views.PostShow({
      model: post
    });
    this.$el.html(showPost.render().$el);
  },
  
  newPost: function(){
    var post = new JournalApp.Models.Post();
    var posts = this.posts;
    var postForm = new JournalApp.Views.PostForm({
      model: post,
      collection: posts
    })
    this.$el.html(postForm.render().$el)
  }
  
})