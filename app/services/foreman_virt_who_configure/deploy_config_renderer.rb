module ForemanVirtWhoConfigure
  # Builds the content the "Deploy virt-who Config - Ansible Default" job template renders
  # from a stored Config. It reuses OutputGenerator so the per-config and global
  # configuration files stay identical to the manually deployed bash script; the
  # only difference is that the passwords are encrypted on the target host by
  # Ansible tasks, so we embed Ansible fact placeholders instead of shell vars.
  class DeployConfigRenderer
    CR_PASSWORD_PLACEHOLDER = '{{ __virt_who_cr_encrypted_password.stdout }}'.freeze
    USER_PASSWORD_PLACEHOLDER = '{{ __virt_who_service_user_encrypted_password.stdout }}'.freeze

    FILE_HEADER = [
      '### This configuration file is managed via the virt-who configure plugin',
      '### manual edits will be deleted.',
    ].freeze

    def initialize(config)
      @config = config
      @generator = OutputGenerator.new(config)
    end

    # Plain Hash (string keys) consumed by the job template. Every value is a
    # String, boolean or nil so it renders safely in the safe-mode renderer.
    def to_h
      {
        'identifier' => @generator.identifier,
        'needs_hypervisor_password' => needs_hypervisor_password?,
        'hypervisor_password' => needs_hypervisor_password? ? @config.hypervisor_password.to_s : nil,
        'service_user_password' => @generator.service_user_password.to_s,
        'config_content' => config_content,
        'sysconfig_content' => sysconfig_content,
      }
    end

    private

    def needs_hypervisor_password?
      !%w[kubevirt libvirt].include?(@config.hypervisor_type)
    end

    def config_content
      lines = FILE_HEADER.dup
      lines << "[#{@generator.identifier}]"
      lines << "type=#{@config.hypervisor_type}"
      lines << "hypervisor_id=#{@config.hypervisor_id}"
      lines << "owner=#{@generator.owner}"

      unless @config.hypervisor_type == 'kubevirt'
        lines << "server=#{@config.hypervisor_server}"
        lines << "username=#{@config.hypervisor_username}"
      end
      lines << "encrypted_password=#{CR_PASSWORD_PLACEHOLDER}" if needs_hypervisor_password?

      append_block(lines, @generator.filtering)

      lines << "rhsm_hostname=#{@generator.satellite_url}"
      lines << "rhsm_username=#{@generator.service_user_username}"
      lines << "rhsm_encrypted_password=#{USER_PASSWORD_PLACEHOLDER}"
      lines << 'rhsm_prefix=/rhsm'

      lines << "kubeconfig=#{@config.kubeconfig_path}" if @config.hypervisor_type == 'kubevirt'
      append_block(lines, @generator.ahv_config_options)

      join(lines)
    end

    def sysconfig_content
      lines = FILE_HEADER.dup
      lines << '[global]'
      lines << "debug=#{@config.debug? ? 1 : 0}"
      lines << "interval=#{@config.interval * 60}"
      lines << 'oneshot=False'
      lines << ''
      lines << '[system_environment]'
      append_block(lines, @generator.proxy_strings)
      join(lines)
    end

    # OutputGenerator returns the optional sections as a single string with a
    # leading newline per directive (e.g. "\nfilter_hosts=a"); split them back
    # into our line array.
    def append_block(lines, block)
      block = block.to_s
      return if block.empty?
      lines.concat(block.split("\n").reject(&:empty?))
    end

    def join(lines)
      lines.join("\n") + "\n"
    end
  end
end
