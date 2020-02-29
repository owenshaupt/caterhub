Rails.application.routes.draw do
  namespace :api do
    get 'modifiers/create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show]
      resources :menu_items, only: [:create, :edit, :destroy, :show, :index] do
        collection do
          get 'filter'
          # URI pattern is: /api/items/:action/:query

          # An incoming path of /photos/show/1?user_id=2 will be dispatched to the
          # show action of the Photos controller. params will be
          # { :controller => “photos”, :action => “show”, :id => “1”, :user_id => “2” }.
        end
      end
      resources :modifiers, only: [:create, :index, :destroy, :show]
      resources :orders, only: [:create, :edit, :index, :destroy, :show]
      resource :session, only: [:create, :destroy]
      resources :companies, only: [:show]
  end

  root to: 'static_pages#root'
end
