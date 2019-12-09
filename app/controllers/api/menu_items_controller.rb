class Api::MenuItemsController < ApplicationController
  def create
    @menu_item = MenuItem.new(menu_item_params)
    if @menu_item.save
      render :show
    else
      render json: @menu_item.errors.full_messages, status: 422
    end
  end

  def update
    @menu_item = MenuItem.find(params[:menu_item][:id])
    if @menu_item.update(menu_item_params)
      render :show
    else
      render json: @menu_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @menu_item = MenuItem.find(params[:id])
    @menu_item.destroy
    # @items = Item.all //might not need
    render :index
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
