class CreateOrderMenuItems < ActiveRecord::Migration[5.2]
  def change
    create_table :order_menu_items do |t|
      t.integer :order_id, null: false
      t.integer :menu_item_id, null: false

      t.timestamps
    end
  end
end
