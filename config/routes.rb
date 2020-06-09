Rails.application.routes.draw do
  root to: "homes#index"
  resources :homes, only: [:index] do
    collection do
      get "search"
    end
  end

  resources :rooms, only:[:index]

  resources :talks, only: [:index, :new, :create]
end
