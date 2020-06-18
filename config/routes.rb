Rails.application.routes.draw do
  devise_for :users
  root to: "homes#index"

  resources :rooms, only: [:index, :new, :create]
  
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


  # resources :likes, only: [:create, :destroy]
  post "likes/:room_id/create", to: "likes#create", constraints: {room_id: /\d+/}, as: :likes_create
  post "likes/:room_id/delete", to: "likes#delete", constraints: {room_id: /\d+/}, as: :likes_delete



  resources :rooms, only: [:new, :create]

  put 'users/follow/:user_id',to: 'users#follow'
  put 'users/unfollow/:user_id',to: 'users#unfollow'
  get 'users/follow_list/:user_id',to: 'users#follow_list'
  get 'users/follower_list/:user_id',to:'users#follower_list'

end
