TrelloClone.Views.BoardShow = Backbone.CompositeView.extend ({
  template: JST['boards/show'],
  events: {
    "click .delete": "deleteBoard"
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.render);
  },

  render: function (){
    var content = this.template({ board: this.model });
    this.$el.html(content);
    this.model.lists().each(function (list) {
      var listItem = new TrelloClone.Views.ListItem({ model: list });
      this.$('.lists').append(listItem.render().$el);
    });

    this.addNewListForm();

    return this;
  },

  addNewListForm: function(){
    var newView = $('<li>');
    var newListForm = new TrelloClone.Views.ListForm({ model: this.model });
    newView.html(newListForm.render().$el);
    this.$('.lists').append(newView);
    return this;
  },

  deleteBoard: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
    Backbone.history.navigate('', { trigger: true });
  }
});
