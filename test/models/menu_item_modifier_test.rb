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

require 'test_helper'

class MenuItemModifierTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
