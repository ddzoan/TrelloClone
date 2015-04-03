TrelloClone.Views.BoardForm = Backbone.View.extend ({
  template: JST['boards/new'],
  events: {
    'submit': 'saveForm'
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  },

  saveForm: function () {
    var formData = this.serializeJSON();
    this.model.save(formData, {
      success: function(){}
    });
  }
});
