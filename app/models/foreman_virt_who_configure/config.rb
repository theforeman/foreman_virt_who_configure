module ForemanVirtWhoConfigure
  class Config < ActiveRecord::Base
    include Authorizable
    audited
    validates_lengths_from_database

    UNLIMITED = 0
    WHITELIST = 1
    BLACKLIST = 2

    WIZARD_STEPS = {
      'general_information' => _('General information'),
      'schedule' => _('Schedule'),
      'connection' => _('Connection'),
      'configure' => _('Configure')
    }

    belongs_to :compute_resource
    belongs_to :organization

    # service user used by virt-who to report back
    belongs_to :service_user

    scoped_search :on => :interval, :complete_value => true
    # TODO add more related objects and attributes

    # compatibility layer for 1.11 - pre strong params patch
    if self.respond_to?(:attr_accessible)
      attr_accessible :compute_resource_id, :organization_id, :interval, :current_step
    end

    attr_writer :current_step

    def title
      compute_resource.name if compute_resource
    end

    # TODO convert to hours if needed
    def humanized_interval
      _("every %s minutes") % self.interval
    end

    def step_to_i(step_name)
      steps.index(step_name) + 1
    end

    def steps
      WIZARD_STEPS.keys
    end

    def current_step
      @current_step || steps.first
    end

    def previous_step
      steps[steps.index(current_step) - 1]
    end

    def next_step
      steps[steps.index(current_step) + 1]
    end

    def rewind_step
      @current_step = previous_step
    end

    def first_step?
      current_step == steps.first
    end

    def last_step?
      current_step == steps.last
    end

    def step_index
      wizard_completed? ? steps.index(steps.last) : steps.index(current_step) + 1
    end

    def wizard_completed?
      new_record? && current_step.blank?
    end
  end
end
