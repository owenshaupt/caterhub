class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name, null: false, unique: true, index: true

      t.timestamps
    end
  end
end