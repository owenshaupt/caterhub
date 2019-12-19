class CreateMenuItemModifiers < ActiveRecord::Migration[5.2]
  def change
    create_table :menu_item_modifiers do |t|
      t.bigint :menu_item_id, null: false
      t.bigint :modifier_id, null: false
      t.index [:menu_item_id, :modifier_id], unique: true

      t.timestamps
    end

    add_index :menu_item_modifiers, :menu_item_id
    add_index :menu_item_modifiers, :modifier_id
  end
end
