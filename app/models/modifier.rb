# == Schema Information
#
# Table name: modifiers
#
#  id              :bigint           not null, primary key
#  name            :string
#  price           :float
#  required_notice :integer
#  company_id      :integer
#  item_ids        :integer          is an Array
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Modifier < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true
  validates :required_notice, presence: true
  validates :company_id, presence: true

  belongs_to :company
end
