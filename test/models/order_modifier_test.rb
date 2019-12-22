# == Schema Information
#
# Table name: order_modifiers
#
#  id          :bigint           not null, primary key
#  order_id    :integer          not null
#  modifier_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class OrderModifierTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
