Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations', sessions: 'users/sessions' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # Send everything to React through the homes#index route
  root 'homes#index'
  get '/home',               to: 'homes#index'
  get '/about',               to: 'homes#index'
  get '/news',                to: 'homes#index'
  get '/log_in',              to: 'homes#index'
  get '/sign_up',             to: 'homes#index'
  get '/order',               to: 'homes#index'
  get '/order_confirmation',  to: 'homes#index'
  
  resources :users, only: [:index]
  resources :addresses, only: [:create]
  resources :promotions, only: [:index]

  namespace :admin do
    resources :users, only: [:index, :show]
    resources :guests, only: [:show]
    resources :promotions
  end
end
