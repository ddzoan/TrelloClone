TrelloClone.Collections.Lists = Backbone.Collection.extend ({
  url: function () {
    return this.board.url() + '/lists';
  },
  model: TrelloClone.Models.List,
});
