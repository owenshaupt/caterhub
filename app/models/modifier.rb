# == Schema Information
#
# Table name: modifiers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  price      :integer          not null
#  company_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Modifier < ApplicationRecord
  validates_uniqueness_of :name, :scope => [:company_id]

  belongs_to :company
  has_many :menu_item_modifiers, dependent: :destroy

  has_many :menu_items,
    through: :menu_item_modifiers,
    source: :menu_item
end
