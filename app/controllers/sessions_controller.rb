class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ['Invalid username or password. Please try again'], status: 422
    else
      login!(@user)
      render json: ['Success']
    end
  end

  def destroy
    if !current_user
      render json: ['No user to log out!'], status: 404
    end

    logout!
    render json: ['Logged Out']
  end
end
