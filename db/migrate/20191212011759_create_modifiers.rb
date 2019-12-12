class CreateModifiers < ActiveRecord::Migration[5.2]
  def change
    create_table :modifiers do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.integer :company_id, null: false, index: true
      t.integer :item_ids, array: true, default: []

      t.timestamps
    end
  end
end
