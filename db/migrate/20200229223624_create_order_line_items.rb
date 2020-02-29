class CreateOrderLineItems < ActiveRecord::Migration[5.2]
  def change
    create_table :order_line_items do |t|
      t.integer :order_id, null: false
      t.integer :menu_item_id, null: false
      t.integer :quantity, null: false
      t.integer :modifiers, array: true, default: []

      t.timestamps
    end
  end
end
