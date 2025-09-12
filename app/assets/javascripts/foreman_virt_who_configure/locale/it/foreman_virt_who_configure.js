 locales['foreman_virt_who_configure'] = locales['foreman_virt_who_configure'] || {}; locales['foreman_virt_who_configure']['it'] = {
  "domain": "foreman_virt_who_configure",
  "locale_data": {
    "foreman_virt_who_configure": {
      "": {
        "Project-Id-Version": "foreman_virt_who_configure 0.5.26",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2017-05-03 11:59+0000",
        "Last-Translator": "Bryan Kearney <bryan.kearney@gmail.com>, 2023",
        "Language-Team": "Italian (https://app.transifex.com/foreman/teams/114/it/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "it",
        "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;",
        "lang": "it",
        "domain": "foreman_virt_who_configure",
        "plural_forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;"
      },
      "1. Copy this configuration script to a safe directory.": [
        ""
      ],
      "2. Make the script executable and run it.": [
        ""
      ],
      "3. Delete the script.": [
        ""
      ],
      "A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses.": [
        ""
      ],
      "A plugin to make virt-who configuration easy": [
        ""
      ],
      "Account name by which virt-who is to connect to Nutanix AHV.": [
        ""
      ],
      "Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\\\\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information.": [
        ""
      ],
      "Account name by which virt-who is to connect to the hypervisor.": [
        ""
      ],
      "Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users.": [
        ""
      ],
      "Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information.": [
        ""
      ],
      "Account password by which virt-who is to connect to the hypervisor instance.": [
        ""
      ],
      "Actions": [
        "Azioni"
      ],
      "Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Blacklist": [
        ""
      ],
      "Configs": [
        "Config"
      ],
      "Configuration Status": [
        ""
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details": [
        ""
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details.": [
        ""
      ],
      "Configuration interval in minutes": [
        ""
      ],
      "Configuration name": [
        ""
      ],
      "Configuration numeric identifier": [
        ""
      ],
      "Configuration script: ": [
        ""
      ],
      "Config|Interval": [
        ""
      ],
      "Config|Last Report": [
        ""
      ],
      "Config|Name": [
        ""
      ],
      "Connection": [
        "Connessione"
      ],
      "Container-native virtualization’s fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token.": [
        ""
      ],
      "Copy to clipboard": [
        ""
      ],
      "Count": [
        "Conteggio"
      ],
      "Create Config": [
        ""
      ],
      "Create a virt-who configuration": [
        ""
      ],
      "Delete a virt-who configuration": [
        ""
      ],
      "Delete virt-who configuration %s?": [
        ""
      ],
      "Deploy": [
        ""
      ],
      "Details": [
        "Dettagli"
      ],
      "Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        ""
      ],
      "Download the script": [
        ""
      ],
      "Edit": [
        "Modifica"
      ],
      "Edit Virt-who Config": [
        ""
      ],
      "Enable AHV debug": [
        ""
      ],
      "Enable debugging output": [
        ""
      ],
      "Enable debugging output?": [
        ""
      ],
      "Every 12 hours": [
        ""
      ],
      "Every 2 days": [
        ""
      ],
      "Every 2 hours": [
        ""
      ],
      "Every 24 hours": [
        ""
      ],
      "Every 3 days": [
        ""
      ],
      "Every 4 hours": [
        ""
      ],
      "Every 8 hours": [
        ""
      ],
      "Every hour": [
        ""
      ],
      "Exclude Hosts": [
        ""
      ],
      "Exclude host parents": [
        ""
      ],
      "Exclude hosts": [
        ""
      ],
      "Exclude hosts which cluster ID is specified in comma-separated list in this option will <b>NOT</b> be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Filter Hosts": [
        ""
      ],
      "Filter host parents": [
        ""
      ],
      "Filter hosts": [
        ""
      ],
      "Filtering": [
        ""
      ],
      "Foreman server FQDN": [
        ""
      ],
      "Foreman server’s fully-qualified host name, for example: foreman.example.com": [
        ""
      ],
      "Fully qualified host name or IP address of the hypervisor": [
        ""
      ],
      "General information": [
        ""
      ],
      "HTTP Proxy": [
        ""
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers.": [
        ""
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used.": [
        ""
      ],
      "Hammer command: ": [
        ""
      ],
      "Help": [
        "Aiuto"
      ],
      "Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        ""
      ],
      "Hypervisor ID": [
        ""
      ],
      "Hypervisor Password": [
        ""
      ],
      "Hypervisor Server": [
        ""
      ],
      "Hypervisor Type": [
        ""
      ],
      "Hypervisor Username": [
        ""
      ],
      "Hypervisor blacklist, applicable only when filtering mode is set to 2. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        ""
      ],
      "Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist": [
        ""
      ],
      "Hypervisor password, required for all hypervisor types except for libvirt/kubevirt.": [
        ""
      ],
      "Hypervisor type": [
        ""
      ],
      "Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        ""
      ],
      "If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-who’s access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent.": [
        ""
      ],
      "Ignore Proxy": [
        ""
      ],
      "Ignore proxy": [
        ""
      ],
      "Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses.": [
        ""
      ],
      "Interval": [
        "Intervallo"
      ],
      "Interval was not provided": [
        ""
      ],
      "Latest Configurations Without Change": [
        ""
      ],
      "Libvirt server’s fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. Make sure you setup root's SSH key on target host for a user specified at hypervisor username field": [
        ""
      ],
      "List of virt-who configurations": [
        ""
      ],
      "List of virt-who configurations per organization": [
        ""
      ],
      "Microsoft Hyper-V fully qualified host name or IP address.": [
        ""
      ],
      "Name": [
        "Nome"
      ],
      "Name of this configuration, e.g. the name of the hypervisor": [
        ""
      ],
      "New Config": [
        ""
      ],
      "New Virt-who Config": [
        ""
      ],
      "Newer version of virt-who is required, minimum version is %s": [
        ""
      ],
      "No Change": [
        ""
      ],
      "No Report Yet": [
        ""
      ],
      "No Reports": [
        ""
      ],
      "No change": [
        ""
      ],
      "No configuration found": [
        ""
      ],
      "Nutanix AHV’s IP address.": [
        ""
      ],
      "OK": [
        "OK"
      ],
      "On the target virt-who host:": [
        ""
      ],
      "On this page you can define virt-who configurations for your hypervisors.": [
        ""
      ],
      "One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment.": [
        ""
      ],
      "Only hosts which cluster ID is specified in comma-separated list in this option will be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled": [
        ""
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled ": [
        ""
      ],
      "Organization of the virt-who configuration": [
        ""
      ],
      "Overview": [
        "Panoramica"
      ],
      "Owner": [
        "Proprietario"
      ],
      "Owner was not provided": [
        ""
      ],
      "Path to kubeconfig file": [
        ""
      ],
      "Prism Central": [
        ""
      ],
      "Prism Element": [
        ""
      ],
      "Prism Flavor": [
        ""
      ],
      "Renders a deploy script for the specified virt-who configuration": [
        ""
      ],
      "Report": [
        ""
      ],
      "Schedule": [
        "Programmazione"
      ],
      "Select the Prism flavor you are connecting to": [
        ""
      ],
      "Show a virt-who configuration": [
        ""
      ],
      "Specifies how the hypervisor will be identified.": [
        ""
      ],
      "Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.\\n                              Note that some virtualization backends don't have all of them implemented.\\n                              Default is <b>hostname</b>, which provides more meaningful hypervisor\\n                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.\\n                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager.": [
        ""
      ],
      "Status": [
        "Stato"
      ],
      "Success": [
        "Successo"
      ],
      "The configuration was not deployed yet or the virt-who was unable to report the status": [
        ""
      ],
      "The virt-who report arrived within the interval": [
        ""
      ],
      "The virt-who report has not arrived within the interval, which indicates there was no change on hypervisor": [
        ""
      ],
      "To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution.": [
        ""
      ],
      "Total Configurations": [
        ""
      ],
      "Unable to create sysconfig file": [
        ""
      ],
      "Unable to create virt-who config file": [
        ""
      ],
      "Unable to enable virt-who service using systemctl": [
        ""
      ],
      "Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository": [
        ""
      ],
      "Unable to start virt-who service, please see virt-who logs for more details": [
        ""
      ],
      "Unknown": [
        "Sconosciuto"
      ],
      "Unknown configuration status": [
        ""
      ],
      "Unknown configuration status, caused by unexpected conditions": [
        ""
      ],
      "Unlimited": [
        "Illimitato"
      ],
      "Update a virt-who configuration": [
        ""
      ],
      "Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host:": [
        ""
      ],
      "VMware vCenter server’s fully qualified host name or IP address.": [
        ""
      ],
      "Virt-who Configs Status": [
        ""
      ],
      "Virt-who Configuration %s": [
        ""
      ],
      "Virt-who Configurations": [
        ""
      ],
      "Virt-who Configurations Status": [
        ""
      ],
      "Whitelist": [
        ""
      ],
      "every %s hours": [
        ""
      ]
    }
  }
};