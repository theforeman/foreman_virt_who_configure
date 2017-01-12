module ForemanVirtWhoConfigure
  class ApplicationController < ::ApplicationController
    def resource_class
      self.class.to_s.sub(/Controller$/, '').singularize.constantize
    end

    def resource_name
      'config'
    end
  end
end
