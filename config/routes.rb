Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show]
      resource :session, only: [:create, :destroy]
      resources :companies, only: [:show] do
        resources :menu_items, only: [:create, :edit, :destroy, :show]
      end
  end

  root to: 'static_pages#root'
end
