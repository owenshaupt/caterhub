class Api::ModifiersController < ApplicationController
  def create
    @modifier = Modifier.new(modifier_params)
    puts @modifier
    puts modifier_params
    if @modifier.save
      # render :show
    else
      puts @modifier.errors.full_messages
      render json: @modifier.errors.full_messages, status: 422
    end
  end

  private

  def modifier_params
    params.permit(
      :name,
      :price,
      :company_id,
      item_ids: []
    )
  end
end
