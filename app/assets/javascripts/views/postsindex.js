JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],
  
  events: {
    "click button.delete-button" : "deletePost"
  },
  
  initialize: function(){
    this.listenTo(this.collection, "remove", this.render);
  },
  
  render: function(){
    var content = this.template({posts: this.collection});
    this.$el.html(content);
  },
  
  deletePost: function(event){
    var postId = $(event.currentTarget).data('id');
    var post = this.collection.get(postId);
    post.destroy();
  }
  
});