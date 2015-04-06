# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.(@board, :id, :title, :user)
json.lists @board.lists do |list|
  json.(list, :id, :title, :board_id, :ord)
  json.cards list.cards, :id, :title, :list_id, :description, :ord
end
