 locales['foreman_virt_who_configure'] = locales['foreman_virt_who_configure'] || {}; locales['foreman_virt_who_configure']['ko'] = {
  "domain": "foreman_virt_who_configure",
  "locale_data": {
    "foreman_virt_who_configure": {
      "": {
        "Project-Id-Version": "foreman_virt_who_configure 0.5.26",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2017-05-03 11:59+0000",
        "Last-Translator": "Ewoud Kohl van Wijngaarden <ewoud+transifex@kohlvanwijngaarden.nl>, 2025",
        "Language-Team": "Korean (https://app.transifex.com/foreman/teams/114/ko/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "ko",
        "Plural-Forms": "nplurals=1; plural=0;",
        "lang": "ko",
        "domain": "foreman_virt_who_configure",
        "plural_forms": "nplurals=1; plural=0;"
      },
      "1. Copy this configuration script to a safe directory.": [
        "1. 이 구성 스크립트를 안전한 디렉토리로 복사합니다."
      ],
      "2. Make the script executable and run it.": [
        "2. 스크립트를 실행 가능하게 만들고 실행합니다."
      ],
      "3. Delete the script.": [
        "3. 스크립트를 삭제합니다."
      ],
      "A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses.": [
        "프록시 설정을 무시할 호스트 이름 또는 도메인 또는 IP 주소의 쉼표로 구분된 목록입니다. 선택적으로 모든 호스트 이름, 도메인 또는 IP 주소에 대해 프록시 설정을 우회하려면 <code>*</code>로 설정할 수 있습니다."
      ],
      "A plugin to make virt-who configuration easy": [
        "virt-who 구성을 쉽게 설정할 수 있도록 하는 플러그인"
      ],
      "Account name by which virt-who is to connect to Nutanix AHV.": [
        "virt-who가 Nutanix AHV에 연결할 때 사용할 계정 이름입니다."
      ],
      "Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\\\\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information.": [
        "virt-who가 하이퍼바이저에 연결할 계정 이름은 <code>domain_name\\\\account_name</code> 형식입니다. domain_name과 account_name의 값은 단일 백슬래시로 구분됩니다. 도메인 계정을 사용하고 글로벌 구성 파일 <code>/etc/virt-who.conf</code>을 사용하는 경우 <b>두 개</b>의 백슬래시를 사용해야 합니다. 자세한 내용은 <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a>을 참조하세요."
      ],
      "Account name by which virt-who is to connect to the hypervisor.": [
        "virt-who가 하이퍼바이저에 연결할 때 사용할 계정 이름입니다."
      ],
      "Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users.": [
        "virt-who가 하이퍼바이저에 연결할 때 사용할 계정 이름입니다. 기본값은 <code> 관리자</code>입니다. 다른 계정을 사용하려면 사용자 계정을 생성하고 해당 계정을 다음 그룹에 추가하십시오 (Windows 2012 Server): Hyper-V Administrators 및 Remote Management Users"
      ],
      "Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information.": [
        "virt-who가 하이퍼바이저에 연결할 때 사용할 계정 이름입니다. Virt-who는 암호 기반 인증을 지원하지 않으므로 SSH 키를 수동으로 설정해야 합니다. 자세한 내용은 <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a>를 참조하세요."
      ],
      "Account password by which virt-who is to connect to the hypervisor instance.": [
        "virt-who가 하이퍼바이저 인스턴스에 연결할 계정 비밀번호입니다."
      ],
      "Actions": [
        "동작 "
      ],
      "Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "esx 공급자 유형에만 적용 가능합니다. 이 옵션에서 부모(일반적으로 ComputeResource) 이름이 쉼표로 구분된 목록에 지정된 호스트는<b> 보고되지 않습니다</b>. 와일드카드와 정규 표현식이 지원되며, 여러 항목은 쉼표로 구분해야 합니다. 쉼표와 같은 특수 문자가 포함된 경우 값을 큰따옴표로 묶습니다. 결과 구성 파일에서 모든 줄 바꿈 문자가 제거되고, 시작과 끝에서 공백이 제거됩니다."
      ],
      "Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "esx 공급자 유형에만 적용 가능합니다. 이 옵션에서 부모(일반적으로 ComputeResource) 이름이 쉼표로 구분된 목록에 지정된 호스트만 보고됩니다. 와일드카드와 정규 표현식이 지원되며, 여러 항목은 쉼표로 구분해야 합니다. 쉼표와 같은 특수 문자가 포함된 경우 값을 큰따옴표로 묶습니다. 결과 구성 파일에서 모든 줄 바꿈 문자가 제거되고 시작과 끝에서 공백이 제거됩니다."
      ],
      "Blacklist": [
        "블랙리스트"
      ],
      "Configs": [
        "구성"
      ],
      "Configuration Status": [
        "구성 상태"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details": [
        "클러스터에 연결하는 방법 및 인증 세부 정보에 대한 세부 정보가 포함된 구성 파일"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details.": [
        "클러스터에 연결하는 방법 및 인증 세부 정보가 포함된 구성 파일입니다."
      ],
      "Configuration interval in minutes": [
        "구성 간격 (분 단위)"
      ],
      "Configuration name": [
        "구성 이름"
      ],
      "Configuration numeric identifier": [
        "구성 숫자 식별자"
      ],
      "Configuration script: ": [
        "구성 스크립트: "
      ],
      "Config|Interval": [
        "간격"
      ],
      "Config|Last Report": [
        "마지막 보고서"
      ],
      "Config|Name": [
        "이름"
      ],
      "Connection": [
        "연결"
      ],
      "Container-native virtualization’s fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token.": [
        "컨테이너 네이티브 가상화의 정규화된 호스트 이름 또는 IP 주소입니다. 클러스터에 연결하려면 연결 세부 정보와 인증 토큰이 포함된 kubeconfig에 대한 경로를 제공해야 합니다."
      ],
      "Copy to clipboard": [
        "클립보드에 복사"
      ],
      "Count": [
        "개수"
      ],
      "Create Config": [
        "구성 생성"
      ],
      "Create a virt-who configuration": [
        "virt-who 구성 생성"
      ],
      "Delete a virt-who configuration": [
        "virt-who 구성 삭제"
      ],
      "Delete virt-who configuration %s?": [
        "virt-who 구성 %s을/를 삭제하시겠습니까?"
      ],
      "Deploy": [
        "배포"
      ],
      "Details": [
        "상세 정보 "
      ],
      "Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "하이퍼바이저마다 다른 디버그 값을 설정할 수 없으므로 이 구성이 배포될 호스트에 배포된 다른 모든 구성에 영향을 미칩니다."
      ],
      "Download the script": [
        "스크립트 다운로드"
      ],
      "Edit": [
        "편집 "
      ],
      "Edit Virt-who Config": [
        "Virt-who 구성 편집"
      ],
      "Enable AHV debug": [
        "AHV 디버그 활성화"
      ],
      "Enable debugging output": [
        "디버깅 출력 활성화"
      ],
      "Enable debugging output?": [
        "디버깅 출력을 활성화하시겠습니까?"
      ],
      "Every 12 hours": [
        "12시간마다"
      ],
      "Every 2 days": [
        "2일마다"
      ],
      "Every 2 hours": [
        "2시간마다"
      ],
      "Every 24 hours": [
        "24시간마다"
      ],
      "Every 3 days": [
        "3일마다"
      ],
      "Every 4 hours": [
        "4시간마다"
      ],
      "Every 8 hours": [
        "8시간마다"
      ],
      "Every hour": [
        "매 시간마다"
      ],
      "Exclude Hosts": [
        "제외할 호스트"
      ],
      "Exclude host parents": [
        "상위 호스트 제외"
      ],
      "Exclude hosts": [
        "호스트 제외"
      ],
      "Exclude hosts which cluster ID is specified in comma-separated list in this option will <b>NOT</b> be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "이 옵션에서 클러스터 ID가 쉼표로 구분된 목록에 지정된 호스트 제외는 <b>보고되지 않습니다</b>. VMware에서 도메인 이름을 찾으려면 PowerCLI 명령 <code>Get-Cluster “ClusterName” | Select ID</code>를 사용하십시오. 와일드카드 및 정규 표현식을 사용할 수 있으며, 여러 개의 항목은 쉼표로 구분해야 합니다. 쉼표와 같은 특수 문자가 포함된 값은 큰따옴표로 묶습니다. 최종 구성 파일에서는 모든 줄 바꿈 문자가 제거되며, 시작과 끝의 공백도 자동으로 삭제됩니다."
      ],
      "Filter Hosts": [
        "호스트 필터링"
      ],
      "Filter host parents": [
        "상위 호스트 필터링"
      ],
      "Filter hosts": [
        "호스트 필터링"
      ],
      "Filtering": [
        "필터링"
      ],
      "Foreman server FQDN": [
        "Foreman 서버의 FQDN"
      ],
      "Foreman server’s fully-qualified host name, for example: foreman.example.com": [
        "Foreman 서버의 정규화된 호스트 이름(예: foreman.example.com)"
      ],
      "Fully qualified host name or IP address of the hypervisor": [
        "하이퍼바이저의 정규화된 호스트 이름 또는 IP 주소"
      ],
      "General information": [
        "일반 정보"
      ],
      "HTTP Proxy": [
        "HTTP 프록시"
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers.": [
        "virt-who가 실행되는 서버와 하이퍼바이저 및 가상화 관리자 간 통신에 사용해야 하는 HTTP 프록시입니다."
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used.": [
        "virt-who가 실행되는 서버와 하이퍼바이저 및 가상화 관리자 간의 통신에 사용해야 하는 HTTP 프록시를 지정합니다. 프록시를 사용하지 않는 경우 이 값을 비워 둡니다."
      ],
      "Hammer command: ": [
        "Hammer 명령: "
      ],
      "Help": [
        "도움말"
      ],
      "Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "이 옵션에서 쉼표로 구분된 목록에 지정된 UUID(또는 호스트 이름, hwuuid, <code>hypervisor_id</code>에 따라 선택됨)를 가진 호스트만 <b>보고되지 않습니다</b>. 와일드카드 및 정규 표현식을 사용할 수 있으며, 여러 개의 항목은 쉼표로 구분해야 합니다. 쉼표와 같은 특수 문자가 포함된 값은 큰따옴표로 묶습니다. 최종 구성 파일에서는 모든 줄 바꿈 문자가 제거되며, 시작과 끝의 공백도 자동으로 삭제됩니다."
      ],
      "How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "연결된 하이퍼바이저의 변경 사항을 얼마나 자주 확인하시겠습니까? 이는 매핑이 보고되는 빈도에도 영향을 미칩니다. 대부분 환경에서 권장되는 값은 2시간입니다. 하이퍼바이저마다 다른 간격을 설정할 수 없으므로 이 구성이 배포될 호스트의 다른 모든 배포된 구성에 영향을 미칩니다."
      ],
      "Hypervisor ID": [
        "하이퍼바이저 ID"
      ],
      "Hypervisor Password": [
        "하이퍼바이저 비밀번호"
      ],
      "Hypervisor Server": [
        "하이퍼바이저 서버"
      ],
      "Hypervisor Type": [
        "하이퍼바이저 유형"
      ],
      "Hypervisor Username": [
        "하이퍼바이저 사용자 이름"
      ],
      "Hypervisor blacklist, applicable only when filtering mode is set to 2. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "하이퍼바이저 블랙리스트, 필터링 모드가 2로 설정된 경우에만 적용됩니다. 와일드카드와 정규 표현식이 지원되며, 여러 항목은 쉼표로 구분해야 합니다."
      ],
      "Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist": [
        "하이퍼바이저 필터링 모드, %{unlimited}는 필터링 없음, %{whitelist}는 화이트리스트, %{blacklist}는 블랙리스트를 의미"
      ],
      "Hypervisor password, required for all hypervisor types except for libvirt/kubevirt.": [
        "하이퍼바이저 비밀번호는 libvirt/kubevirt를 제외한 모든 하이퍼바이저 유형에 필요합니다."
      ],
      "Hypervisor type": [
        "하이퍼바이저 유형"
      ],
      "Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "하이퍼바이저 화이트리스트, 필터링 모드가 1로 설정된 경우에만 적용됩니다. 와일드카드와 정규 표현식이 지원되며 여러 항목은 쉼표로 구분해야 합니다."
      ],
      "If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-who’s access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent.": [
        "Red Hat Enterprise Linux과 기타 운영 체제가 혼합된 환경에서 virt-who를 실행하는 경우, virt-who가 액세스할 수 있는 호스트 범위를 제한하는 것이 좋습니다. 예를 들어, 특정 하이퍼바이저가 Microsoft Windows Server 인스턴스만 호스팅하는 경우, 해당 하이퍼바이저를 virt-who 에이전트가 보고하도록 설정하는 것은 불필요할 수 있습니다."
      ],
      "Ignore Proxy": [
        "프록시 무시"
      ],
      "Ignore proxy": [
        "프록시 무시"
      ],
      "Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses.": [
        "프록시 무시. 프록시 설정을 무시할 호스트 이름이나 도메인 또는 IP 주소의 쉼표로 구분된 목록입니다. 선택적으로 모든 호스트 이름 도메인 또는 IP 주소에 대한 프록시 설정을 우회하려면 *로 설정할 수 있습니다."
      ],
      "Interval": [
        "간격 "
      ],
      "Interval was not provided": [
        "간격이 지정되지 않았습니다"
      ],
      "Latest Configurations Without Change": [
        "변경되지 않은 최신 구성"
      ],
      "Libvirt server’s fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. Make sure you setup root's SSH key on target host for a user specified at hypervisor username field": [
        "Libvirt 서버의 정규화된 호스트 이름 또는 IP 주소입니다. 선호하는 스키마를 지정할 수도 있습니다(예:<code> qemu+ssh://libvirt.example.com/system</code> . 하이퍼바이저 사용자 이름 필드에 지정된 사용자에 대해 대상 호스트에서 root의 SSH 키를 설정했는지 확인하세요."
      ],
      "List of virt-who configurations": [
        "virt-who 구성 목록"
      ],
      "List of virt-who configurations per organization": [
        "조직별 virt-who 구성 목록"
      ],
      "Microsoft Hyper-V fully qualified host name or IP address.": [
        "Microsoft Hyper-V의 정규화된 호스트 이름 또는 IP 주소입니다."
      ],
      "Name": [
        "이름 "
      ],
      "Name of this configuration, e.g. the name of the hypervisor": [
        "이 구성의 이름, 예: 하이퍼바이저의 이름"
      ],
      "New Config": [
        "새 구성"
      ],
      "New Virt-who Config": [
        "새 Virt-who 구성"
      ],
      "Newer version of virt-who is required, minimum version is %s": [
        "최신 버전의 virt-who가 필요합니다. 최소 버전: %s"
      ],
      "No Change": [
        "변경 사항 없음"
      ],
      "No Report Yet": [
        "아직 보고서 없음"
      ],
      "No Reports": [
        "보고서 없음"
      ],
      "No change": [
        "변경 사항 없음"
      ],
      "No configuration found": [
        "구성을 찾을 수 없음"
      ],
      "Nutanix AHV’s IP address.": [
        "Nutanix AHV의 IP 주소입니다."
      ],
      "OK": [
        "OK"
      ],
      "On the target virt-who host:": [
        "대상 virt-who 호스트에서:"
      ],
      "On this page you can define virt-who configurations for your hypervisors.": [
        "이 페이지에서 하이퍼바이저에 대한 virt-who 구성을 정의할 수 있습니다."
      ],
      "One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment.": [
        "하나의 virt-who 구성은 /etc/virt-who.d 디렉토리에 있는 하나의 구성 파일을 나타내며 단일 하이퍼바이저, 조직 및 라이프사이클 환경과 매핑됩니다."
      ],
      "Only hosts which cluster ID is specified in comma-separated list in this option will be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "이 옵션에서 쉼표로 구분된 목록에 지정된 클러스터 ID를 가진 호스트만 보고됩니다. VMware에서 도메인 이름을 찾으려면 PowerCLI 명령 <code>Get-Cluster “ClusterName” | Select ID</code>를 사용하십시오. 와일드카드 및 정규 표현식을 사용할 수 있으며, 여러 개의 항목은 쉼표로 구분해야 합니다. 쉼표와 같은 특수 문자가 포함된 값은 큰따옴표로 묶습니다. 최종 구성 파일에서는 모든 줄 바꿈 문자가 제거되며, 시작과 끝의 공백도 자동으로 삭제됩니다."
      ],
      "Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "이 옵션에서 쉼표로 구분된 목록에 지정된 UUID(또는 호스트 이름, hwuuid, <code>hypervisor_id</code>에 따라 선택됨)를 가진 호스트만 보고됩니다. 와일드카드 및 정규 표현식을 사용할 수 있으며, 여러 개의 항목은 쉼표로 구분해야 합니다. 쉼표와 같은 특수 문자가 포함된 값은 큰따옴표로 묶습니다. 최종 구성 파일에서는 모든 줄 바꿈 문자가 제거되며, 시작과 끝의 공백도 자동으로 삭제됩니다."
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled": [
        "AHV 내부 디버그를 활성화하려면 디버깅 출력 활성화 옵션이 필요합니다. 두 옵션이 모두 활성화되면 추가 AHV 디버그 정보를 제공합니다."
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled ": [
        "AHV 내부 디버그를 활성화하려면 디버깅 출력 활성화 옵션이 필요합니다. 두 옵션이 모두 활성화되면 추가 AHV 디버그 정보를 제공합니다."
      ],
      "Organization of the virt-who configuration": [
        "virt-who 구성의 조직"
      ],
      "Overview": [
        "개요"
      ],
      "Owner": [
        "소유자 "
      ],
      "Owner was not provided": [
        "소유자가 제공되지 않았습니다"
      ],
      "Path to kubeconfig file": [
        "kubeconfig 파일 경로"
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
        "지정된 virt-who 구성을 위한 배포 스크립트 렌더링"
      ],
      "Report": [
        ""
      ],
      "Schedule": [
        "스케줄 "
      ],
      "Select the Prism flavor you are connecting to": [
        "연결할 Prism 플레이버를 선택하세요"
      ],
      "Show a virt-who configuration": [
        "virt-who 구성 표시"
      ],
      "Specifies how the hypervisor will be identified.": [
        "하이퍼바이저가 식별되는 방법을 지정합니다."
      ],
      "Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.\\n                              Note that some virtualization backends don't have all of them implemented.\\n                              Default is <b>hostname</b>, which provides more meaningful hypervisor\\n                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.\\n                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager.": [
        "하이퍼바이저를 <b>hostname</b>, <b>uuid</b>, <b>hwuuid</b>로 식별할 지를 지정합니다.\\n                              일부 가상화 백엔드는 이 모든 항목을 지원하지 않을 수도 있습니다.\\n                              기본값은 <b>hostname</b>이며 이는 보다 의미 있는 하이퍼바이저 이름을 제공하지만, \\n                                  호스트 이름 변경 시 중복 등록이 발생할 수 있습니다.. 이를 방지하려면 <b>uuid</b>를 사용하는 것이 좋습니다. <b>hwuuid</b>는 esx에만 적용됩니다.\\n                                  이 속성은 virt-who를 처음 실행하기 전에 설정해야 하며, 이후 변경하면 서브스크립션 관리자에 중복 항목이 생성될 수 있습니다."
      ],
      "Status": [
        "상태 "
      ],
      "Success": [
        "성공 "
      ],
      "The configuration was not deployed yet or the virt-who was unable to report the status": [
        "구성이 아직 배포되지 않았거나 virt-who가 상태를 보고할 수 없음"
      ],
      "The virt-who report arrived within the interval": [
        "virt-who 보고서가 설정된 간격 내에 도착함"
      ],
      "The virt-who report has not arrived within the interval, which indicates there was no change on hypervisor": [
        "virt-who 보고서가 설정된 간격 내에 도착하지 않았으며, 이는 하이퍼바이저에 변경 사항이 없음을 의미함"
      ],
      "To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution.": [
        "새 구성을 정의하려면 ‘새 설정' 버튼을 클릭하고 양식을 작성합니다. 필요한 모든 정보를 입력하면 virt-who 구성 스크립트가 생성됩니다. 스크립트를 복사하여 수동으로 설치하거나 원격 실행을 통해 선택한 대상 호스트에 배포할 수 있습니다."
      ],
      "Total Configurations": [
        "전체 구성"
      ],
      "Unable to create sysconfig file": [
        "sysconfig 파일을 생성할 수 없음"
      ],
      "Unable to create virt-who config file": [
        "virt-who 구성 파일을 생성할 수 없음"
      ],
      "Unable to enable virt-who service using systemctl": [
        "systemctl을 사용하여 virt-who 서비스를 활성화할 수 없음"
      ],
      "Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository": [
        "virt-who 패키지를 설치할 수 없습니다. 호스트가 제대로 구독되었고 katello-host-tools 리포지토리에 액세스할 수 있는지 확인하십시오."
      ],
      "Unable to start virt-who service, please see virt-who logs for more details": [
        "virt-who 서비스를 시작할 수 없습니다. 자세한 내용은 virt-who 로그를 참조하세요."
      ],
      "Unknown": [
        "알 수 없음 "
      ],
      "Unknown configuration status": [
        "알 수 없는 구성 상태"
      ],
      "Unknown configuration status, caused by unexpected conditions": [
        "예기치 않은 상황으로 인해 알 수 없는 구성 상태"
      ],
      "Unlimited": [
        "제한 없음 "
      ],
      "Update a virt-who configuration": [
        "virt-who 구성 업데이트"
      ],
      "Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host:": [
        "hammer 명령이나 아래 스크립트를 사용하여 이 구성을 배포합니다. 둘 다 루트 권한이 필요합니다. katello-host-tools 저장소에 액세스할 수 있고 virt-who 보고를 실행할 대상 호스트(가능하면 Foreman 호스트)에서 실행하십시오."
      ],
      "VMware vCenter server’s fully qualified host name or IP address.": [
        "VMware vCenter 서버의 정규화된 호스트 이름 또는 IP 주소입니다."
      ],
      "Virt-who Configs Status": [
        "Virt-who 구성 상태"
      ],
      "Virt-who Configuration %s": [
        "Virt-who 구성 %s"
      ],
      "Virt-who Configurations": [
        "Virt-who 구성"
      ],
      "Virt-who Configurations Status": [
        "Virt-who 구성 상태"
      ],
      "Whitelist": [
        "화이트리스트"
      ],
      "every %s hours": [
        "매 %s 시간마다"
      ]
    }
  }
};