class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user.nil?
      render json: ['Invalid email or password. Please try again'], status: 422
    else
      login!(@user)
      render :show
    end

  end

  def destroy
    if !current_user
      render json: ['No user to log out!'], status: 404
    else
      logout!
      render json: ['Logged out successfully']
    end
  end
end

