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
#  for_delivery         :boolean          not null
#  special_instructions :string
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class Order < ApplicationRecord
  validates :contact_phone_number, length: {is: 10}

  has_many :order_line_items
  
  has_many :order_modifiers
  has_many :modifiers,
    through: :order_modifiers
  
  has_many :order_menu_items
  has_many :menu_items,
    through: :order_menu_items
end
