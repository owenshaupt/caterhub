class Api::MenuItemsController < ApplicationController
  def create
    @menu_item = MenuItem.new(menu_item_params)
    if @menu_item.save
      # render :show
    else
      puts @menu_item.errors.full_messages
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
    @item_id = params[:id]
    @menu_item = MenuItem.find(@item_id)

    @contents = request.raw_post
    @ids_string = @contents[1, @contents.length - 2]
    @ids_arr = @ids_string.split(',')
    @user_id = @ids_arr[1]

    @company_modifiers = Modifier.where(company_id: @user_id)
    puts (@item_id)
    @company_modifiers.each do |mod|
      # puts (mod.name)
      # puts (mod.item_ids[0].is_a?(Integer)) # integers in array
      # puts (@item_id.is_a?(String)) # string in params
      if mod.item_ids.include?(@item_id.to_i)
        # puts 'in if statement'
        # puts (mod.item_ids)
        mod.item_ids.delete(@item_id.to_i)
        # puts (mod.item_ids)
      end
    end
    
    # @menu_item.destroy PUT THIS BACK IN
  end

  def index
    @menu_items = MenuItem.all
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
