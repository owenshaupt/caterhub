class MenuitemsModifiers < ActiveRecord::Migration[5.2]
  def change
    create_table :menu_items_modifiers, id: false do |t|
      t.belongs_to :menu_item
      t.belongs_to :modifier
    end
  end
end
