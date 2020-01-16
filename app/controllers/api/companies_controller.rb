class Api::CompaniesController < ApplicationController
  def show
    puts params

    @company = Company.find_by('company_string' => params[:id])
    if @company
      render :show
    else
      render json: ['Invalid company/URL'], status: 422
    end
  end
  
  private

  def company_params
    params.permit(
      :id
    )
  end
end
