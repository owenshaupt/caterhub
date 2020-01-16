class Api::CompaniesController < ApplicationController
  def show
    @user = User.find_by(company_string: company_string)
    render :show
  end
  
  private

  def company_params
    params.permit(
      :company_string
    )
  end
end
