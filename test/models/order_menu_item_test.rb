# == Schema Information
#
# Table name: order_menu_items
#
#  id           :bigint           not null, primary key
#  order_id     :integer          not null
#  menu_item_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class OrderMenuItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
