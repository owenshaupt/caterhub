# == Schema Information
#
# Table name: modifiers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  price      :float            not null
#  company_id :integer          not null
#  item_ids   :integer          default([]), is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Modifier < ApplicationRecord
  validates_uniqueness_of :name, :scope => [:company_id]

  belongs_to :company
end