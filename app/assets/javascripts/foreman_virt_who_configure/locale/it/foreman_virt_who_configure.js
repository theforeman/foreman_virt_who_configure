 locales['foreman_virt_who_configure'] = locales['foreman_virt_who_configure'] || {}; locales['foreman_virt_who_configure']['it'] = {
  "domain": "foreman_virt_who_configure",
  "locale_data": {
    "foreman_virt_who_configure": {
      "": {
        "Project-Id-Version": "foreman_virt_who_configure 0.5.17",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2017-05-03 11:59+0000",
        "Last-Translator": "Bryan Kearney <bryan.kearney@gmail.com>, 2021",
        "Language-Team": "Italian (https://www.transifex.com/foreman/teams/114/it/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "it",
        "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;",
        "lang": "it",
        "domain": "foreman_virt_who_configure",
        "plural_forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;"
      },
      "List of virt-who configurations": [
        ""
      ],
      "List of virt-who configurations per organization": [
        ""
      ],
      "Show a virt-who configuration": [
        ""
      ],
      "Renders a deploy script for the specified virt-who configuration": [
        ""
      ],
      "Configuration name": [
        ""
      ],
      "Configuration interval in minutes": [
        ""
      ],
      "Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist": [
        ""
      ],
      "Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        ""
      ],
      "Hypervisor blacklist, applicable only when filtering mode is set to 2. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        ""
      ],
      "Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Specifies how the hypervisor will be identified.": [
        ""
      ],
      "Hypervisor type": [
        ""
      ],
      "Fully qualified host name or IP address of the hypervisor": [
        ""
      ],
      "Account name by which virt-who is to connect to the hypervisor.": [
        ""
      ],
      "Hypervisor password, required for all hypervisor types except for libvirt/kubevirt.": [
        ""
      ],
      "Foreman server FQDN": [
        ""
      ],
      "Enable debugging output": [
        ""
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details.": [
        ""
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers.": [
        ""
      ],
      "Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses.": [
        ""
      ],
      "Organization of the virt-who configuration": [
        ""
      ],
      "Select the Prism flavor you are connecting to": [
        ""
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled": [
        ""
      ],
      "Create a virt-who configuration": [
        ""
      ],
      "Update a virt-who configuration": [
        ""
      ],
      "Configuration numeric identifier": [
        ""
      ],
      "Delete a virt-who configuration": [
        ""
      ],
      "Create Config": [
        ""
      ],
      "New Config": [
        ""
      ],
      "Help": [
        "Aiuto"
      ],
      "VMware vCenter server’s fully qualified host name or IP address.": [
        ""
      ],
      "Microsoft Hyper-V fully qualified host name or IP address.": [
        ""
      ],
      "Libvirt server’s fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. Make sure you setup root's SSH key on target host for a user specified at hypervisor username field": [
        ""
      ],
      "Container-native virtualization’s fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token.": [
        ""
      ],
      "Nutanix AHV’s IP address.": [
        ""
      ],
      "Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\\\\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information.": [
        ""
      ],
      "Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users.": [
        ""
      ],
      "Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information.": [
        ""
      ],
      "Account name by which virt-who is to connect to Nutanix AHV.": [
        ""
      ],
      "No Report Yet": [
        ""
      ],
      "Unknown configuration status": [
        ""
      ],
      "Unlimited": [
        "Illimitato"
      ],
      "Whitelist": [
        ""
      ],
      "Blacklist": [
        ""
      ],
      "General information": [
        ""
      ],
      "Schedule": [
        "Programmazione"
      ],
      "Connection": [
        "Connessione"
      ],
      "Every hour": [
        ""
      ],
      "Every 2 hours": [
        ""
      ],
      "Every 4 hours": [
        ""
      ],
      "Every 8 hours": [
        ""
      ],
      "Every 12 hours": [
        ""
      ],
      "Every 24 hours": [
        ""
      ],
      "Every 2 days": [
        ""
      ],
      "Every 3 days": [
        ""
      ],
      "OK": [
        "OK"
      ],
      "No change": [
        ""
      ],
      "Unknown": [
        "Sconosciuto"
      ],
      "Unknown configuration status, caused by unexpected conditions": [
        ""
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
      "Prism Central": [
        ""
      ],
      "Prism Element": [
        ""
      ],
      "every %s hours": [
        ""
      ],
      "Success": [
        "Successo"
      ],
      "Newer version of virt-who is required, minimum version is %s": [
        ""
      ],
      "Unable to create virt-who config file": [
        ""
      ],
      "Unable to create sysconfig file": [
        ""
      ],
      "Unable to enable virt-who service using systemctl": [
        ""
      ],
      "Unable to start virt-who service, please see virt-who logs for more details": [
        ""
      ],
      "Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository": [
        ""
      ],
      "Owner was not provided": [
        ""
      ],
      "Interval was not provided": [
        ""
      ],
      "Virt-who Configurations Status": [
        ""
      ],
      "Configuration Status": [
        ""
      ],
      "Count": [
        "Conteggio"
      ],
      "No Reports": [
        ""
      ],
      "No Change": [
        ""
      ],
      "Total Configurations": [
        ""
      ],
      "Latest Configurations Without Change": [
        ""
      ],
      "No configuration found": [
        ""
      ],
      "Config|Name": [
        ""
      ],
      "Config|Last Report": [
        ""
      ],
      "Config|Interval": [
        ""
      ],
      "Edit Virt-who Config": [
        ""
      ],
      "Virt-who Configurations": [
        ""
      ],
      "Edit": [
        "Modifica"
      ],
      "Status": [
        "Stato"
      ],
      "Actions": [
        "Azioni"
      ],
      "Delete virt-who configuration %s?": [
        ""
      ],
      "New Virt-who Config": [
        ""
      ],
      "Virt-who Configuration %s": [
        ""
      ],
      "Overview": [
        "Panoramica"
      ],
      "Deploy": [
        ""
      ],
      "Details": [
        "Dettagli"
      ],
      "Hypervisor ID": [
        ""
      ],
      "Filtering": [
        ""
      ],
      "Filter Hosts": [
        ""
      ],
      "Exclude Hosts": [
        ""
      ],
      "Enable debugging output?": [
        ""
      ],
      "HTTP Proxy": [
        ""
      ],
      "Ignore Proxy": [
        ""
      ],
      "Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host:": [
        ""
      ],
      "Hammer command: ": [
        ""
      ],
      "Copy to clipboard": [
        ""
      ],
      "Configuration script: ": [
        ""
      ],
      "On the target virt-who host:": [
        ""
      ],
      "1. Copy this configuration script to a safe directory.": [
        ""
      ],
      "2. Make the script executable and run it.": [
        ""
      ],
      "3. Delete the script.": [
        ""
      ],
      "Download the script": [
        ""
      ],
      "Foreman server’s fully-qualified host name, for example: foreman.example.com": [
        ""
      ],
      "Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.\\n                              Note that some virtualization backends don't have all of them implemented.\\n                              Default is <b>hostname</b>, which provides more meaningful hypervisor\\n                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.\\n                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager.": [
        ""
      ],
      "If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-who’s access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent.": [
        ""
      ],
      "Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Filter hosts": [
        ""
      ],
      "Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Exclude hosts": [
        ""
      ],
      "Only hosts which cluster ID is specified in comma-separated list in this option will be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Filter host parents": [
        ""
      ],
      "Exclude hosts which cluster ID is specified in comma-separated list in this option will <b>NOT</b> be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Exclude host parents": [
        ""
      ],
      "Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        ""
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used.": [
        ""
      ],
      "A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses.": [
        ""
      ],
      "Ignore proxy": [
        ""
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details": [
        ""
      ],
      "Path to kubeconfig file": [
        ""
      ],
      "Prism Flavor": [
        ""
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled ": [
        ""
      ],
      "Enable AHV debug": [
        ""
      ],
      "Name of this configuration, e.g. the name of the hypervisor": [
        ""
      ],
      "Name": [
        ""
      ],
      "Owner": [
        "Proprietario"
      ],
      "Hypervisor Type": [
        ""
      ],
      "Hypervisor Server": [
        ""
      ],
      "Hypervisor Username": [
        ""
      ],
      "Hypervisor Password": [
        ""
      ],
      "Account password by which virt-who is to connect to the hypervisor instance.": [
        ""
      ],
      "How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        ""
      ],
      "Interval": [
        ""
      ],
      "Configs": [
        "Config"
      ],
      "On this page you can define virt-who configurations for your hypervisors.": [
        ""
      ],
      "One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment.": [
        ""
      ],
      "To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution.": [
        ""
      ],
      "Virt-who configurations": [
        ""
      ],
      "Virt-who Configs Status": [
        ""
      ],
      "A plugin to make virt-who configuration easy": [
        ""
      ],
      "Abstract async task": [
        "Evento asinc astratto"
      ],
      "Auto attach subscriptions": [
        "esegui l'auto attach delle sottoscrizioni"
      ],
      "Create": [
        "Crea"
      ],
      "Delete": [
        "Cancella"
      ],
      "Delete Activation Key": [
        "Cancella chiave di attivazione"
      ],
      "Delete Lifecycle Environment": [
        "Cancella ambiente ciclo di vita"
      ],
      "Delete Product": [
        "Cancella prodotto"
      ],
      "Destroy": [
        "Elimina"
      ],
      "Destroy Content Host": [
        "Elimina host di contenuto"
      ],
      "Disable": [
        "Disabilita"
      ],
      "Discover": [
        "Trova"
      ],
      "Enable": [
        "Abilita"
      ],
      "Errata mail": [
        "Posta per l'Errata"
      ],
      "Export": [
        "Esporta"
      ],
      "Import": [
        "Importa"
      ],
      "Import Puppet classes": [
        "Importa classi Puppet"
      ],
      "Import facts": [
        "Importa gli eventi"
      ],
      "Incremental Update": [
        "Aggiornamento incrementale"
      ],
      "Index errata": [
        "Indice errata"
      ],
      "Install Applicable Errata": [
        "Installa errata applicabile"
      ],
      "Promote": [
        "Avanzamento"
      ],
      "Publish": [
        "Pubblica"
      ],
      "Remove Content": [
        "Rimuovi contenuto"
      ],
      "Remove Version": [
        "Rimuovi versione"
      ],
      "Remove Versions and Associations": [
        "Rimuovi le versioni e le associazioni"
      ],
      "Remove from Environment": [
        "Rimuovi dall'ambiente"
      ],
      "Report": [
        "Notifica"
      ],
      "Synchronize": [
        "Sincronizza"
      ],
      "Update": [
        "Aggiorna"
      ],
      "Upload into": [
        "Carica in"
      ]
    }
  }
};