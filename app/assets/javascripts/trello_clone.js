window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $mainDiv = $('#main');
    var router = new TrelloClone.Routers.BoardRouter($mainDiv);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
