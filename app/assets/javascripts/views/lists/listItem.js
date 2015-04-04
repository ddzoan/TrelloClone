TrelloClone.Views.ListItem = Backbone.CompositeView.extend ({
  template: JST['lists/list'],
  tagName: 'li',
  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  }
});
