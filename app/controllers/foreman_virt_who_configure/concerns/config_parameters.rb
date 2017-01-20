module ForemanVirtWhoConfigure
  module Concerns
    module ConfigParameters
      extend ActiveSupport::Concern

      class_methods do
        def config_params_filter
          Foreman::ParameterFilter.new(::ForemanVirtWhoConfigure::Config).tap do |filter|
            filter.permit(*ForemanVirtWhoConfigure::Config::PERMITTED_PARAMS)
          end
        end
      end

      def config_params
        self.class.config_params_filter.filter_params(params, parameter_filter_context, 'foreman_virt_who_configure_config')
      end
    end
  end
end
