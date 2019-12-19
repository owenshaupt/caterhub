# == Schema Information
#
# Table name: menu_item_modifiers
#
#  id           :bigint           not null, primary key
#  menu_item_id :bigint           not null
#  modifier_id  :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class MenuItemModifier < ApplicationRecord
  belongs_to :menu_item
  belongs_to :modifier
end
