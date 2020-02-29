# == Schema Information
#
# Table name: order_line_items
#
#  id           :bigint           not null, primary key
#  order_id     :integer          not null
#  menu_item_id :integer          not null
#  quantity     :integer          not null
#  modifiers    :integer          default([]), is an Array
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class OrderLineItem < ApplicationRecord
  belongs_to :order

  def calculate_price
    puts 'math, math, math!'
  end
end
