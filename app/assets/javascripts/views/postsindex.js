JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],
  
  events: {
    "click button.delete-button" : "deletePost"
  },
  
  initialize: function(){
    var events = "add remove change:title reset"
    this.listenTo(this.collection, events, this.render);
  },
  
  render: function(){
    var content = this.template({posts: this.collection});
    this.$el.html(content);
    return this;
  },
  
  deletePost: function(event){
    var postId = $(event.currentTarget).data('id');
    var post = this.collection.get(postId);
    post.destroy();
  }
  
});