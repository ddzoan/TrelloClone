TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend ({
  template: JST['boards/index'],
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function(board){
      var boardItem = new TrelloClone.Views.BoardIndexItem({ model: board });
      this.$('.boards').append(boardItem.render().$el);
    }.bind(this))
    return this;
  }
});
