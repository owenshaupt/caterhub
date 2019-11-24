class CreateMenuItems < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_items do |t|
      t.string :name, null: false, index: true
      t.float :price, null: false
      t.integer :required_notice, null: false
      t.integer :company_id, null: false
      t.index [:name, :company_id], unique: true


      t.timestamps
    end
  end
end
