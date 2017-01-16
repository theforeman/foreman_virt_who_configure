module ForemanVirtWhoConfigure
  class OutputGenerator
    attr_reader :config

    def initialize(config)
      @config = config
    end

    def output
      <<EOS
[#{identifier}]
type=#{type}
hypervisor_id=#{hypervisor_id}
owner=#{owner}
env=Library
server=#{cr_server}
username=#{cr_username}
password=#{cr_password}
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
