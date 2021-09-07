module ForemanVirtWhoConfigure
  module Api
    module V2
      class ConfigsController < ::Api::V2::BaseController
        include ::Api::Version2
        include ForemanVirtWhoConfigure::Concerns::ConfigParameters if Foreman::Version.new.short >= '1.13'
        resource_description do
          api_version 'v2'
          api_base_url "/foreman_virt_who_configure/api/v2"
        end

        before_action :find_resource, :only => %w{show deploy_script update destroy}
        before_action :translate_filtering_mode, :only => %w{create update}

        api :GET, '/configs', N_("List of virt-who configurations")
        api :GET, "/organizations/:organization_id/configs", N_("List of virt-who configurations per organization")
        param_group :search_and_pagination, ::Api::V2::BaseController

        def index
          @configs = resource_scope_for_index
        end

        api :GET, "/configs/:id/", N_("Show a virt-who configuration")
        param :id, :identifier, :required => true

        def show
        end

        api :GET, "/configs/:id/deploy_script/", N_("Renders a deploy script for the specified virt-who configuration")
        param :id, :identifier, :required => true
        def deploy_script
          respond_to do |format|
            format.text { send_data @config.virt_who_bash_script, :filename => "deploy_virt_who_config_#{@config.id}.sh", :type => 'text/x-shellscript', :disposition => :attachment }
            format.sh { send_data @config.virt_who_bash_script, :filename => "deploy_virt_who_config_#{@config.id}.sh", :type => 'text/x-shellscript', :disposition => :attachment }
            format.json
          end
        end

        def_param_group :config do
          param :foreman_virt_who_configure_config, Hash, :required => true, :action_aware => true do
            param :name, String, :desc => N_("Configuration name"), :required => true
            param :interval, Config::AVAILABLE_INTERVALS.keys.map(&:to_i), :desc => N_("Configuration interval in minutes"), :required => true
            param :filtering_mode, Config::FILTERING_MODES.keys.map(&:to_i), :desc => N_("Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist") % { :unlimited => Config::UNLIMITED, :whitelist => Config::WHITELIST, :blacklist => Config::BLACKLIST }, :required => true
            param :whitelist, String, :desc => N_("Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma."), :required => false
            param :blacklist, String, :desc => N_("Hypervisor blacklist, applicable only when filtering mode is set to 2. Wildcards and regular expressions are supported, multiple records must be separated by comma."), :required => false
            param :filter_host_parents, String, :desc => N_("Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end."), :required => false
            param :exclude_host_parents, String, :desc => N_("Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end."), :required => false
            param :hypervisor_id, Config::HYPERVISOR_IDS, :desc => N_("Specifies how the hypervisor will be identified."), :required => true
            param :hypervisor_type, Config::HYPERVISOR_TYPES.keys, :desc => N_("Hypervisor type"), :required => true
            param :hypervisor_server, String, :desc => N_("Fully qualified host name or IP address of the hypervisor"), :required => true
            param :hypervisor_username, String, :desc => N_("Account name by which virt-who is to connect to the hypervisor."), :required => true
            param :hypervisor_password, String, :desc => N_("Hypervisor password, required for all hypervisor types except for libvirt"), :required => false
            param :satellite_url, String, :desc => N_("Foreman server FQDN"), :required => true
            param :debug, :bool, :desc => N_("Enable debugging output")
            param :http_proxy_id, Integer, :desc => N_('HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers.')
            param :no_proxy, String, :desc => N_("Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses.")
            param :organization_id, Integer, :required => true, :desc => N_("Organization of the virt-who configuration") if ::SETTINGS[:organizations_enabled]
            param :prism_flavor, Config::PRISM_FLAVORS.keys, :desc => N_("Select the Prism flavor you are connecting to"), :required => false
            param :ahv_update_interval, Integer, :desc => N_("The frequency of VM-to-host mapping updates for AHV(in seconds)"), :required => false
            param :ahv_internal_debug, :bool, :desc => N_("Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled"), :required => false
          end
        end

        api :POST, '/configs', N_("Create a virt-who configuration")
        param_group :config, :as => :create

        def create
          @config = Config.new(config_params)
          process_response @config.save
        end

        api :PUT, '/configs/:id', N_("Update a virt-who configuration")
        param :id, :number, :desc => N_("Configuration numeric identifier"), :required => true
        param_group :config

        def update
          process_response @config.update_attributes(config_params)
        end

        api :DELETE, '/configs/:id', N_("Delete a virt-who configuration")
        param :id, :number, :desc => N_("Configuration numeric identifier"), :required => true

        def destroy
          process_response @config.destroy
        end

        def apply_organization_filter(scope)
          scope.for_organization(Organization.current)
        end

        def resource_scope(*args)
          apply_organization_filter(super)
        end

        def resource_class
          ForemanVirtWhoConfigure::Config
        end

        protected

        def controller_permission
          'virt_who_config'
        end

        def action_permission
          case params[:action]
            when 'deploy_script'
              'view'
            else
              super
          end
        end

        private

        # compatibility layer for 1.11 - pre strong params patch
        def config_params
          if defined?(super)
            super
          else
            params[:foreman_virt_who_configure_config]
          end
        end

        def translate_filtering_mode
          mode = params[:foreman_virt_who_configure_config].delete(:filtering_mode)
          params[:foreman_virt_who_configure_config][:listing_mode] = mode if mode
        end

        def allowed_nested_id
          %w(organization_id)
        end
      end
    end
  end
end
