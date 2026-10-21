module ForemanVirtWhoConfigure
  module TemplateRendererHelper
    # Looks up a stored virt-who Config (scoped to what the current user may
    # view) and returns the data the "Deploy virt-who Config - Ansible Default" job template needs.
    def virt_who_deploy_config(config_id)
      config = ForemanVirtWhoConfigure::Config.authorized(:view_virt_who_config).find(config_id)
      ForemanVirtWhoConfigure::DeployConfigRenderer.new(config).to_h
    end
  end
end
