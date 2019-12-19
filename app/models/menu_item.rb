# == Schema Information
#
# Table name: menu_items
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  price           :float            not null
#  required_notice :integer          not null
#  company_id      :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class MenuItem < ApplicationRecord
  validates_uniqueness_of :name, :scope => [:company_id]

  belongs_to :company
  has_many :menu_item_modifiers, dependent: :destroy

  has_many :modifiers,
    through: :menu_item_modifiers,
    source: :modifier

  # has_many :menu_item_modifiers,
  #   class_name: :MenuItemModifier,
  #   foreign_key: :menu_item_id
end
