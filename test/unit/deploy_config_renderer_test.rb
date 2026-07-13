require 'test_plugin_helper'

module ForemanVirtWhoConfigure
  class DeployConfigRendererTest < ActiveSupport::TestCase
    let(:config) { FactoryBot.create(:virt_who_config) }
    let(:data) { DeployConfigRenderer.new(config).to_h }

    test 'identifier matches the stored config' do
      assert_equal "virt-who-config-#{config.id}", data['identifier']
    end

    test 'esx config requires the hypervisor password and embeds ansible placeholders' do
      assert data['needs_hypervisor_password']
      assert_equal config.hypervisor_password, data['hypervisor_password']
      assert_includes data['config_content'], 'encrypted_password={{ __virt_who_cr_encrypted_password.stdout }}'
      assert_includes data['config_content'], 'rhsm_encrypted_password={{ __virt_who_service_user_encrypted_password.stdout }}'
    end

    test 'config content includes connection and owner details for esx' do
      assert_includes data['config_content'], 'type=esx'
      assert_includes data['config_content'], "server=#{config.hypervisor_server}"
      assert_includes data['config_content'], "username=#{config.hypervisor_username}"
      assert_includes data['config_content'], "owner=#{config.organization.label}"
    end

    test 'libvirt config skips hypervisor password encryption but keeps connection details' do
      config.hypervisor_type = 'libvirt'
      refute data['needs_hypervisor_password']
      assert_nil data['hypervisor_password']
      refute_includes data['config_content'], 'encrypted_password={{ __virt_who_cr_encrypted_password'
      assert_includes data['config_content'], "server=#{config.hypervisor_server}"
    end

    test 'kubevirt config omits server/username and writes kubeconfig' do
      config.hypervisor_type = 'kubevirt'
      config.kubeconfig_path = '/root/kubeconfig'
      refute data['needs_hypervisor_password']
      refute_includes data['config_content'], "server=#{config.hypervisor_server}"
      refute_includes data['config_content'], "username=#{config.hypervisor_username}"
      assert_includes data['config_content'], 'kubeconfig=/root/kubeconfig'
    end

    test 'whitelist filtering is included in the config content' do
      config.listing_mode = Config::WHITELIST
      config.whitelist = 'a.host'
      assert_includes data['config_content'], 'filter_hosts=a.host'
    end

    test 'blacklist filtering is included in the config content' do
      config.listing_mode = Config::BLACKLIST
      config.blacklist = 'a.host'
      assert_includes data['config_content'], 'exclude_hosts=a.host'
    end

    test 'sysconfig reflects interval in seconds and the debug flag' do
      config.interval = 120
      config.debug = true
      assert_includes data['sysconfig_content'], '[global]'
      assert_includes data['sysconfig_content'], 'interval=7200'
      assert_includes data['sysconfig_content'], 'debug=1'
    end

    test 'ahv options are rendered' do
      config.hypervisor_type = 'ahv'
      config.prism_flavor = 'central'
      assert_includes data['config_content'], 'prism_central=true'
    end

    test 'no_proxy is written into the sysconfig' do
      config.no_proxy = 'example.com'
      assert_includes data['sysconfig_content'], 'no_proxy=example.com'
    end
  end
end
