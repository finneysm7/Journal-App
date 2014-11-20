
JournalApp.Views.PostShow = Backbone.View.extend({
  
  template: JST['posts/show'],
  
  events: {
    "dblclick h3" : "editSegment",
    "dblclick p" : "editSegment",
  },
  
  render: function(){
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },
  
  editSegment: function(event) {
    var $attributeBox = $(event.currentTarget);
  },
  
})