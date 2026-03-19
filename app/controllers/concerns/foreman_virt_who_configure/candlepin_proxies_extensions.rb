module ForemanVirtWhoConfigure
  module CandlepinProxiesExtensions
    extend ActiveSupport::Concern
    included do
      after_action :touch_virt_who_configs, only: [:get, :async_hypervisors_update, :hypervisors_heartbeat]
    end

    private

    # This intentionally also runs on async_hypervisors_update (POST), where the
    # Report dynflow action will also call virt_who_touch!. The double-touch is
    # harmless since both just set last_report_at to the current time.
    def touch_virt_who_configs
      return unless User.current&.login&.start_with?('virt_who_reporter_')
      service_user = ::ForemanVirtWhoConfigure::ServiceUser.find_by(:user_id => User.current.id)
      return unless service_user
      service_user.configs.each do |config|
        config.virt_who_touch!
      end
    end
  end
end
