JournalApp.Collections.Posts = Backbone.Collection.extend({
  model: JournalApp.Models.Post,
  url: 'posts',
  
  getOrFetch: function(id) {
    var that = this;
    var post = this.get(id);
    if (post === undefined){
      post = new JournalApp.Models.Post({ id: id});
      post.fetch({
        success: function () { that.add(post);}
      });
    } else {
      post.fetch();      
    }
    
    return post;
  }
});