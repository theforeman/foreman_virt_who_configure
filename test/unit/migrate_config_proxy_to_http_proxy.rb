require 'test_plugin_helper'
require ForemanVirtWhoConfigure::Engine.root.join('db', 'migrate', '20200728054557_refer_config_proxy_to_http_proxy.rb')

module ForemanVirtWhoConfigure
  class MigrateConfigProxyToHttpProxy < ActiveSupport::TestCase
    let(:migration) { klass.new }

    def migration_has_been_run?(version)
      ActiveRecord::SchemaMigration.where(version: version).exists?
    end

    describe "up" do
      let(:config) { FactoryBot.build(:virt_who_config) }

      before do
        if migration_has_been_run?('20200728054557')
          migration.down
        end

        HttpProxy.delete_all
      end

      it "should create Http Proxy if already not exist" do
        config.proxy = "test.example.com"
        config.save!

        assert_difference('HttpProxy.count', 1) do
          migration.up
        end

        assert_equal "http://test.example.com", created_http_proxy.full_url
      end

      it "should create Http Proxy with user and password if already not exist" do
        config.proxy = "http://user:password@test.example.com"
        config.save!

        assert_difference('HttpProxy.count', 1) do
          migration.up
        end

        assert_equal "http://user:password@test.example.com", created_http_proxy.full_url
        assert_equal "user", created_http_proxy.username
        assert_equal "password", created_http_proxy.password
      end

      it "should not create Http Proxy for invalid config proxy if already not exist" do
        config.proxy = "test.example.com:5000"
        config.save!

        assert_difference('HttpProxy.count', 1) do
          migration.up
        end

        assert_equal "http://test.example.com:5000", created_http_proxy.full_url
      end

      it "should create Http Proxy with port for config proxy if already not exist" do
        config.proxy = "https://test.example.com:5000"
        config.save!

        assert_difference('HttpProxy.count', 1) do
          migration.up
        end

        assert_equal "https://test.example.com:5000", created_http_proxy.full_url
      end

      it "should refer to existed Http Proxy" do
        http_proxy = FactoryBot.create(:http_proxy, name: "test", url: "http://test.com")
        config.proxy = "http://test.com"
        config.save!

        assert_difference('HttpProxy.count', 0) do
          migration.up
        end

        assert_equal updated_config.http_proxy_id, http_proxy.id
      end

      it "should refer to existed IP address http proxy" do
        http_proxy = FactoryBot.create(:http_proxy, name: "test", url: "http://212.212.10.23")
        config.proxy = "212.212.10.23"
        config.save!

        assert_difference('HttpProxy.count', 0) do
          migration.up
        end

        assert_equal updated_config.http_proxy_id, http_proxy.id
      end

      it "should create new http proxy if user and password is present" do
        http_proxy = FactoryBot.create(:http_proxy, name: "test", url: "http://proxy.example.com", username: "admin", password: "pass")
        config.proxy = "http://proxy.example.com"
        config.save!

        assert_difference('HttpProxy.count', 1) do
          migration.up
        end

        assert_not_equal updated_config.http_proxy_id, http_proxy.id
        assert_equal updated_config.http_proxy_id, created_http_proxy.id
        assert_equal "http://proxy.example.com", created_http_proxy.full_url
      end

      it "refer to http proxy if user and password is present" do
        http_proxy = FactoryBot.create(:http_proxy, name: "test", url: "http://proxy.example.com", username: "admin", password: "pass")
        config.proxy = "http://admin:pass@proxy.example.com"
        config.save!

        assert_difference('HttpProxy.count', 0) do
          migration.up
        end

        assert_equal updated_config.http_proxy_id, http_proxy.id
      end

      it "should create new http proxy if port is there" do
        http_proxy = FactoryBot.create(:http_proxy, name: "test", url: "http://proxy.example.com:5000")
        config.proxy = "http://proxy.example.com"
        config.save!

        assert_difference('HttpProxy.count', 1) do
          migration.up
        end

        assert_not_equal updated_config.http_proxy_id, http_proxy.id
        assert_equal updated_config.http_proxy_id, created_http_proxy.id
        assert_equal "http://proxy.example.com", created_http_proxy.full_url
      end

      it "should refer to existed http proxy if port is there and config proxy has also same port" do
        http_proxy = FactoryBot.create(:http_proxy, name: "test", url: "http://proxy.example.com:5000")
        config.proxy = "http://proxy.example.com:5000"
        config.save!

        assert_difference('HttpProxy.count', 0) do
          migration.up
        end

        assert_equal updated_config.http_proxy_id, http_proxy.id
      end
    end

    def klass
      ReferConfigProxyToHttpProxy
    end

    def updated_config
      ::ForemanVirtWhoConfigure::Config.last
    end

    def created_http_proxy
      HttpProxy.order(:id).last
    end
  end
end
