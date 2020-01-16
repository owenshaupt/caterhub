class AddCompanyStringToCompany < ActiveRecord::Migration[5.2]
  def change
    add_column :companies, :company_string, :string, index: true
  end
end
