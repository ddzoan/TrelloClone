TrelloClone.Routers.BoardRouter = Backbone.Router.extend ({
  routes: {
    "": "boardIndex",
    "/new": "newBoard"
  },

  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
    this.boards = new TrelloClone.Collections.Boards();
  },

  boardIndex: function () {
    this.boards.fetch();
    var index = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    this.$rootEl.html(index.render().$el);
  },

  newBoard: function () {
    var newBoard = new TrelloClone.Models.Board();
    var form = new TrelloClone.Views.BoardForm();
    this.$rootEl.html(form.render().$el);
  }
});
