TrelloClone.Models.List = Backbone.Model.extend ({
  urlRoot: 'api/lists',

  cards: function () {
    if(!this._cards){
      this._cards = new TrelloClone.Collection.Cards([], { list: this });
    }
    return this._cards;
  }
});
