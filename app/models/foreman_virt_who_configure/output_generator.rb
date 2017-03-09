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
encrypted_password=$cr_password#{filtering}
rhsm_hostname=#{satellite_url}
rhsm_username=#{service_user_username}
rhsm_encrypted_password=$user_password
rhsm_prefix=/rhsm
EOF

echo "Creating sysconfig virt-who configuration.."
cat > /etc/sysconfig/virt-who << EOF
VIRTWHO_SATELLITE6=1
VIRTWHO_DEBUG=#{config.debug? ? 1 : 0}
VIRTWHO_INTERVAL=#{config.interval * 60}
EOF

echo "Enabling and restarting the virt-who service"
chkconfig virt-who on
service virt-who restart

echo "Done."
EOS
    end

    def filtering
      case config.listing_mode.to_i
        when ForemanVirtWhoConfigure::Config::UNLIMITED
          return ''
        when ForemanVirtWhoConfigure::Config::WHITELIST
          return filtering_line_sanitized('filter_hosts', config.whitelist)
        when ForemanVirtWhoConfigure::Config::BLACKLIST
          return filtering_line_sanitized('exclude_hosts', config.blacklist)
      end
    end

    def filtering_line_sanitized(filter, list)
      "\n" + filter + '=' + sanitize_filter(list.to_s)
    end

    def sanitize_filter(list)
      list.tr("\r\n", '').strip.chomp(",")
    end

    def config_file_path
      "/etc/virt-who.d/#{identifier}.conf"
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
