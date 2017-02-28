require 'test_plugin_helper'

module ForemanVirtWhoConfigure
  class ConfigTest < ActiveSupport::TestCase
    let(:config) { FactoryGirl.build(:virt_who_config) }

    test 'config can be saved' do
      config.save
      assert_empty config.errors
      assert config.persisted?
    end

    describe 'config is created' do
      let(:existing_config) { config.save; config }

      test 'config creates service user upon creation' do
        assert existing_config.service_user
        assert_equal "virt_who_reporter_#{config.id}", existing_config.service_user.username
      end

      test 'config creates hidden user' do
        assert existing_config.service_user.user
        assert_equal existing_config.service_user.username, existing_config.service_user.user.login
        assert_kind_of ForemanVirtWhoConfigure::AuthSourceHiddenWithAuthentication, existing_config.service_user.user.auth_source
      end

      test 'config deletes service user and user upon removal' do
        service_user = existing_config.service_user
        user = service_user.user
        assert existing_config.destroy
        assert_raises ActiveRecord::RecordNotFound do
          service_user.reload
        end
        assert_raises ActiveRecord::RecordNotFound do
          user.reload
        end
      end
    end
  end
end
