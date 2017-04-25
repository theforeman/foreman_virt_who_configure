module ForemanVirtWhoConfigure
  class AuthSourceHiddenWithAuthentication < ::AuthSourceHidden
    def self.default
      AuthSource.without_auditing do
        where(:name => 'HiddenWithAuthentication').first_or_create!
      end
    end

    def auth_method_name
      "HIDDEN with API access"
    end
    alias_method :to_label, :auth_method_name

    def authenticate(login, password)
      # the authentication should only happen if our SSO signals that it's available
      # we need to reset the signal since for non API calls the SSO is not used at all and does not set signal to false
      result = Thread.current[:service_user_login] ? AuthSourceInternal.new.authenticate(login, password) : false
      Thread.current[:service_user_login] = nil
      result
    end
  end
end
