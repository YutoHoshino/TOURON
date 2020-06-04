Rails.application.routes.draw do
  root to: "homes#index"

  resources :talks, only: [:index, :new, :create]
end
