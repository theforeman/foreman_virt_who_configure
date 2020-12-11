require 'test_plugin_helper'

class ForemanVirtWhoConfigure::Api::V2::ConfigsControllerTest < ActionController::TestCase
  setup do
    @http_proxy = FactoryBot.create(:http_proxy, name: "test", url: "http://test.com")
    @new_config = FactoryBot.create(:virt_who_config,
                                 :name => 'my vmware',
                                 :interval => 120,
                                 :listing_mode => ForemanVirtWhoConfigure::Config::WHITELIST,
                                 :whitelist => 'a,b',
                                 :hypervisor_id => 'hostname',
                                 :hypervisor_type => 'esx',
                                 :hypervisor_server => "vmware.example.com",
                                 :hypervisor_username => "root",
                                 :debug => false,
                                 :satellite_url => "foreman.example.com",
                                 :http_proxy_id => @http_proxy.id,
                                 :no_proxy => nil
    )

    @out_of_date_config = FactoryBot.create(:virt_who_config, :out_of_date)
    @ok_config = FactoryBot.create(:virt_who_config, :ok)
  end

  test "should get index" do
    get :index, :params => {}, :session => set_session_user
    response = ActiveSupport::JSON.decode(@response.body)
    assert_not response['results'].empty?
    assert_response :success

    result_config = response['results'].find { |r| r['id'] == @new_config.id }
    refute_nil result_config
    assert_equal 'my vmware', result_config['name']
    assert_equal 120, result_config['interval']
    assert_equal ForemanVirtWhoConfigure::Config::WHITELIST, result_config['filtering_mode']
    assert_equal 'a,b', result_config['whitelist']
    assert_equal 'hostname', result_config['hypervisor_id']
    assert_equal 'esx', result_config['hypervisor_type']
    assert_equal 'vmware.example.com', result_config['hypervisor_server']
    assert_equal 'root', result_config['hypervisor_username']
    refute result_config.has_key?('hypervisor_password')
    refute result_config['debug']
    assert_not_nil result_config['debug']
    assert_equal 'foreman.example.com', result_config['satellite_url']
    assert_nil result_config['no_proxy']
    assert_equal 'unknown', result_config['status']
    assert_nil result_config['last_report_at']
    assert_nil result_config['out_of_date_at']

    result_config = response['results'].find { |r| r['id'] == @ok_config.id }
    assert_equal 'ok', result_config['status']
    assert_equal @ok_config.last_report_at.to_s, Time.zone.parse(result_config['last_report_at']).to_s
    assert_equal @ok_config.out_of_date_at.to_s, Time.zone.parse(result_config['out_of_date_at']).to_s

    result_config = response['results'].find { |r| r['id'] == @out_of_date_config.id }
    assert_equal 'out_of_date', result_config['status']
    assert_equal @out_of_date_config.last_report_at.to_s, Time.zone.parse(result_config['last_report_at']).to_s
    assert_equal @out_of_date_config.out_of_date_at.to_s, Time.zone.parse(result_config['out_of_date_at']).to_s
  end

  test "should get show for new config" do
    get :show, :params => { :id => @new_config.to_param }, :session => set_session_user
    response = ActiveSupport::JSON.decode(@response.body)

    assert_equal 'my vmware', response['name']
    assert_equal 120, response['interval']
    assert_equal ForemanVirtWhoConfigure::Config::WHITELIST, response['filtering_mode']
    assert_equal 'a,b', response['whitelist']
    assert_equal 'hostname', response['hypervisor_id']
    assert_equal 'esx', response['hypervisor_type']
    assert_equal 'vmware.example.com', response['hypervisor_server']
    assert_equal 'root', response['hypervisor_username']
    refute response.has_key?('hypervisor_password')
    refute response['debug']
    assert_not_nil response['debug']
    assert_equal 'foreman.example.com', response['satellite_url']
    assert_nil response['no_proxy']
    assert_equal 'unknown', response['status']
    assert_nil response['last_report_at']
    assert_nil response['out_of_date_at']
    assert_equal @http_proxy.id, response['http_proxy']['id']
    assert_equal @http_proxy.url, response['proxy']

    assert_response :success
  end

  test "should get show for ok config" do
    get :show, :params => { :id => @ok_config.to_param }, :session => set_session_user
    response = ActiveSupport::JSON.decode(@response.body)

    assert_equal 'ok', response['status']
    assert_equal @ok_config.last_report_at.to_s, Time.zone.parse(response['last_report_at']).to_s
    assert_equal @ok_config.out_of_date_at.to_s, Time.zone.parse(response['out_of_date_at']).to_s
    assert_response :success
  end

  test "should get show for out of date config" do
    get :show, :params => { :id => @out_of_date_config.to_param }, :session => set_session_user
    response = ActiveSupport::JSON.decode(@response.body)

    assert_equal 'out_of_date', response['status']
    assert_equal @out_of_date_config.last_report_at.to_s, Time.zone.parse(response['last_report_at']).to_s
    assert_equal @out_of_date_config.out_of_date_at.to_s, Time.zone.parse(response['out_of_date_at']).to_s
    assert_response :success
  end

  test "should get deploy script for config" do
    get :deploy_script, :params => { :id => @out_of_date_config.to_param }, :session => set_session_user
    response = ActiveSupport::JSON.decode(@response.body)

    assert_response :success
    assert_equal @out_of_date_config.virt_who_config_script(:bash_script), response['virt_who_config_script']
  end

  test "should get deploy script for plain/text format" do
    get :deploy_script, :params => { :id => @out_of_date_config.to_param }, :session => set_session_user, :format => :txt
    response = @response.body

    assert_response :success
    assert_equal @out_of_date_config.virt_who_config_script(:bash_script), response
  end

  test "should get deploy script for shell script format" do
    get :deploy_script, :params => { :id => @out_of_date_config.to_param }, :session => set_session_user, :format => :sh
    response = @response.body

    assert_response :success
    assert_equal @out_of_date_config.virt_who_config_script(:bash_script), response
  end

  test "should create the config" do
    org = FactoryBot.create(:organization)
    post :create, :params => { :foreman_virt_who_configure_config => { :name => 'my new config',
                                                            :interval => 240,
                                                            :filtering_mode => ForemanVirtWhoConfigure::Config::BLACKLIST,
                                                            :blacklist => ' a,b ',
                                                            :hypervisor_id => 'uuid',
                                                            :hypervisor_type => 'esx',
                                                            :hypervisor_server => "vmware.example.com",
                                                            :hypervisor_username => "root",
                                                            :hypervisor_password => "password",
                                                            :debug => true,
                                                            :satellite_url => "foreman.example.com",
                                                            :http_proxy_id => @http_proxy.id,
                                                            :organization_id => org.id }
    }, :session => set_session_user

    assert_response :success

    response = ActiveSupport::JSON.decode(@response.body)
    new_config = ForemanVirtWhoConfigure::Config.find(response['id'])

    assert_equal 'my new config', new_config.name
    assert_equal 240, new_config.interval
    assert_equal ForemanVirtWhoConfigure::Config::BLACKLIST, new_config.listing_mode
    assert_equal 'a,b', new_config.blacklist
    assert_equal 'uuid', new_config.hypervisor_id
    assert_equal 'vmware.example.com', new_config.hypervisor_server
    assert_equal 'root', new_config.hypervisor_username
    assert_equal 'password', new_config.hypervisor_password
    assert_equal true, new_config.debug
    assert_equal 'foreman.example.com', new_config.satellite_url
    assert_equal @http_proxy.id, response['http_proxy']['id']
  end

  test "should update the config" do
    put :update, :params => { :id => @ok_config.to_param, :foreman_virt_who_configure_config => { :name => 'updated', :interval => 240, :hypervisor_password => 'new_pass' } }, :session => set_session_user
    assert_response :success
    @ok_config.reload
    assert_equal 'updated', @ok_config.name
    assert_equal 240, @ok_config.interval
    assert_equal 'new_pass', @ok_config.hypervisor_password
  end

  test "should destroy the config" do
    delete :destroy, :params => { :id => @ok_config.to_param }, :session => set_session_user
    assert_response :success

    assert_empty ForemanVirtWhoConfigure::Config.where(:id => @ok_config.id).all
  end
end
