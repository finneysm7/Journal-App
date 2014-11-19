
JournalApp.Routers.Router = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'posts/:id' : 'show',
  },
  
  initialize: function(options) {
    this.$el = options.$el
  },
  
  index: function() {
    this.posts = new JournalApp.Collections.Posts();
    this.posts.fetch();
    var indexView = new JournalApp.Views.PostsIndex({collection: this.posts});
    this.$el
    this.$el.html(indexView.render().$el);
  },

  show: function(id){
    this.posts = this.posts || new JournalApp.Collections.Posts();
    var post = this.posts.getOrFetch(id);
    var showPost = new JournalApp.Views.PostShow({
      model: post
    });
    this.$el.html(showPost.render().$el);
  }
  
})