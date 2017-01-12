Rails.application.routes.draw do
  namespace :foreman_virt_who_configure do
    resources :configs
  end
end
