module ForemanVirtWhoConfigure
  # Example: Plugin's HostsController inherits from Foreman's HostsController
  class HostsController < ::HostsController
    # change layout if needed
    # layout 'foreman_virt_who_configure/layouts/new_layout'

    def new_action
      # automatically renders view/foreman_virt_who_configure/hosts/new_action
    end
  end
end
