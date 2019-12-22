class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :contact_name, null: false
      t.string :contact_phone_number, null: false
      t.string :contact_email, null: false
      t.string :company_name
      t.datetime :order_date, null: false
      t.datetime :fulfillment_date, null: false
      t.integer :total_price, null: false
      t.boolean :for_delivery?, null: false
      t.string :special_instructions

      t.timestamps
    end
  end
end
