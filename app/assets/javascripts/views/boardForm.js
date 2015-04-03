TrelloClone.Views.BoardForm = Backbone.View.extend ({
  template: JST['boards/new'],
  tagName: 'form',
  events: {
    'submit': 'saveForm'
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  },

  saveForm: function (event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON();
    this.model.save(formData, {
      success: function(model){
        this.collection.add(model, { merge: true });
        Backbone.history.navigate('', { trigger: true });
      }.bind(this)
    });
  }
});
