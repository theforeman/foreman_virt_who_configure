module ForemanVirtWhoConfigure
  class AuthSourceHiddenWithAuthentication < ::AuthSourceHidden
    def self.default
      AuthSource.without_auditing do
        where(:name => 'HiddenWithAuthentication').first_or_create!
      end
    end

    def authenticate(login, password)
      AuthSourceInternal.new.authenticate(login, password)
    end
  end
end
