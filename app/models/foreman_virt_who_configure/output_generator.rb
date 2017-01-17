module ForemanVirtWhoConfigure
  class OutputGenerator
    attr_reader :config

    def initialize(config)
      @config = config
    end

    def ready_for_virt_who_output?
      missing_virt_who_input_messages.empty?
    end

    def missing_virt_who_input_messages
      messages = []
      # messages.push _('Cofiguration not stored') unless config.persisted?
      messages.push _('Hypervisor id was not provided') unless config.hypervisor_id.present?
      messages.push _('Organization was not provided') unless config.organization_id.present?
      messages.push _('Compute resource was not provided') unless config.compute_resource_id.present?
      messages.push _('Service user was not provided') unless config.service_user_id.present?
      messages
    end

    def virt_who_output
<<EOS
a=virt-who-password
cat > /etc/virt-who.d/config. <<
[#{identifier}]
type=#{type}
hypervisor_id=#{hypervisor_id}
owner=#{owner}
env=Library
server=#{cr_server}
username=#{cr_username}
password=#{cr_password}
encrypted_password=$a
rhsm_hostname=#{satellite_url}
rhsm_username=#{service_user_username}
rhsm_password=#{service_user_password}
rhsm_prefix=/rhsm
EOS
    end

    def identifier
      "virt-who-config-#{config.id}"
    end

    def hypervisor_id
      config.hypervisor_id
    end

    def owner
      config.organization.name
    end

    def type
      case config.compute_resource
        when Foreman::Model::Libvirt
          'libvirt'
        when Foreman::Model::Vmware
          'esx'
        when Foreman::Model::Ovirt
          'rhevm'
        else
          raise 'unsupported compute resource type'
      end
    end

    # returns nil if url could not be parsed or is invalid, e.g. qemu:///system
    def cr_server
      uri = URI.parse(cr.url)
      if uri.hostname.present?
        uri.hostname
      else
        # if pure hostname without protocol was provided
        if uri.scheme.nil? && uri.path.present?
          uri.path
        end
      end
    rescue => e
      ::Foreman::Logging.exception('Unable to parse CR URL', e)
      nil
    end

    def cr_username
      cr.user
    end

    def cr_password
      cr.password
    end

    def satellite_url
      Setting.foreman_url
    end

    def service_user_username
      config.service_user.username
    end

    def service_user_password
      config.service_user.encrypted_password
    end

    def cr
      config.compute_resource
    end
  end
end
