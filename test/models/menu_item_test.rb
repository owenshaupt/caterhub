# == Schema Information
#
# Table name: menu_items
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  price           :integer          not null
#  required_notice :integer          not null
#  company_id      :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class MenuItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
