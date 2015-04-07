TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  tagName: 'li',
  className: 'card',
  events: {
    'click button': 'delete'
  },
  render: function(){
    var content = this.template({ card: this.model });
    this.$el.html(content);
    return this;
  },
  delete: function(){
    this.model.destroy();
    this.remove();
  }
});
