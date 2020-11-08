Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :users, only: %i[show create update matches]
      resources :courses, only: %i[index]
      resources :skills, only: %i[index]
    end
  end
end
