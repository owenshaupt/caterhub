class Api::OrdersController < ApplicationController
  def create
    @order = Order.new(order_params)

    # if @order.save
    #   @order_menu_item_ids = modifier_items_params["item_ids"]
    #   @order_menu_item_ids.each do |item_id|
    #     menu_item_modifier = MenuItemOrder.new(
    #       'menu_item_id':(item_id),
    #       'modifier_id':(@order.id)
    #     )
        
    #     if !(menu_item_Order.save)
    #       puts menu_item_Order.errors.full_messages
    #       render json: menu_item_Order.errors.full_messages, status: 422
    #     end
    #   end
    # else
    #   puts @order.errors.full_messages
    #   render json: @order.errors.full_messages, status: 422
    # end

    puts @order
  end

  # def index
  #   @orders = Order.all
  #   render :index
  # end

  # def destroy
  #   @order = Order.find(params[:id])
  #   @order.destroy
  # end


  private

  def order_params
    params.permit(
      :company_id,
      :contact_name,
      :contact_phone_number,
      :contact_email,
      :company_name,
      :order_date,
      :fulfillment_date,
      :total_price,
      :for_delivery,
      :special_instructions
    )
  end

  # def order_items_params
  #   params.permit(
  #     item_ids: []
  #   )
  # end
end
