TrelloClone.Views.ListItem = Backbone.CompositeView.extend ({
  template: JST['lists/list'],
  tagName: 'li',
  events: {
    "click .add-card": "newCardForm"
  },
  initialize: function(){
    this.listenTo(this.model.cards(), 'add', this.render);
  },
  render: function(){
    var content = this.template({ list: this.model });
    this.$el.html(content);

    this.renderCards();

    $(".sortable").sortable();
    $(".sortable").disableSelection();

    return this;
  },

  renderCards: function(){
    this.model.cards().each(function(card){
      var cardItem = new TrelloClone.Views.CardShow({ model: card });
      this.$('.cards').append(cardItem.render().$el);
    }.bind(this));
  },

  newCardForm: function(event){
    event.preventDefault();
    var newCard = new TrelloClone.Models.Card({ list_id: this.model.id });
    var newCardForm = new TrelloClone.Views.CardForm({ collection: this.model.cards(), model: newCard });
    this.$('.new-card').html(newCardForm.render().$el);
    newCardForm.$('input').focus();
  }
});
