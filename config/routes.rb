Rails.application.routes.draw do
  devise_for :users
  root to: "homes#index"

  resources :rooms, only: [:index, :new, :create] do
    resources :talks, only: [:index, :create]
    namespace :api do
      resources :talks, only: [:index,:new], defaults: { format: 'json' }
    end
    collection do
      get "category_search"
    end
  end
  
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
      get "follow"
    end
  end

  resources :users, only: [:show]

  resources :relationships, only: [:create, :destroy]

  post "likes/:room_id/create", to: "likes#create", constraints: {room_id: /\d+/}, as: :likes_create
  post "likes/:room_id/delete", to: "likes#delete", constraints: {room_id: /\d+/}, as: :likes_delete

end
