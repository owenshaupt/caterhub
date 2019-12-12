# == Schema Information
#
# Table name: companies
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Company < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :users
  has_many :menu_items
  has_many :modifiers
end
