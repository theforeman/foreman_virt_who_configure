require 'test_plugin_helper'

class CandlepinProxiesExtensionsTest < ActiveSupport::TestCase
  class FakeController < ActionController::Base
    include ForemanVirtWhoConfigure::CandlepinProxiesExtensions
    # expose private method for testing
    public :touch_virt_who_configs
  end

  let(:controller) { FakeController.new }

  describe 'callback registration' do
    test 'after_action callback is registered' do
      callbacks = FakeController._process_action_callbacks.select { |cb| cb.kind == :after }
      assert callbacks.any? { |cb| cb.filter == :touch_virt_who_configs }
    end

  end

  describe 'touch_virt_who_configs' do
    test 'does nothing when no user is logged in' do
      User.current = nil
      assert_nothing_raised { controller.touch_virt_who_configs }
    end

    test 'does nothing for non-service users' do
      User.current = FactoryBot.create(:user)
      assert_nothing_raised { controller.touch_virt_who_configs }
    end

    test 'touches configs for a virt-who service user' do
      config = FactoryBot.create(:virt_who_config, :out_of_date)
      service_user = config.service_user
      User.current = service_user.user

      assert config.out_of_date?

      controller.touch_virt_who_configs

      config.reload
      refute config.out_of_date?
      assert config.last_report_at > 1.minute.ago
      assert_equal config.out_of_date_at, config.last_report_at + config.interval.minutes
    end

    test 'touches all configs for the service user' do
      config1 = FactoryBot.create(:virt_who_config, :out_of_date)
      config2 = FactoryBot.create(:virt_who_config, :out_of_date, organization: config1.organization)
      service_user = config1.service_user
      User.current = service_user.user

      # verify both configs share the same service user
      assert_equal service_user, config2.reload.service_user

      assert config1.out_of_date?
      assert config2.out_of_date?

      controller.touch_virt_who_configs

      refute config1.reload.out_of_date?
      refute config2.reload.out_of_date?
    end
  end
end
