module SSO
  class BasicWithHidden < Basic
    def available?
      controller.api_request? && http_auth_set? && controller.is_a?(Katello::Api::Rhsm::CandlepinProxiesController)
    end

    def current_user
      User.unscoped.where(:auth_source_id => ForemanVirtWhoConfigure::AuthSourceHiddenWithAuthentication.default.id).find_by_login(self.user)
    end
  end
end
