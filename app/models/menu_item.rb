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
end
