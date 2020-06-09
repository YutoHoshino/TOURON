Rails.application.routes.draw do

  devise_for :users
  root to: "rooms#index"

  resources :talks, only: [:index, :new, :create]

  resources :mypages, only: [:index]

  resources :rooms, only: [:new, :create]
end
