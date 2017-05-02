module ForemanVirtWhoConfigure
  module Concerns
    module VirtWhoPingTracker
      extend ActiveSupport::Concern

      included do
        before_action :track_ping, :only => :server_status
      end

      private

      def track_ping
        username, password = Base64.decode64(request.headers['HTTP_AUTHORIZATION'].split(' ')[-1]).split(':')
        logger.debug "virt-who status ping received for user #{username}"
        if AuthSourceHiddenWithAuthentication.default.authenticate(username, password)
          if (user = User.unscoped.find_by_login(username))
            config = ::ForemanVirtWhoConfigure::Config.find_by_user(user)

            if config.present?
              logger.debug "found matching configuration with id #{config.id}"
              config.virt_who_touch!
            else
              logger.debug "matching configuration not found"
            end
          else
            logger.warn "user with username #{username} not found"
          end
        end
      end
    end
  end
end
