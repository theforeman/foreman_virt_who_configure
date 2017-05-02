module ForemanVirtWhoConfigure
  module CompatibilityHelper
    extend ActiveSupport::Concern

    def new_config_link(options = {}, html_options = {})
      if ApplicationHelper.instance_methods.include?(:new_link)
        new_link(_("Create Config"), options, html_options)
      else
        display_link_if_authorized(_("New Config"), hash_for_new_foreman_virt_who_configure_config_path, html_options)
      end
    end

    def help_button_or_path
      if ApplicationHelper.instance_methods.include?(:help_button)
        # help_button does not support plugins
        link_to(_("Help"), { :action => "welcome" }, { :class => 'btn btn-default' })
      else
        help_path
      end
    end

    def inline_help_popover(message)
      version = Foreman::Version.new
      if version.major.to_i >= 1 && version.minor.to_i >= 15
        { :label_help => message.html_safe }
      else
        { :help_inline => popover('', message).html_safe }
      end
    end
  end
end
