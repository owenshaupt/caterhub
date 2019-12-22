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

class OrderModifier < ApplicationRecord
  belongs_to :modifier,
    class_name: "Modifier",
    foreign_key: "modifier_id"


  belongs_to :order,
    class_name: "Order",
    foreign_key: "order_id"
end
