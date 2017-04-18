Rails.application.routes.draw do
  namespace :foreman_virt_who_configure do
    resources :configs do
      collection do
        get 'auto_complete_search'
      end
    end

    namespace :api, :defaults => {:format => 'json'} do
      scope "(:apiv)", :module => :v2, :defaults => {:apiv => 'v2'}, :apiv => /v1|v2/, :constraints => ApiConstraints.new(:version => 2) do
        resources :configs do
          get :deploy_script, :on => :member
        end

        if SETTINGS[:organizations_enabled]
          resources :organizations, :except => [:new, :edit] do
            # scoped by organization
            resources :configs, :only => [:index, :show]
          end
        end
      end
    end
  end
end
