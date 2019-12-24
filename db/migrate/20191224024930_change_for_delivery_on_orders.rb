class ChangeForDeliveryOnOrders < ActiveRecord::Migration[5.2]
  def change
    rename_column :orders, :for_delivery?, :for_delivery
  end
end
