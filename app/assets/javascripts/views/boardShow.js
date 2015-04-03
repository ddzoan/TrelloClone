TrelloClone.Views.BoardShow = Backbone.CompositeView.extend ({
  template: JST['boards/show'],
  events: {
    "click .delete": "deleteBoard"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  },

  deleteBoard: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove;
    Backbone.history.navigate('', { trigger: true });
  }
});
