module ForemanVirtWhoConfigure
  class Cleaner
    def clean_up!
      User.as_anonymous_admin do
        remove_configurations
        remove_hidden_auth_sources
      end
    end

    private

    def remove_hidden_auth_sources
      AuthSourceHiddenWithAuthentication.destroy_all
    end

    # also removes service users
    def remove_configurations
      Config.destroy_all
    end
  end
end
