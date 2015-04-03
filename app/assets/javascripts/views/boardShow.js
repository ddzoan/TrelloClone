TrelloClone.Views.BoardShow = Backbone.CompositeView.extend ({
  template: JST['boards/show'],
  events: {
    "click .delete": "deleteBoard"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.render);
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    var newList = new TrelloClone.Views.ListForm({ model: this.model });
    this.$('.new-list').append(newList.render().$el);
    return this;
  },

  deleteBoard: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove;
    Backbone.history.navigate('', { trigger: true });
  }
});
