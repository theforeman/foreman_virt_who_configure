module ForemanVirtWhoConfigure
  module ConfigsHelper
    def submit_or_cancel_config(form, overwrite = nil, args = { })
      args[:cancel_path] ||= send("#{controller_name}_path")
      content_tag(:div, :class => "clearfix") do
        content_tag(:div, :class => "form-actions") do
          text    = overwrite ? overwrite : _("Submit")
          options = {:class => "btn btn-primary"}
          options.merge! :'data-id' => form_to_submit_id(form) unless options.key?(:'data-id')
          previous = form.object.first_step? ? ' ' : previous_config_link(form)
          cancel_and_submit = content_tag(:div, :class => "pull-right") do
            link_to(_("Cancel"), args[:cancel_path], :class => "btn btn-default") + ' ' + form.submit(text, options)
          end
          (previous + cancel_and_submit).html_safe
        end
      end
    end

    def show_config_partial_wizard(step)
      @config.current_step == step ? '' : 'hidden'
    end

    def previous_config_link(form)
      previous = content_tag(:span, :class => 'glyphicon glyphicon-chevron-left') {}
      content_tag(:div, :class => 'pull-left') do
        link_to((previous).html_safe, '#', :class => 'btn btn-default', :onclick => "previous_step('#{@config.previous_step}')")
      end
    end
  end
end
