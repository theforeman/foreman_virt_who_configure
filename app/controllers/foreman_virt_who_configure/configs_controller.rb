module ForemanVirtWhoConfigure
  class ConfigsController < ::ForemanVirtWhoConfigure::ApplicationController
    include Foreman::Controller::AutoCompleteSearch
    include ForemanVirtWhoConfigure::Concerns::ConfigParameters if defined?(Foreman::ParameterFilter)
    before_action :find_resource, :only => [:edit, :update, :destroy]

    def index
      if respond_to?(:resource_base_search_and_page)
        @configs = resource_base_search_and_page
      else
        base = resource_base.search_for(params[:search], :order => params[:order])
        @configs = base.paginate(:page => params[:page], :per_page => params[:per_page])
      end
    end

    def new
      @config = Config.new
    end

    def create
      @config = Config.new(config_params)
      if @config.save
        process_success :object => @config
      else
        process_error :object => @config
      end
    end

    def edit
    end

    def update
      if @config.update_attributes(config_params)
        process_success :object => @config
      else
        process_error :object => @config
      end
    end

    def destroy
      if @config.destroy
        process_success :object => @config
      else
        process_error :object => @config
      end
    end

    def auto_complete_controller_name
      'foreman_virt_who_configure_configs'
    end

    def controller_name
      # require 'pry-remote'
      # binding.remote_pry
      'foreman_virt_who_configure_configs'
    end
  end
end
