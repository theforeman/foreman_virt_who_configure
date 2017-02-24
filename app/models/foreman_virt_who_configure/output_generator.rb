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
      messages.push _('Owner was not provided') unless config.organization_id?
      messages.push _('Interval was not provided') unless config.interval.present?
      # messages.push _('Cofiguration not stored') unless config.persisted?
      # messages.push _('Service user was not provided') unless config.service_user_id.present?
      messages
    end

    def virt_who_output
<<EOS
echo "Installing virt-who.."
yum install -y virt-who
echo "Encrypting password.."
cr_password=`virt-who-password --password "#{cr_password}" 2> /dev/null`
user_password=`virt-who-password --password "#{service_user_password}" 2> /dev/null`

echo "Creating virt-who configuration.."
cat > #{config_file_path} << EOF
[#{identifier}]
type=#{type}
hypervisor_id=#{hypervisor_id}
owner=#{owner}
env=Library
server=#{cr_server}
username=#{cr_username}
encrypted_password=$cr_password
rhsm_hostname=#{satellite_url}
rhsm_username=#{service_user_username}
rhsm_encrypted_password=$user_password
rhsm_prefix=/rhsm
EOF

echo "Creating cronjob entry.."
cat > /etc/cron.d/virt-who-config-#{identifier} << EOF
#{cron_line}
EOF

echo "Done."
EOS
    end

    def cron_line
      "#{interval_minute} #{interval_hour} * * * virt-who #{virt_who_arguments}"
    end

    def config_file_path
      "/etc/virt-who.d/#{identifier}.conf"
    end

    def virt_who_arguments
      args = "--one-shot "
      args << "--debug " if config.debug?
      args << "--config=#{config_file_path} "
      args
    end

    def interval_hour
      if config.interval <= 60
        "*"
      elsif config.interval % 60 == 0
        "*/#{config.interval / 60}"
      else
        raise 'unsupporter hour granularity'
      end
    end

    def interval_minute
      if config.interval < 60
        "*/#{config.interval}"
      elsif config.interval % 60
        "0" # potentially generate and save random number to avoid collisions with other reporters
      else
        raise 'unsupported minute granularity'
      end
    end

    def identifier
      "virt-who-config-#{config.id}"
    end

    def hypervisor_id
      config.hypervisor_id
    end

    def owner
      config.organization.label
    end

    def type
      config.hypervisor_type
    end

    # returns nil if url could not be parsed or is invalid, e.g. qemu:///system
    def cr_server
      config.hypervisor_server
    end

    def cr_username
      config.hypervisor_username
    end

    def cr_password
      config.hypervisor_password
    end

    def satellite_url
      config.satellite_url
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
