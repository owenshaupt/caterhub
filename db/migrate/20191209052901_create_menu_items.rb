class CreateMenuItems < ActiveRecord::Migration[5.2]
  def change
    create_table :menu_items do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.integer :required_notice, null: false
      t.integer :company_id, null: false, index: true
      t.index [:company_id, :name], unique: true

      t.timestamps
    end
  end
end
