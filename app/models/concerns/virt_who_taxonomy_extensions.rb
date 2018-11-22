module VirtWhoTaxonomyExtensions
  extend ActiveSupport::Concern
  included do
    # the order is imporant here, around filter needs to disable audit creation, otherwise config deletion
    # creates audit during org deletion and creates foreign key issue, the relation must be defined later
    around_destroy :ignore_auditing_of_config
    has_many :configs, :dependent => :destroy, :class_name => 'ForemanVirtWhoConfigure::Config'

    def ignore_auditing_of_config
      ::ForemanVirtWhoConfigure::Config.without_auditing { yield }
    end
  end
end
