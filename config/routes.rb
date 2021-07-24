Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # Send everything to React through the homes#index route
  root 'homes#index'
  get '/about', to:'homes#index'
  get '/news', to:'homes#index'
end
