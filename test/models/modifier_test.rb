# == Schema Information
#
# Table name: modifiers
#
#  id              :bigint           not null, primary key
#  name            :string
#  price           :float
#  required_notice :integer
#  company_id      :integer
#  item_ids        :integer          is an Array
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class ModifierTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
