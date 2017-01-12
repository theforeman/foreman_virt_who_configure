module ForemanVirtWhoConfigure
  module CompatibilityHelper
    extend ActiveSupport::Concern

    def new_config_link(options = {}, html_options = {})
      if respond_to?(:new_link)
        new_link(_("New Config"), options, html_options)
      else
        display_link_if_authorized(_("New Config"), hash_for_new_foreman_virt_who_configure_config_path, html_options)
      end
    end

    def help_button_or_path
      if respond_to?(:help_button)
        help_button
      else
        help_path
      end
    end
  end
end
