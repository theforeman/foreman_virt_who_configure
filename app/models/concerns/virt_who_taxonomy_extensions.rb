module VirtWhoTaxonomyExtensions
  extend ActiveSupport::Concern
  included do
    has_one :config, :dependent => :destroy, :class_name => 'ForemanVirtWhoConfigure::Config'
  end
end
