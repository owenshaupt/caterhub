class Api::ModifiersController < ApplicationController
  def create
    @modifier = Modifier.new(modifier_params)

    if @modifier.save
      @modifier_menu_item_ids = modifier_items_params["item_ids"]
      @modifier_menu_item_ids.each do |item_id|
        menu_item_modifier = MenuItemModifier.new(
          'menu_item_id':(item_id),
          'modifier_id':(@modifier.id)
        )
        
        if !(menu_item_modifier.save)
          puts menu_item_modifier.errors.full_messages
          render json: menu_item_modifier.errors.full_messages, status: 422
        end
      end

      # render :show
    else
      puts @modifier.errors.full_messages
      render json: @modifier.errors.full_messages, status: 422
    end
  end

  def index
    @modifiers = Modifier.all
    render :index
  end

  def destroy
    @modifier = Modifier.find(params[:id])
    @modifier.destroy
  end


  private

  def modifier_params
    params.permit(
      :name,
      :price,
      :company_id
    )
  end

  def modifier_items_params
    params.permit(
      item_ids: []
    )
  end
end
