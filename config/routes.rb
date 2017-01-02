Rails.application.routes.draw do
  get 'new_action', to: 'foreman_virt_who_configure/hosts#new_action'
end
