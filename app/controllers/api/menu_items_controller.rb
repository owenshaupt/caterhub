class Api::MenuItemsController < ApplicationController
  def create
    @menu_item = MenuItem.new(menu_item_params)
    @price_in_cents = menu_item_params["price"] * 100
    @menu_item["price"] = @price_in_cents
    puts @menu_item["price"]

    if @menu_item.save
      @menu_item_modifier_ids = item_modifiers_params["modifier_ids"]
      @menu_item_modifier_ids.each do |modifier_id|
        menu_item_modifier = MenuItemModifier.new(
          'menu_item_id':(@menu_item.id),
          'modifier_id':(modifier_id)
        )

        if !(menu_item_modifier.save)
          puts menu_item_modifier.errors.full_messages
          render json: menu_item_modifier.errors.full_messages, status: 422
        end
      end
    else
      puts @menu_item.errors.full_messages
      render json: @menu_item.errors.full_messages, status: 422
    end
  end

  # def update
  #   @menu_item = MenuItem.find(params[:menu_item][:id])
  #   if @menu_item.update(menu_item_params)
  #     render :show
  #   else
  #     render json: @menu_item.errors.full_messages, status: 422
  #   end
  # end

  def destroy
    @menu_item = MenuItem.find(params[:id])
    @menu_item.destroy
  end

  def index
    @menu_items = MenuItem.all
    render :index
  end

  # def show
  # end

  def filter
    @menu_items = MenuItem.where("company_id = #{params['company']}")
    render :filter
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

  def item_modifiers_params
    params.permit(
      modifier_ids: []
    )
  end
end
