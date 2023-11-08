module SSO
  class BasicWithHidden < Basic
    def available?
      authentication = Rack::Auth::Basic::Request.new(controller.request.env)
      Thread.current[:service_user_login] =  authentication.provided? && authentication.basic? && authentication.credentials.first =~ /virt_who_reporter_\d+/ && controller.api_request? && controller.is_a?(::Katello::Api::Rhsm::CandlepinProxiesController)
    end

    def current_user
      User.unscoped.where(:auth_source_id => ForemanVirtWhoConfigure::AuthSourceHiddenWithAuthentication.default.id).find_by_login(user)
    end
  end
end
