module ForemanVirtWhoConfigure
  class AuthSourceHiddenWithAuthentication < ::AuthSourceHidden
    def authenticate(login, password)
      AuthSourceInternal.new.authenticate(login, password)
    end
  end
end
