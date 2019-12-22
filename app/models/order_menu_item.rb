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

class OrderMenuItem < ApplicationRecord
  has_one :menu_items
  has_one :order
end
