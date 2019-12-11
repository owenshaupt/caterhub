class RemoveIndexFromUniquePairsOnMenuItem < ActiveRecord::Migration[5.2]
  def change
    remove_index :menu_items, column: [:company_id, :name]
  end
end
