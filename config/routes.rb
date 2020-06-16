Rails.application.routes.draw do
  root to: "homes#index"
  resources :homes, only: [:index] do
    collection do
      get "search"
    end
  end

  resources :rooms, only:[:index] do
    collection do
      get "category_search"
    end
  end

  devise_for :users

  resources :talks, only: [:index, :new, :create]

  resources :mypages, only: [:index] do
    collection do
      get "edit_user"
      put "updata_user"
      get "info"
    end
  end

  resources :rooms, only: [:new, :create]
end
