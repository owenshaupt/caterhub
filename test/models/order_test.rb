# == Schema Information
#
# Table name: orders
#
#  id                   :bigint           not null, primary key
#  contact_name         :string           not null
#  contact_phone_number :string           not null
#  contact_email        :string           not null
#  company_name         :string
#  order_date           :datetime         not null
#  fulfillment_date     :datetime         not null
#  total_price          :integer          not null
#  for_delivery?        :boolean          not null
#  special_instructions :string
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

require 'test_helper'

class OrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
