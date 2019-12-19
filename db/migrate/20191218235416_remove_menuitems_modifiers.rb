class RemoveMenuitemsModifiers < ActiveRecord::Migration[5.2]
  def change
    drop_table :menu_items_modifiers
  end
end
