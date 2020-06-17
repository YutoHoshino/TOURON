Rails.application.routes.draw do
  namespace :rooms do
    resources :search, only: :index
  end

  root to: "homes#index"
  resources :homes, only: [:index] 

  resources :rooms, only: [:new,:create] 


  resources :rooms, only: [:new, :create]

  # resources :likes, only: [:create, :destroy]
  post "likes/:room_id/create", to: "likes#create", constraints: {room_id: /\d+/}, as: :likes_create
  post "likes/:room_id/delete", to: "likes#delete", constraints: {room_id: /\d+/}, as: :likes_delete


end
