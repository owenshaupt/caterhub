Rails.application.routes.draw do
  namespace :api do
    get 'modifiers/create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show]
      resources :menu_items, only: [:create, :edit, :destroy, :show, :index]
      resources :modifiers, only: [:create, :index]
      resource :session, only: [:create, :destroy]
      resources :companies, only: [:show]
  end

  root to: 'static_pages#root'
end
