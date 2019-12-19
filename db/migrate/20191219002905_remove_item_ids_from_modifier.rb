class RemoveItemIdsFromModifier < ActiveRecord::Migration[5.2]
  def change
    remove_column :modifiers, :item_ids, :integer
  end
end
