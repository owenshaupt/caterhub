class Api::MenuItemsController < ApplicationController
  def create

  end

  def edit

  end

  def destroy

  end

  def show

  end

  private

  def menu_item_params
    params.permit(
      :name,
      :price,
      :required_notice,
      :company_id
    )
  end
end
