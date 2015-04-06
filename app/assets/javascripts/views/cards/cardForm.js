TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST['cards/new'],
  tagName: 'form',
  events: {
    "submit": "submit"
  },
  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  submit: function(event){
    event.preventDefault();
    var formData = this.$el.serializeJSON();
    this.model.save(formData, {
      success: function(model){
        this.collection.add(model);
        this.$('input[name="title"]').val('');
      }.bind(this)
    });
  }
});
