JournalApp.Views.PostForm = Backbone.View.extend({
  
  template: JST['posts/post_form'],
  
  events: {
    'submit form' : 'createPost',
  },
  
  render: function(){
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },
  
  showErrors: function (response){
    var giantString = "<ul class='errors'>";
    response.responseJSON.forEach(function (message){
      giantString += "<li class='error'>" + message + "</li>";     
    })
    giantString += "</ul>"
    this.$el.prepend(giantString);
  },
  
  createPost: function(event) {
    event.preventDefault();
    var thisForm = this;
    var formObj = $(event.currentTarget).serializeJSON().post;
    this.model.save(formObj, {
      success: function(){ 
        thisForm.collection.add(thisForm.model, {merge: true});
        Backbone.history.navigate("", {trigger: true})
      },
      error: function(model, response) {
        this.render();
        this.showErrors(response);
      }.bind(this)
    })
  }
})