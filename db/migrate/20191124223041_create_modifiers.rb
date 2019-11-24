class CreateModifiers < ActiveRecord::Migration[6.0]
  def change
    create_table :modifiers do |t|
      t.string :name, presence: true
      t.float :price, presence: true
      t.integer :required_notice, presence: true
      t.integer :company_id, presence: true, index: true
      t.integer :item_ids, array: true, index: true
      t.index [:name, :company_id], unique: true

      t.timestamps
    end
  end
end
