Rails.application.routes.draw do
  namespace :rooms do
    resources :search, only: :index
  end

  root to: "homes#index"
  resources :homes, only: [:index] 

  resources :rooms, only: [:new,:create] 

  devise_for :users
  root to: "homes#index"

  resources :talks, only: [:index, :new, :create]

  resources :mypages, only: [:index]

  resources :rooms, only: [:new, :create]
end
