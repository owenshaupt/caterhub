json.array! @menu_items do |menu_item|
  json.partial! 'menu_item', menu_item: menu_item
end
