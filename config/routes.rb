Rails.application.routes.draw do
  
  resources :reviews, only: [:create, :update, :destroy]
  #resources :books, only: [:show, :create]
  resources :users, only: [:show, :create]

  post '/signup', to: 'users#create'
  get '/auth', to: "users#show"
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy' 

  get '/books/show', to: 'books#show'
  post '/books', to: 'books#create'

  get '/books/favorite', to: 'books#favorite'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
