Rails.application.routes.draw do
  root to: "homes#index"
  resources :homes, only: [:index] do
    collection do
      get "search"
    end
  end

  resources :rooms, only:[:index]

  devise_for :users
  root to: "homes#index"

  resources :talks, only: [:index, :new, :create]

  resources :mypages, only: [:index]

  resources :rooms, only: [:new, :create]

  # resources :likes, only: [:create, :destroy]
  post "likes/:room_id/create", to: "likes#create", constraints: {room_id: /\d+/}, as: :likes_create
  post "likes/:room_id/delete", to: "likes#delete", constraints: {room_id: /\d+/}, as: :likes_delete

end
