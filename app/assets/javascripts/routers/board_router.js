TrelloClone.Routers.BoardRouter = Backbone.Router.extend ({
  routes: {
    "": "boardIndex",
    "boards/new": "newBoard",
    "boards/:id": "showBoard"
  },

  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
    this.boards = new TrelloClone.Collections.Boards();
    this.boards.fetch();
  },

  boardIndex: function () {
    var index = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    this.$rootEl.html(index.render().$el);
  },

  newBoard: function () {
    var newBoard = new TrelloClone.Models.Board();
    var form = new TrelloClone.Views.BoardForm({ model: newBoard, collection: this.boards });
    this.$rootEl.html(form.render().$el);
  },

  showBoard: function (id) {
    var board = this.boards.getOrFetch(id);
    var show = new TrelloClone.Views.BoardShow({ model: board });
    this.$rootEl.html(show.render().$el);
  }
});
