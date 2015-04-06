TrelloClone.Collections.Cards = Backbone.Collection.extend ({
  url: function () {
    return list.url() + '/cards';
  },
  model: TrelloClone.Models.Card,
  comparator: 'ord',
});
