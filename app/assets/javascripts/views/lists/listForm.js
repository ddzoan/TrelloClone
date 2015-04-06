TrelloClone.Views.ListForm = Backbone.CompositeView.extend({
  template: JST['lists/new'],
  tagName: "form",
  className: "new-list",
  events: {
    "submit": "newList"
  },

  render: function () {
    this.newList = new TrelloClone.Models.List({ board_id: this.model.id });
    var content = this.template({ list: this.newList });
    this.$el.html(content);
    return this;
  },

  newList: function (event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON();
    this.newList.save(formData, {
      success: function (model) {
        this.$('input[name="title"]').val('');
        this.model.lists().add(model);
      }.bind(this)
    });
  }
});
