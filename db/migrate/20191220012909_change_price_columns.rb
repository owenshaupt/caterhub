class ChangePriceColumns < ActiveRecord::Migration[5.2]
  def change
    change_column :menu_items, :price, :integer
    change_column :modifiers, :price, :integer
  end
end
