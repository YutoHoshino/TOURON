Rails.application.routes.draw do
  devise_for :users
  root to: "homes#index"

  resources :rooms, only: [:index, :new, :create] do
     collection do
      get "category_search"
    end
  end
  
  resources :talks, only: [:index, :new, :create]

  resources :homes, only: [:index] do
    collection do
      get "search"
    end
  end

  resources :mypages, only: [:index] do
    collection do
      get "edit_user"
      put "updata_user"
      get "info"
    end
  end

  
end
