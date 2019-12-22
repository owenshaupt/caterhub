class CreateOrderModifiers < ActiveRecord::Migration[5.2]
  def change
    create_table :order_modifiers do |t|
      t.integer :order_id, null: false
      t.integer :modifier_id, null: false

      t.timestamps
    end
  end
end
