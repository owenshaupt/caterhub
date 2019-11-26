Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resource :companies #, only: [:create, :destroy]
    resource :users, only: [:create]
  end

  root to: 'static_pages#root'
end
