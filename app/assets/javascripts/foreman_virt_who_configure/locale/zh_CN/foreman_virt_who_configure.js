 locales['foreman_virt_who_configure'] = locales['foreman_virt_who_configure'] || {}; locales['foreman_virt_who_configure']['zh_CN'] = {
  "domain": "foreman_virt_who_configure",
  "locale_data": {
    "foreman_virt_who_configure": {
      "": {
        "Project-Id-Version": "foreman_virt_who_configure 0.5.26",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2017-05-03 11:59+0000",
        "Last-Translator": "Amit Upadhye <aupadhye@redhat.com>, 2025",
        "Language-Team": "Chinese (China) (https://app.transifex.com/foreman/teams/114/zh_CN/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "zh_CN",
        "Plural-Forms": "nplurals=1; plural=0;",
        "lang": "zh_CN",
        "domain": "foreman_virt_who_configure",
        "plural_forms": "nplurals=1; plural=0;"
      },
      "1. Copy this configuration script to a safe directory.": [
        "1. 将这个配置脚本复制到安全目录。"
      ],
      "2. Make the script executable and run it.": [
        "2. 使脚本可执行，并运行脚本。"
      ],
      "3. Delete the script.": [
        "3. 删除该脚本。"
      ],
      "A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses.": [
        "忽略代理服务器。忽略代理服务器设置的主机名、域或 ip 地址逗号分隔列表。可选择性地设置为 <code>*</code>，以便为所有主机名、域或 ip 地址跳过代理服务器设置。"
      ],
      "A plugin to make virt-who configuration easy": [
        "简化 virt-who 配置的插件"
      ],
      "Account name by which virt-who is to connect to Nutanix AHV.": [
        "virt-who 连接到 Nutanix AHV 的帐户名称。"
      ],
      "Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\\\\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information.": [
        "virt-who 用于连接 hypervisor 的帐户名，格式为 <code>domain_name\\\\account_name</code>。注意只使用单斜线来分离 domain_name 和 account_name 的值。如果您使用域帐户，以及全局配置文件 <code>/etc/virt-who.conf</code>，则需要使用 <b>双斜线</b>。有关进一步详情，请参见<a href=\\\"https://access.redhat.com/solutions/1270223\\\">红帽知识库解决方案 如何将 windows 域名帐户用于 在 virt-who</a> 了解更多信息。"
      ],
      "Account name by which virt-who is to connect to the hypervisor.": [
        "virt-who 用于连接 hypervisor 的帐户名。"
      ],
      "Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users.": [
        "virt-who 连接 hypervisor 所用的帐户名。默认为 <code>Administrator</code>。要使用替换帐户，请创建用户帐户并将该帐户分配给以下组（Windows 2012 服务器）：Hyper-V 管理员和远程管理用户。"
      ],
      "Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information.": [
        "virt-who 连接 hypervisor 所用的帐户名。Virt-who 不支持基于密码的验证，您必须手动设置 SSH 密钥，有关更多信息，请参见 <a href=\\\"https://access.redhat.com/solutions/1515983\\\">红帽知识库解决方案 如何为 KVM 主机配置 virt-who</a>。"
      ],
      "Account password by which virt-who is to connect to the hypervisor instance.": [
        "virt-who 用于连接 hypervisor 实例的帐户密码。"
      ],
      "Actions": [
        "操作"
      ],
      "Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "仅适用于 esx 提供程序类型。在此选项中以逗号分隔的列表指定了父资源（通常是 ComputeResource）名称的主机<b>不会被</b>报告。支持通配符和正则表达式，多个记录必须用逗号分隔。如果该值包含逗号等特殊字符，则将其放在双引号中。所有新行字符将在生成的配置文件中删除，空格从开头和结尾删除。"
      ],
      "Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "仅适用于 esx 提供程序类型。仅报告在此选项中以逗号分隔的列表指定了父资源（通常是 ComputeResource）名称的主机。支持通配符和正则表达式，多个记录必须用逗号分隔。如果该值包含逗号等特殊字符，则将其放在双引号中。所有新行字符将在生成的配置文件中删除，空格从开头和结尾删除。"
      ],
      "Blacklist": [
        "黑名单"
      ],
      "Configs": [
        "配置"
      ],
      "Configuration Status": [
        "配置状态"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details": [
        "配置文件，其中包含有关如何连接到集群的详细信息以及身份验证的详细信息"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details.": [
        "配置文件，其中包含有关如何连接到集群的详细信息以及身份验证的详细信息。"
      ],
      "Configuration interval in minutes": [
        "以分钟为单位的配置间隔"
      ],
      "Configuration name": [
        "配置名称"
      ],
      "Configuration numeric identifier": [
        "配置数字识别符"
      ],
      "Configuration script: ": [
        "配置脚本："
      ],
      "Config|Interval": [
        "配置|间隔"
      ],
      "Config|Last Report": [
        "配置|最新报告"
      ],
      "Config|Name": [
        "配置|名称"
      ],
      "Connection": [
        "连接"
      ],
      "Container-native virtualization’s fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token.": [
        "容器原生虚拟化的标准主机名或 IP 地址。为了连接到集群，需要提供 kubeconfig 的路径，其中包含连接详细信息和身份验证令牌。"
      ],
      "Copy to clipboard": [
        "复制到剪贴板"
      ],
      "Count": [
        "计数"
      ],
      "Create Config": [
        "创建配置"
      ],
      "Create a virt-who configuration": [
        "创建 virt-who 配置"
      ],
      "Delete a virt-who configuration": [
        "删除 virt-who 配置"
      ],
      "Delete virt-who configuration %s?": [
        "删除 virt-who 配置 %s？"
      ],
      "Deploy": [
        "部署"
      ],
      "Details": [
        "详情"
      ],
      "Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "不能为每个管理程序设置不同的调试值，因此它将影响将在其上部署此配置的主机上的所有其他已部署的配置。"
      ],
      "Download the script": [
        "下载脚本"
      ],
      "Edit": [
        "编辑"
      ],
      "Edit Virt-who Config": [
        "编辑 Virt-who 配置"
      ],
      "Enable AHV debug": [
        "启用 AHV 故障排除"
      ],
      "Enable debugging output": [
        "启用调试输出"
      ],
      "Enable debugging output?": [
        "启用调试输出？"
      ],
      "Every 12 hours": [
        "每 12 小时"
      ],
      "Every 2 days": [
        "每 2 天"
      ],
      "Every 2 hours": [
        "每 2 小时"
      ],
      "Every 24 hours": [
        "每 24 小时"
      ],
      "Every 3 days": [
        "每 3 天"
      ],
      "Every 4 hours": [
        "每 4 小时"
      ],
      "Every 8 hours": [
        "每 8 小时"
      ],
      "Every hour": [
        "每小时"
      ],
      "Exclude Hosts": [
        "排除主机"
      ],
      "Exclude host parents": [
        "排除主机父系统"
      ],
      "Exclude hosts": [
        "排除主机"
      ],
      "Exclude hosts which cluster ID is specified in comma-separated list in this option will <b>NOT</b> be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "排除集群 ID 在这个选项中列出（以逗号分隔的列表）的主机，<b>不会</b>报告这些主机。PowerCLI 命令在 VMware <code>Get-Cluster \\\"ClusterName\\\" | Select ID</code> 中找到域名。支持通配符和正则表达式，以逗号分开多个记录。如果包含特殊字符（如逗号），则需要将值包括在括号中。在结果配置文件中，所有新行都将被删除，开头和结尾的空字符也会被删除。"
      ],
      "Filter Hosts": [
        "过滤主机"
      ],
      "Filter host parents": [
        "过滤主机父系统"
      ],
      "Filter hosts": [
        "过滤主机"
      ],
      "Filtering": [
        "过滤"
      ],
      "Foreman server FQDN": [
        "Foreman 服务器 FQDN"
      ],
      "Foreman server’s fully-qualified host name, for example: foreman.example.com": [
        "Foreman 服务器的完全限定主机名，例如：foreman.example.com"
      ],
      "Fully qualified host name or IP address of the hypervisor": [
        "Hypervisor 的完全限定主机名或 IP 地址"
      ],
      "General information": [
        "通用信息"
      ],
      "HTTP Proxy": [
        "HTTP 代理"
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers.": [
        "应当用于 virt-who 运行所在服务器和 hypervisor 及虚拟化管理器之间通信的 HTTP 代理服务器。"
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used.": [
        "应当用于 virt-who 运行所在服务器和 hypervisor 及虚拟管理器之间通信的 HTTP 代理服务器。如果未使用代理服务器，则留空。"
      ],
      "Hammer command: ": [
        "Hammer 命令："
      ],
      "Help": [
        "帮助"
      ],
      "Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "<b>不报告</b>在此选项中以逗号分隔的列表指定了uuid（或主机名或 hwuuid，基于 <code>hypervisor_id</code>）的主机。支持通配符和正则表达式，多个记录必须用逗号分隔。如果该值包含逗号等特殊字符，则将其放在双引号中。所有新行字符将在生成的配置文件中删除，空格从开头和结尾删除。"
      ],
      "How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "检查连接的虚拟机管理程序是否有更改的频率？同时还影响报告映射的频率。对于大多数环境，建议值为每两个小时一次。不能为每个虚拟机管理程序设置不同的间隔，因此它将影响将在其上部署此配置的主机上的所有其他已部署的配置。"
      ],
      "Hypervisor ID": [
        "Hypervisor ID"
      ],
      "Hypervisor Password": [
        "Hypervisor 密码"
      ],
      "Hypervisor Server": [
        "Hypervisor 服务器"
      ],
      "Hypervisor Type": [
        "Hypervisor 类型"
      ],
      "Hypervisor Username": [
        "Hypervisor 用户名"
      ],
      "Hypervisor blacklist, applicable only when filtering mode is set to 2. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "Hypervisor 黑名单，仅在过滤模式设置为 2 时适用。支持通配符和正则表达式，必须用逗号分隔多项记录。"
      ],
      "Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist": [
        "Hypervisor 过滤模式 %{unlimited} 表示没有过滤，%{whitelist} 表示白名单，%{blacklist} 代表黑名单"
      ],
      "Hypervisor password, required for all hypervisor types except for libvirt/kubevirt.": [
        "Hypervisor 密码，除 libvirt/kubevirt 以外的所有 hypervisor 类型都需要"
      ],
      "Hypervisor type": [
        "Hypervisor 类型"
      ],
      "Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "Hypervisor 白名单，仅在过滤模式设置为 1 时适用。支持通配符和正则表达式，必须用逗号分隔多项记录。"
      ],
      "If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-who’s access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent.": [
        "如果您运行混合环境，且虚拟机运行 Red Hat Enterprise Linux 和其他操作系统，您可能想要限制 virt-who 对主机的访问权限范围。例如，如果某些 hypervisor 只托管 Microsoft Windows Server 实例，那么让 virt-who agent 报告这些 hypervisor 没有任何意义。"
      ],
      "Ignore Proxy": [
        "忽略代理"
      ],
      "Ignore proxy": [
        "忽略代理服务器"
      ],
      "Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses.": [
        "忽略代理服务器。忽略代理服务器设置的主机名、域或 ip 地址逗号分隔列表。可选择性地设置为 *，以便为所有主机名、域或 ip 地址跳过代理服务器设置。"
      ],
      "Interval": [
        "间隔"
      ],
      "Interval was not provided": [
        "未提供间隔"
      ],
      "Latest Configurations Without Change": [
        "无更改的最新配置"
      ],
      "Libvirt server’s fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. Make sure you setup root's SSH key on target host for a user specified at hypervisor username field": [
        "Libvirt 服务器的完全限定主机名或 IP 地址。您也可以指定首选的方案，例如：<code>qemu+ssh://libvirt.example.com/system</code>。确保您在目标主机上为 hypervisor 用户名字段指定的用户设置根的 SSH 密钥"
      ],
      "List of virt-who configurations": [
        "virt-who 配置列表"
      ],
      "List of virt-who configurations per organization": [
        "每个机构的 virt-who 配置列表"
      ],
      "Microsoft Hyper-V fully qualified host name or IP address.": [
        "Microsoft Hyper-V fully 的完全限定主机名或 IP 地址。"
      ],
      "Name": [
        "名称"
      ],
      "Name of this configuration, e.g. the name of the hypervisor": [
        "此配置的名称，例如 hypervisor 的名称"
      ],
      "New Config": [
        "新建配置"
      ],
      "New Virt-who Config": [
        "新建 Virt-who 配置"
      ],
      "Newer version of virt-who is required, minimum version is %s": [
        "需要更高的 virt-who 版本，最低版本为 %s"
      ],
      "No Change": [
        "無變更"
      ],
      "No Report Yet": [
        "尚没有报告"
      ],
      "No Reports": [
        "没有报告"
      ],
      "No change": [
        "不更改"
      ],
      "No configuration found": [
        "找不到配置"
      ],
      "Nutanix AHV’s IP address.": [
        "Nutanix AHV 的 IP 地址。"
      ],
      "OK": [
        "好"
      ],
      "On the target virt-who host:": [
        "在目标 virt-who 主机上："
      ],
      "On this page you can define virt-who configurations for your hypervisors.": [
        "在本页面，您可以为您的 hypervisor 定义 virt-who 配置。"
      ],
      "One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment.": [
        "一个 virt-who 配置代表 /etc/virt-who.d 目录中的一个配置文件，映射至单个 hypervisor、机构和生命周期环境。"
      ],
      "Only hosts which cluster ID is specified in comma-separated list in this option will be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "只有集群 ID 在这个选项中列出（以逗号分隔的列表）的主机才会报告。PowerCLI 命令在 VMware <code>Get-Cluster \\\"ClusterName\\\" | Select ID</code> 中找到域名。支持通配符和正则表达式，以逗号分开多个记录。如果包含特殊字符（如逗号），则需要将值包括在括号中。在结果配置文件中，所有新行都将被删除，开头和结尾的空字符也会被删除。"
      ],
      "Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "仅报告在此选项中以逗号分隔的列表指定了uuid（或主机名或 hwuuid，基于 <code>hypervisor_id</code>）的主机。支持通配符和正则表达式，多个记录必须用逗号分隔。如果该值包含逗号等特殊字符，则将其放在双引号中。所有新行字符将在生成的配置文件中删除，空格从开头和结尾删除。"
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled": [
        "启用 AHV 内部故障排除需要 Option Enable debugging output。它会在两个选项都启用时提供额外的 AHV 调试信息"
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled ": [
        "启用 AHV 内部故障排除需要 Option Enable debugging output。它会在两个选项都启用时提供额外的 AHV 调试信息 "
      ],
      "Organization of the virt-who configuration": [
        "virt-who 配置机构"
      ],
      "Overview": [
        "概况"
      ],
      "Owner": [
        "所有者"
      ],
      "Owner was not provided": [
        "未提供所有者"
      ],
      "Path to kubeconfig file": [
        "到 kubeconfig 文件的路径"
      ],
      "Prism Central": [
        "Prism Central"
      ],
      "Prism Element": [
        "Prism Element"
      ],
      "Prism Flavor": [
        "Prism Flavor"
      ],
      "Renders a deploy script for the specified virt-who configuration": [
        "为指定的 virt-who 配置提供部署脚本"
      ],
      "Schedule": [
        "调度"
      ],
      "Select the Prism flavor you are connecting to": [
        "选择您要连接到的 Prism 类别"
      ],
      "Show a virt-who configuration": [
        "显示 virt-who 配置"
      ],
      "Specifies how the hypervisor will be identified.": [
        "指定如何识别 hypervisor。"
      ],
      "Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.\\n                              Note that some virtualization backends don't have all of them implemented.\\n                              Default is <b>hostname</b>, which provides more meaningful hypervisor\\n                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.\\n                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager.": [
        "指定 hypervisor 由其 <b>hostname</b>、<b>uuid</b> 或 <b>hwuuid</b> 标识。\\n                              注意某些虚拟化后端并未完全实施。\\n                              默认为 <b>hostname</b>，它提供更具意义的 hypervisor \\n                                  名称，但如果主机重命名，则可能造成重复的 hypervisor 注册。为了避免这种情况，可使用 <b>uuid</b> 代替。<b>hwuuid</b> 仅适用于 esx。\\n                                  此特性应在首次运行 virt-who 之前设置。之后更改将导致订阅管理器中出现重复条目。"
      ],
      "Status": [
        "状态"
      ],
      "Success": [
        "成功"
      ],
      "The configuration was not deployed yet or the virt-who was unable to report the status": [
        "尚未部署配置，或者 virt-who 无法报告状态"
      ],
      "The virt-who report arrived within the interval": [
        "在间隔期间收到 virt-who 报告"
      ],
      "The virt-who report has not arrived within the interval, which indicates there was no change on hypervisor": [
        "未在间隔期间收到 virt-who 报告，表示 hypervisor 无更改"
      ],
      "To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution.": [
        "如要定义新配置，请点击 New Config 按钮，填写表格。当您提供所有所需信息之后，会生成 virt-who 配置脚本。您可以通过复制脚本进行手动安装，也可以通过 Remote Execution 在选定的目标主机上部署。"
      ],
      "Total Configurations": [
        "全部配置"
      ],
      "Unable to create sysconfig file": [
        "无法创建 sysconfig 文件"
      ],
      "Unable to create virt-who config file": [
        "无法创建 virt-who 配置文件"
      ],
      "Unable to enable virt-who service using systemctl": [
        "无法使用 systemctl 启用 virt-who 服务"
      ],
      "Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository": [
        "无法安装 virt-who 软件包，确保已正确订阅主机，且具备访问 katello-host-tools 的访问权限"
      ],
      "Unable to start virt-who service, please see virt-who logs for more details": [
        "无法开始 virt-who 服务，请查看 virt-who 日志了解详情"
      ],
      "Unknown": [
        "未知"
      ],
      "Unknown configuration status": [
        "未知配置状态"
      ],
      "Unknown configuration status, caused by unexpected conditions": [
        "未知配置状态，由意外情况造成"
      ],
      "Unlimited": [
        "无限制"
      ],
      "Update a virt-who configuration": [
        "更新 virt-who 配置"
      ],
      "Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host:": [
        "使用 hammer 命令或下面的脚本来部署此配置。两者都需要 root 特权。在有权访问 Red Hat Satellite Tools 仓库的一个目标主机上运行其中一个，并运行 virt-who 报告，最好在 Foreman 主机上运行："
      ],
      "VMware vCenter server’s fully qualified host name or IP address.": [
        "VMware vCenter 服务器的完全限定主机名或 IP 地址。"
      ],
      "Virt-who Configs Status": [
        "Virt-who 配置状态"
      ],
      "Virt-who Configuration %s": [
        "Virt-who 配置 %s"
      ],
      "Virt-who Configurations": [
        "Virt-who 配置"
      ],
      "Virt-who Configurations Status": [
        "Virt-who 配置状态"
      ],
      "Whitelist": [
        "白名单"
      ],
      "every %s hours": [
        "每 %s 小时"
      ]
    }
  }
};