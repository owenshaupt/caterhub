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
  belongs_to :menu_item,
    class_name: "MenuItem",
    foreign_key: "menu_item_id"

  belongs_to :order,
    class_name: "Order",
    foreign_key: "order_id"
end
