class CompaniesController < ApplicationController
  def create
    @company = Company.new(company_params)
    if @company.save
      render :show # render what??
    else
      render json: @company.errors.full_messages, status: 422
    end
  end

  def show
    @company = Company.find(params[:id])
    render :show
  end
  
  private

  def company_params
    params.require(:company).permit(
      :name
    )
  end
end
