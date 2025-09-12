 locales['foreman_virt_who_configure'] = locales['foreman_virt_who_configure'] || {}; locales['foreman_virt_who_configure']['ja'] = {
  "domain": "foreman_virt_who_configure",
  "locale_data": {
    "foreman_virt_who_configure": {
      "": {
        "Project-Id-Version": "foreman_virt_who_configure 0.5.26",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2017-05-03 11:59+0000",
        "Last-Translator": "Ewoud Kohl van Wijngaarden <ewoud+transifex@kohlvanwijngaarden.nl>, 2025",
        "Language-Team": "Japanese (https://app.transifex.com/foreman/teams/114/ja/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "ja",
        "Plural-Forms": "nplurals=1; plural=0;",
        "lang": "ja",
        "domain": "foreman_virt_who_configure",
        "plural_forms": "nplurals=1; plural=0;"
      },
      "1. Copy this configuration script to a safe directory.": [
        "1. この設定スクリプトを安全なディレクトリーにコピーします。"
      ],
      "2. Make the script executable and run it.": [
        "2. スクリプトを実行可能な状態にし、これを実行します。"
      ],
      "3. Delete the script.": [
        "3. スクリプトを削除します。"
      ],
      "A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses.": [
        "プロキシー設定を無視するホスト名、ドメインまたは IP アドレスのコンマ区切りの一覧。オプションとして、これを <code>*</code> に設定し、すべてのホスト名ドメインまたは IP アドレスのプロキシー設定をバイパスすることができます。"
      ],
      "A plugin to make virt-who configuration easy": [
        "virt-who 設定を容易にするプラグイン"
      ],
      "Account name by which virt-who is to connect to Nutanix AHV.": [
        "virt-who を Nutanix AHV に接続する際に使用されるアカウント名。"
      ],
      "Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\\\\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information.": [
        "virt-who を <code>domain_name\\\\account_name</code> 形式でハイパーバイザーに接続する際に使用するアカウント名。単一のバックスラッシュのみが domain_name および account_name の値を区別することに注意してください。ドメインアカウントおよびグローバル設定ファイル <code>/etc/virt-who.conf</code> を使用している場合、<b>2 つ</b> のバックスラッシュが必要になります。詳細は、Red Hat ナレッジベースのソリューション記事「<a href=\\\"https://access.redhat.com/solutions/1270223\\\">How to use a windows domain account with virt-who</a>」を参照してください。"
      ],
      "Account name by which virt-who is to connect to the hypervisor.": [
        "virt-who をハイパーバイザーに接続する際に使用されるアカウント名。"
      ],
      "Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users.": [
        "virt-who をハイパーバイザーに接続する際に使用されるアカウント名。デフォルトで、これは <code>Administrator</code> になります。代替アカウントを使用するには、ユーザーアカウントを作成し、そのアカウントを次のグループに割り当てます (Windows 2012 Server): Hyper-V 管理者およびリモート管理ユーザー。"
      ],
      "Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information.": [
        "virt-who をハイパーバイザーに接続する際に使用されるアカウント名。Virt-who はパスワードベースの認証をサポートしないため、SSH 鍵を手動で設定する必要があります。詳細は、「<a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a>」を参照してください。"
      ],
      "Account password by which virt-who is to connect to the hypervisor instance.": [
        "virt-who をハイパーバイザーインスタンスに接続する際に使用されるアカウントパスワード。"
      ],
      "Actions": [
        "アクション"
      ],
      "Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "esx プロバイダータイプにのみ適用できます。親 (通常は ComputeResource) の名前がこのオプションのコンマ区切りの一覧に指定されているホストの場合は <b>レポートされません</b>。ワイルドカードおよび正規表現がサポートされ、複数のレコードはコンマで区切られる必要があります。コンマなどの特殊文字が含まれている場合は値を二重引用符で囲みます。すべての改行文字は生成される設定ファイルで削除され、空白は先頭および末尾から削除されます。"
      ],
      "Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "esx プロバイダータイプにのみ適用できます。親 (通常は ComputeResource) の名前がこのオプションのコンマ区切りの一覧に指定されているホストの場合にのみレポートされます。ワイルドカードおよび正規表現がサポートされ、複数のレコードはコンマで区切られる必要があります。コンマなどの特殊文字が含まれている場合は値を二重引用符で囲みます。すべての改行文字は生成される設定ファイルで削除され、空白は先頭および末尾から削除されます。"
      ],
      "Blacklist": [
        "ブラックリスト"
      ],
      "Configs": [
        "設定"
      ],
      "Configuration Status": [
        "設定ステータス"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details": [
        "クラスターへの接続方法と認証の詳細を含む設定ファイル"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details.": [
        "クラスターへの接続方法と認証の詳細を含む設定ファイル"
      ],
      "Configuration interval in minutes": [
        "設定の間隔 (分単位)"
      ],
      "Configuration name": [
        "設定名"
      ],
      "Configuration numeric identifier": [
        "設定数値 ID"
      ],
      "Configuration script: ": [
        "設定スクリプト: "
      ],
      "Config|Interval": [
        "間隔"
      ],
      "Config|Last Report": [
        "最後のレポート"
      ],
      "Config|Name": [
        "名前"
      ],
      "Connection": [
        "接続"
      ],
      "Container-native virtualization’s fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token.": [
        "コンテナーネイティブの仮想化の完全修飾ホスト名または IP アドレス。クラスターに接続するには、接続の詳細と認証トークンを含む kubeconfig へのパスを指定する必要があります。"
      ],
      "Copy to clipboard": [
        "クリップボードへのコピー"
      ],
      "Count": [
        "カウント"
      ],
      "Create Config": [
        "設定の作成"
      ],
      "Create a virt-who configuration": [
        "virt-who 設定の作成"
      ],
      "Delete a virt-who configuration": [
        "virt-who 設定を削除します。"
      ],
      "Delete virt-who configuration %s?": [
        "virt-who 設定 %s を削除しますか?"
      ],
      "Deploy": [
        "デプロイ"
      ],
      "Details": [
        "詳細"
      ],
      "Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "ハイパーバイザーごとに異なるデバッグ値を設定できません。そのため、この設定をデプロイするホストにデプロイ済みの他の全設定に影響します。"
      ],
      "Download the script": [
        "スクリプトのダウンロード"
      ],
      "Edit": [
        "編集"
      ],
      "Edit Virt-who Config": [
        "Virt-who 設定の編集"
      ],
      "Enable AHV debug": [
        "AHV デバッグの有効化"
      ],
      "Enable debugging output": [
        "デバッグ出力の有効化"
      ],
      "Enable debugging output?": [
        "デバッグ出力を有効にしますか?"
      ],
      "Every 12 hours": [
        "12 時間ごと"
      ],
      "Every 2 days": [
        "2 日ごと"
      ],
      "Every 2 hours": [
        "2 時間ごと"
      ],
      "Every 24 hours": [
        "24 時間ごと"
      ],
      "Every 3 days": [
        "3 日ごと"
      ],
      "Every 4 hours": [
        "4 時間ごと"
      ],
      "Every 8 hours": [
        "8 時間ごと"
      ],
      "Every hour": [
        "毎時"
      ],
      "Exclude Hosts": [
        "ホストの除外"
      ],
      "Exclude host parents": [
        "ホストの親の除外"
      ],
      "Exclude hosts": [
        "ホストの除外"
      ],
      "Exclude hosts which cluster ID is specified in comma-separated list in this option will <b>NOT</b> be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "クラスター ID がこのオプションのコンマ区切りの一覧に指定されているホストは、レポート<b>されません</b>。PowerCLI コマンドを使用して VMware でドメイン名を検索します (<code>Get-Cluster “ClusterName” | Select ID</code>)。ワイルドカードおよび正規表現がサポートされ、複数のレコードはコンマで区切られる必要があります。コンマなどの特殊文字が含まれている場合は値を二重引用符で囲みます。すべての改行文字は生成される設定ファイルで削除され、空白は先頭および末尾から削除されます。"
      ],
      "Filter Hosts": [
        "ホストのフィルタリング"
      ],
      "Filter host parents": [
        "ホストの親のフィルタリング"
      ],
      "Filter hosts": [
        "ホストのフィルタリング"
      ],
      "Filtering": [
        "フィルタリング"
      ],
      "Foreman server FQDN": [
        "Foreman サーバーの FQDN"
      ],
      "Foreman server’s fully-qualified host name, for example: foreman.example.com": [
        "Foreman サーバーの完全修飾ホスト名 (例: foreman.example.com)"
      ],
      "Fully qualified host name or IP address of the hypervisor": [
        "ハイパーバイザーの完全修飾ホスト名または IP アドレス"
      ],
      "General information": [
        "一般情報"
      ],
      "HTTP Proxy": [
        "HTTP プロキシー"
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers.": [
        "virt-who が実行されているサーバーとハイパーバイザーおよび仮想化マネージャー間の通信に使用する必要のある HTTP プロキシー。"
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used.": [
        "virt-who が実行されているサーバーとハイパーバイザーおよび仮想化マネージャー間の通信に使用する必要のある HTTP プロキシー。プロキシーが使用されていない場合はこれを空白にします。"
      ],
      "Hammer command: ": [
        "Hammer コマンド: "
      ],
      "Help": [
        "ヘルプ"
      ],
      "Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "uuid (または <code>hypervisor_id</code> に応じてホスト名または hwuuid) がこのオプションのコンマ区切りの一覧に指定されているホストは <b>レポートされません</b>。ワイルドカードおよび正規表現がサポートされ、複数のレコードはコンマで区切られる必要があります。コンマなどの特殊文字が含まれている場合は値を二重引用符で囲みます。すべての改行文字は生成される設定ファイルで削除され、空白は先頭および末尾から削除されます。"
      ],
      "How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "接続済みのハイパーバイザーに変更がないか、どのような頻度で確認しますか?また、マッピングの報告頻度にも影響します。大半の環境での推奨値は、2時間ごとです。ハイパーバイザーごとに異なる間隔を設定できるので、この設定をデプロイするホストに設定済みの他の全設定に影響があります。"
      ],
      "Hypervisor ID": [
        "ハイパーバイザー ID"
      ],
      "Hypervisor Password": [
        "ハイパーバイザーのパスワード"
      ],
      "Hypervisor Server": [
        "ハイパーバイザーのサーバー"
      ],
      "Hypervisor Type": [
        "ハイパーバイザーのタイプ"
      ],
      "Hypervisor Username": [
        "ハイパーバイザーのユーザー名"
      ],
      "Hypervisor blacklist, applicable only when filtering mode is set to 2. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "フィルタリングモードが 2 に設定されている場合にのみ適用できるハイパーバイザーのブラックリストです。ワイルドカードおよび正規表現がサポートされており、複数のレコードはコンマで区切られる必要があります。"
      ],
      "Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist": [
        "ハイパーバイザーのフィルタリングモード。%%{unlimited} はフィルタリングがないことを意味し、%%{whitelist} はホワイトリスト、%%{blacklist} はブラックリストを意味します。"
      ],
      "Hypervisor password, required for all hypervisor types except for libvirt/kubevirt.": [
        "libvirt/kubevirt を除くすべてのハイパーバイザーのタイプに必要なハイパーバイザーのパスワード"
      ],
      "Hypervisor type": [
        "ハイパーバイザーのタイプ"
      ],
      "Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "フィルタリングモードが 1 に設定されている場合にのみ適用できるハイパーバイザーのホワイトリストです。ワイルドカードおよび正規表現がサポートされており、複数のレコードはコンマで区切られる必要があります。"
      ],
      "If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-who’s access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent.": [
        "Red Hat Enterprise Linux およびその他のオペレーティングシステムを実行する仮想マシンでハイブリッド環境を実行する場合は、virt-who のホストへのアクセスの範囲を制限することをお勧めします。たとえば、一部のハイパーバイザーが Microsoft Windows Server インスタンスのみをホストする場合、これらのハイパーバイザーを virt-who エージェントが報告する利点はありません。"
      ],
      "Ignore Proxy": [
        "プロキシーを無視する"
      ],
      "Ignore proxy": [
        "プロキシーを無視"
      ],
      "Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses.": [
        "プロキシーを無視します。プロキシー設定を無視するホスト名、ドメインまたは IP アドレスのコンマ区切りの一覧です。オプションとして、これは * に設定でき、すべてのホスト名ドメインまたは IP アドレスのプロキシー設定をバイパスします。"
      ],
      "Interval": [
        "間隔"
      ],
      "Interval was not provided": [
        "間隔は指定されていません"
      ],
      "Latest Configurations Without Change": [
        "変更のない最新の設定"
      ],
      "Libvirt server’s fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. Make sure you setup root's SSH key on target host for a user specified at hypervisor username field": [
        "Libvirt サーバーの完全修飾ホスト名または IP アドレス。優先スキーマを指定することもできます。例:<code> qemu+ssh://libvirt.example.com/system</code>。ハイパーバイザーのユーザー名フィールドで指定されたユーザーのターゲットホストにルートの SSH 鍵を設定してください。"
      ],
      "List of virt-who configurations": [
        "virt-who 設定一覧を表示します。"
      ],
      "List of virt-who configurations per organization": [
        "組織別の virt-who 設定の一覧"
      ],
      "Microsoft Hyper-V fully qualified host name or IP address.": [
        "Microsoft Hyper-V の完全修飾ホスト名または IP アドレス。"
      ],
      "Name": [
        "名前"
      ],
      "Name of this configuration, e.g. the name of the hypervisor": [
        "この設定の名前。例: ハイパーバイザーの名前"
      ],
      "New Config": [
        "新規設定"
      ],
      "New Virt-who Config": [
        "新規 Virt-who 設定"
      ],
      "Newer version of virt-who is required, minimum version is %s": [
        "virt-who の新規バージョンが必要です。最小バージョンは %s です"
      ],
      "No Change": [
        "変更なし"
      ],
      "No Report Yet": [
        "レポートはまだありません"
      ],
      "No Reports": [
        "レポートがありません"
      ],
      "No change": [
        "変更なし"
      ],
      "No configuration found": [
        "設定が見つかりません"
      ],
      "Nutanix AHV’s IP address.": [
        "Nutanix AHV の IP アドレス。"
      ],
      "OK": [
        "OK"
      ],
      "On the target virt-who host:": [
        "ターゲット virt-who ホスト上:"
      ],
      "On this page you can define virt-who configurations for your hypervisors.": [
        "このページで、ハイパーバイザーの virt-who 設定を定義できます。"
      ],
      "One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment.": [
        "1 つの virt-who 設定は /etc/virt-who.d ディレクトリーの 1 つの設定ファイルを表し、単一のハイパーバイザー、組織およびライフサイクル環境にマップされます。"
      ],
      "Only hosts which cluster ID is specified in comma-separated list in this option will be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "クラスター ID がこのオプションのコンマ区切りの一覧に指定されているホストだけがレポートされます。PowerCLI コマンドを使用して VMware でドメイン名を検索します (<code>Get-Cluster “ClusterName” | Select ID</code>)。ワイルドカードおよび正規表現がサポートされ、複数のレコードはコンマで区切られる必要があります。コンマなどの特殊文字が含まれている場合は値を二重引用符で囲みます。すべての改行文字は生成される設定ファイルで削除され、空白は先頭および末尾から削除されます。"
      ],
      "Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "uuid (または <code>hypervisor_id</code> に応じてホスト名または hwuuid) がこのオプションのコンマ区切りの一覧に指定されているホストの場合にのみレポートされます。ワイルドカードおよび正規表現がサポートされ、複数のレコードはコンマで区切られる必要があります。コンマなどの特殊文字が含まれている場合は値を二重引用符で囲みます。すべての改行文字は生成される設定ファイルで削除され、空白は先頭および末尾から削除されます。"
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled": [
        "AHV 内部デバッグを有効にするには、オプション Enable debugging output が必要です。両方のオプションが有効な場合に追加の AHV デバッグ情報を提供します。"
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled ": [
        "AHV 内部デバッグを有効にするには、Enable debugging output のオプションは必須です。両方のオプションが有効な場合に追加の AHV デバッグ情報を提供します。"
      ],
      "Organization of the virt-who configuration": [
        "virt-who 設定の組織"
      ],
      "Overview": [
        "概要"
      ],
      "Owner": [
        "所有者"
      ],
      "Owner was not provided": [
        "所有者は指定されていません"
      ],
      "Path to kubeconfig file": [
        "kubeconfig ファイルへのパス"
      ],
      "Prism Central": [
        "Prism Central"
      ],
      "Prism Element": [
        "Prism Element"
      ],
      "Prism Flavor": [
        "Prism フレーバー"
      ],
      "Renders a deploy script for the specified virt-who configuration": [
        "指定した virt-who 設定の deploy スクリプトのレンダリングを行います。"
      ],
      "Report": [
        ""
      ],
      "Schedule": [
        "スケジュール"
      ],
      "Select the Prism flavor you are connecting to": [
        "接続先の Prism フレーバー選択"
      ],
      "Show a virt-who configuration": [
        "virt-who 設定を表示します。"
      ],
      "Specifies how the hypervisor will be identified.": [
        "ハイパーバイザーの特定方法を指定します。"
      ],
      "Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.\\n                              Note that some virtualization backends don't have all of them implemented.\\n                              Default is <b>hostname</b>, which provides more meaningful hypervisor\\n                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.\\n                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager.": [
        "ハイパーバイザーが <b>hostname</b>、<b>uuid</b> または <b>hwuuid</b> で特定されるように指定します。\\n                              一部の仮想化バックエンドではそれらのすべてが実装されていません。\\n                              デフォルトは <b>hostname</b> であり、意味を付したハイパーバイザー名\\n                                  を提供しますが、ホスト名が変更される場合は、ハイパーバーザー登録の重複が生じる可能性があります。これを避けるには、代わりに <b>uuid</b> を使用できます。<b>hwuuid</b> は esx のみに適用されます。\\n                                  このプロパティーは、virt-who の初回の実行前に設定されることになっています。これを後で変更すると、サブスクリプションマネージャーでエントリーの重複が生じます。"
      ],
      "Status": [
        "状態"
      ],
      "Success": [
        "成功"
      ],
      "The configuration was not deployed yet or the virt-who was unable to report the status": [
        "設定がデプロイされていないか、または virt-who がステータスを報告できませんでした"
      ],
      "The virt-who report arrived within the interval": [
        "期間内に着信した virt-who レポート"
      ],
      "The virt-who report has not arrived within the interval, which indicates there was no change on hypervisor": [
        "virt-who レポートは期間内に着信しておらず、これはハイパーバイザーに変更がないことを示しています"
      ],
      "To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution.": [
        "新規設定を定義するには、新規設定ボタンをクリックしてフォームに記入します。すべての必須情報を入力した後に、virt-who 設定スクリプトが生成されます。スクリプトをコピーしてこれを手動でインストールするか、またはこれをリモート実行により、選択したターゲットホスト上でデプロイすることができます。"
      ],
      "Total Configurations": [
        "合計の設定"
      ],
      "Unable to create sysconfig file": [
        "sysconfig ファイルを作成できません"
      ],
      "Unable to create virt-who config file": [
        "virt-who 設定ファイルを作成できません"
      ],
      "Unable to enable virt-who service using systemctl": [
        "systemctl を使用して virt-who サービスを有効にできません"
      ],
      "Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository": [
        "virt-who パッケージをインストールできません。ホストが適切にサブスクライブされており、katello-host-tools リポジトリーへのアクセスがあることを確認します。"
      ],
      "Unable to start virt-who service, please see virt-who logs for more details": [
        "virt-who サービスを起動できません。詳細は、virt-who ログを参照してください"
      ],
      "Unknown": [
        "不明"
      ],
      "Unknown configuration status": [
        "不明な設定ステータス"
      ],
      "Unknown configuration status, caused by unexpected conditions": [
        "予期しない状況によって生じる不明な設定ステータス"
      ],
      "Unlimited": [
        "無制限"
      ],
      "Update a virt-who configuration": [
        "virt-who 設定の更新"
      ],
      "Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host:": [
        "以下の Hammer コマンドまたはスクリプトを使用してこの設定をデプロイします。いずれも、root 権限が必要です。katello-host-tools にアクセスできるターゲットホストで Hammer コマンドまたはスクリプトを実行し、可能な場合は Foreman ホストで virt-who レポートを実行します。"
      ],
      "VMware vCenter server’s fully qualified host name or IP address.": [
        "VMware vCenter サーバーの完全修飾ホスト名または IP アドレス"
      ],
      "Virt-who Configs Status": [
        "Virt-who 設定ステータス"
      ],
      "Virt-who Configuration %s": [
        "Virt-who 設定 %s"
      ],
      "Virt-who Configurations": [
        "Virt-who 設定"
      ],
      "Virt-who Configurations Status": [
        "Virt-who 設定ステータス"
      ],
      "Whitelist": [
        "ホワイトリスト"
      ],
      "every %s hours": [
        "%s 時間ごと"
      ]
    }
  }
};