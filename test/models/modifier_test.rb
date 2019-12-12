# == Schema Information
#
# Table name: modifiers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  price      :float            not null
#  company_id :integer          not null
#  item_ids   :integer          default([]), is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ModifierTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
