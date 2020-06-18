require 'test_plugin_helper'

module ForemanVirtWhoConfigure
  class ConfigTest < ActiveSupport::TestCase
    let(:config) { FactoryBot.build(:virt_who_config) }

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
        assert_equal "http", existing_config.proxy_type
      end

      test 'creates https proxy config' do
        existing_config.https!
        assert_equal "https", existing_config.proxy_type
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

    describe 'listing mode' do
      test 'whitelisting mode requires blacklist to be set' do
        config.listing_mode = ForemanVirtWhoConfigure::Config::WHITELIST
        refute config.valid?
        assert_includes config.errors.keys, :whitelist

        config.whitelist = 'a.host'
        assert config.valid?
      end

      test 'blacklisting mode requires blacklist to be set' do
        config.listing_mode = ForemanVirtWhoConfigure::Config::BLACKLIST
        refute config.valid?
        assert_includes config.errors.keys, :blacklist

        config.blacklist = 'a.host'
        assert config.valid?
      end

      test 'whitelisting accepts regular expressions' do
        config.whitelist = '^some.*'
        assert config.valid?
      end
    end

    describe 'organization scoping' do
      let(:another_org) { FactoryBot.create(:organization) }
      let(:config_1) { FactoryBot.create(:virt_who_config) }
      let(:config_2) { FactoryBot.create(:virt_who_config, :organization => another_org) }

      before do
        # let is lazy
        preload = config_1, config_2
      end

      test '.for_organization does not scope on any organization for nil' do
        # useful for just passing Organization.current which can be nil
        assert_includes ForemanVirtWhoConfigure::Config.for_organization(nil), config_1
        assert_includes ForemanVirtWhoConfigure::Config.for_organization(nil), config_2
      end

      test '.for_organization scoped to specified organization' do
        assert_includes ForemanVirtWhoConfigure::Config.for_organization(another_org), config_2
        refute_includes ForemanVirtWhoConfigure::Config.for_organization(another_org), config_1
      end

    end

    describe 'statuses and expiration' do
      let(:out_of_date_config) { FactoryBot.create(:virt_who_config, :out_of_date) }
      let(:ok_config) { FactoryBot.create(:virt_who_config, :ok) }
      let(:unknown_config) { FactoryBot.create(:virt_who_config) }
      before do
        # let is lazy
        preload = out_of_date_config, ok_config, unknown_config
      end

      test 'scoped search definitions work correctly' do
        assert_equal [ok_config], ForemanVirtWhoConfigure::Config.search_for('status = ok')
        assert_equal [out_of_date_config], ForemanVirtWhoConfigure::Config.search_for('status = out_of_date')
        assert_equal [unknown_config], ForemanVirtWhoConfigure::Config.search_for('status = unknown')
      end

      test '.out_of_date scope lists only out_of_date configs' do
        assert_includes ForemanVirtWhoConfigure::Config.out_of_date, out_of_date_config
        assert_not_includes ForemanVirtWhoConfigure::Config.out_of_date, ok_config
        assert_not_includes ForemanVirtWhoConfigure::Config.out_of_date, unknown_config
      end

      test '#out_of_date?' do
        assert out_of_date_config.out_of_date?
        refute ok_config.out_of_date?
        refute unknown_config.out_of_date?
      end

      test '#virt_who_touch! sets last_report_at to now' do
        now = DateTime.now.utc
        unknown_config.virt_who_touch!
        assert now <= unknown_config.last_report_at
      end

      test '#virt_who_touch! makes out_of_date config ok again' do
        out_of_date_config.virt_who_touch!
        refute out_of_date_config.out_of_date?
      end

      test '#virt_who_touch! sets out_of_date_at based on interval and last_report_at' do
        out_of_date_config.virt_who_touch!
        assert_equal out_of_date_config.out_of_date_at, out_of_date_config.last_report_at + out_of_date_config.interval.minutes
      end

      test '#status returns the symbol representing the current status' do
        assert_equal :ok, ok_config.status
        assert_equal :out_of_date, out_of_date_config.status
        assert_equal :unknown, unknown_config.status
      end

      test '#status description returns string describing the status' do
        assert_kind_of String, ok_config.status_description
        assert_kind_of String, out_of_date_config.status_description
        assert_kind_of String, unknown_config.status_description
      end
    end
  end
end
