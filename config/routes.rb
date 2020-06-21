Rails.application.routes.draw do
  devise_for :users

  namespace :rooms do
    resources :search, only: :index
  end


  root to: "homes#index"

  resources :homes, only: [:index] do
    collection do
      get "search"
    end
  end

  resources :rooms, only: [:index, :new, :create] do
     collection do
      get "category_search"
    end
  end

  resources :talks, only: [:index, :new, :create]

  resources :mypages, only: [:index] do
    collection do
      get "edit_user"
      put "updata_user"
      get "info"
    end
  end

  # resources :likes, only: [:create, :destroy]
  post "likes/:room_id/create", to: "likes#create", constraints: {room_id: /\d+/}, as: :likes_create
  post "likes/:room_id/delete", to: "likes#delete", constraints: {room_id: /\d+/}, as: :likes_delete


end
