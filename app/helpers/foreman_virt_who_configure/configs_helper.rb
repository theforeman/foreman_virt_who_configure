module ForemanVirtWhoConfigure
  module ConfigsHelper
    def hypervisor_server_help_data
      {
        'esx' => _('VMware vCenter server’s fully qualified host name or IP address.'),
        'rhevm' => _('Red Hat Virtualization Manager’s fully qualified host name or IP address. For example, https://hostname:443/ovirt-engine/ for v4, https://hostname_or_IP:443 for v3'),
        # 'vdsm' => 'Red Hat Enterprise Linux Hypervisor (vdsm)',
        'hyperv' => _('Microsoft Hyper-V fully qualified host name or IP address.'),
        'xen' => _('XenServer server’s fully qualified host name or IP address.'),
        'libvirt' => _('Libvirt server’s fully qualified host name or IP address.')
      }
    end

    def hypervisor_username_help_data
      {
        'esx' => _('Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/sysconfig/virt-who</code>, then <b>two</b> backslashes are required. For further details, see <a href="https://access.redhat.com/solutions/1270223">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information.'),
        'rhevm' => _('Account name by which virt-who is to connect to the Red Hat Enterprise Virtualization Manager instance. The username option requires input in the format username@domain.'),
        # 'vdsm' => '',
        'hyperv' => _('Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users.'),
        'xen' => _('Account name by which virt-who is to connect to the hypervisor.'),
        'libvirt' => _('Account name by which virt-who is to connect to the hypervisor.')
      }
    end
  end
end
