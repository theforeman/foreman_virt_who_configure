 locales['foreman_virt_who_configure'] = locales['foreman_virt_who_configure'] || {}; locales['foreman_virt_who_configure']['ka'] = {
  "domain": "foreman_virt_who_configure",
  "locale_data": {
    "foreman_virt_who_configure": {
      "": {
        "Project-Id-Version": "foreman_virt_who_configure 0.5.28",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2017-05-03 11:59+0000",
        "Last-Translator": "Temuri Doghonadze <temuri.doghonadze@gmail.com>, 2023",
        "Language-Team": "Georgian (https://app.transifex.com/foreman/teams/114/ka/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "ka",
        "Plural-Forms": "nplurals=2; plural=(n!=1);",
        "lang": "ka",
        "domain": "foreman_virt_who_configure",
        "plural_forms": "nplurals=2; plural=(n!=1);"
      },
      "1. Copy this configuration script to a safe directory.": [
        "1. კონფიგურაციის სკრიპტი უსაფრთხო საქაღალდეში დააკოპირეთ."
      ],
      "2. Make the script executable and run it.": [
        "2. გახადეთ სკრიპტი გაშვებადი და შეასრულეთ ის."
      ],
      "3. Delete the script.": [
        "3. წაშალეთ სკრიპტი."
      ],
      "A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses.": [
        "ჰოსტის სახელების ან დომენების ან IP მისამართების მძიმით გამოყოფილი სია პროქსის პარამეტრების უგულებელყოფისთვის. სურვილისამებრ, ეს შეიძლება დაყენდეს <code>*</code> პროქსის პარამეტრების გვერდის ავლით ყველა ჰოსტის სახელების დომენისთვის ან IP მისამართისთვის."
      ],
      "A plugin to make virt-who configuration easy": [
        "დამატება virt-who-ის კონფიგურაციის გასაადვილებლად"
      ],
      "Account name by which virt-who is to connect to Nutanix AHV.": [
        "ანგარიშის სახელი, რომლითაც virt-who Nutanix AHV-ს უკავშირდება."
      ],
      "Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\\\\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information.": [
        "ანგარიშის სახელი, რომლითაც virt-who უნდა დაუკავშირდეს ჰიპერვიზორს, ფორმატში <code>domain_name\\\\account_name</code> . გაითვალისწინეთ, რომ მხოლოდ ერთი უკანა ხაზი გამოყოფს დომენის_სახელისა და ანგარიშის_სახელის მნიშვნელობებს. თუ იყენებთ დომენის ანგარიშს და გლობალური კონფიგურაციის ფაილს <code>/etc/virt-who.conf</code> , მაშინ საჭიროა <b>ორი</b> უკანა ხაზი. დამატებითი ინფორმაციისთვის იხილეთ <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase გადაწყვეტა როგორ გამოვიყენოთ windows დომენის ანგარიში virt-who-სთან</a> დამატებითი ინფორმაციისთვის."
      ],
      "Account name by which virt-who is to connect to the hypervisor.": [
        "ანგარიში, რომლითაც virt-who ჰაიპერვაიზორს უკავშირდება."
      ],
      "Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users.": [
        "ანგარიშის სახელი, რომლითაც virt-ვინ უნდა დაუკავშირდეს ჰიპერვიზორს. ნაგულისხმევად ეს არის <code>Administrator</code> . ალტერნატიული ანგარიშის გამოსაყენებლად შექმენით მომხმარებლის ანგარიში და მიანიშნეთ ეს ანგარიში შემდეგ ჯგუფებს (Windows 2012 სერვერი): Hyper-V ადმინისტრატორები და დისტანციური მართვის მომხმარებლები."
      ],
      "Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information.": [
        "ანგარიშის სახელი, რომლითაც virt-who ჰიპერვიზორს უნდა დაუკავშირდეს . Virt-who-s არ აქვს პაროლზე დაფუძნებული ავტორიზაციის მხარდაჭერა, თქვენ ხელით უნდა დააყენოთ SSH გასაღები. დამატებითი ინფორმაციისთვის იხილეთ <a href=\\\"https://access.redhat.com/solutions/1515983\\\"> Red Hat ცოდნის ბაზის გადაწყვეტა როგორ დავაკონფიგურიროთ virt-who KVM ჰოსტი </a>."
      ],
      "Account password by which virt-who is to connect to the hypervisor instance.": [
        "ანგარიშის პაროლი, რომლითაც virt-who ჰაიპერვაიზორს უკავშირდება."
      ],
      "Actions": [
        "ქმედებები"
      ],
      "Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "გამოიყენება მხოლოდ esx პროვაიდერის ტიპისთვის. ჰოსტები, რომელთა მშობლის (ჩვეულებრივ, ComputeResource) სახელი მითითებულია მძიმით გამოყოფილ სიაში ამ პარამეტრში, <b>არ</b> იქნება მოხსენებული. Wildcards და რეგულარული გამონათქვამები მხარდაჭერილია, მრავალი ჩანაწერი უნდა იყოს გამოყოფილი მძიმით. ჩასვით მნიშვნელობა ორ ბრჭყალებში, თუ ის შეიცავს სპეციალურ სიმბოლოებს, როგორიცაა მძიმე. ყველა ახალი ხაზის სიმბოლო წაიშლება შედეგად კონფიგურაციის ფაილში, თეთრი სივრცეები ამოღებულია დასაწყისიდან და ბოლოდან."
      ],
      "Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "გამოიყენება მხოლოდ esx პროვაიდერის ტიპისთვის. მოხსენებული იქნება მხოლოდ ჰოსტები, რომელთა მშობლის (ჩვეულებრივ, ComputeResource) სახელი მითითებულია მძიმით გამოყოფილ სიაში ამ პარამეტრში. Wildcards და რეგულარული გამონათქვამები მხარდაჭერილია, მრავალი ჩანაწერი უნდა იყოს გამოყოფილი მძიმით. ჩასვით მნიშვნელობა ორ ბრჭყალებში, თუ ის შეიცავს სპეციალურ სიმბოლოებს, როგორიცაა მძიმე. ყველა ახალი ხაზის სიმბოლო წაიშლება მიღებულ კონფიგურაციის ფაილში, თეთრი სივრცე ამოღებულია თავიდან და ბოლოდან."
      ],
      "Blacklist": [
        "შავი სია"
      ],
      "Configs": [
        "კონფიგურაციები"
      ],
      "Configuration Status": [
        "კონფიგურაციის სტატუსი"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details": [
        "კონფიგურაციის ფაილი, რომელიც შეიცავს დეტალებს კლასტერთან დაკავშირების და ავთენტიფიკაციის დეტალების შესახებ"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details.": [
        "კონფიგურაციის ფაილი, რომელიც შეიცავს დეტალებს კლასტერთან დაკავშირების და ავთენტიფიკაციის დეტალების შესახებ."
      ],
      "Configuration interval in minutes": [
        "კონფიგურაციის ინტერვალი წუთებში"
      ],
      "Configuration name": [
        "კონფიგურაციის სახელი"
      ],
      "Configuration numeric identifier": [
        "კონფიგურაცის რიცხვობრივი იდენტიფიკატორი"
      ],
      "Configuration script: ": [
        "კონფიგურაციის სკრიპტი: "
      ],
      "Config|Interval": [
        "კონფიგურაცია|ინტერვალი"
      ],
      "Config|Last Report": [
        "კონფიგურაცია|ბოლო ანგარიში"
      ],
      "Config|Name": [
        "კონფიგურაცია|სახელი"
      ],
      "Connection": [
        "კავშირი"
      ],
      "Container-native virtualization’s fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token.": [
        "კონტეინერის ვირტუალიზაციის სრული დომენური სახელი ან IP მისამართი. კლასტერთან დასაკავშირებლად საჭიროა მიუთითოთ გზა kubeconfig-მდე, რომელიც შეიცავს კავშირის დეტალებს და ავთენტიფიკაციის კოდს."
      ],
      "Copy to clipboard": [
        "ბუფერში კოპირება"
      ],
      "Count": [
        "რაოდენობა"
      ],
      "Create Config": [
        "კონფიგურაციის შექმნა"
      ],
      "Create a virt-who configuration": [
        "Virt-who-ის კონფიგურაცის შექმნა"
      ],
      "Delete a virt-who configuration": [
        "Virt-who-ის კონფიგურაცის წაშლა"
      ],
      "Delete virt-who configuration %s?": [
        "წავშალო Virt-who-ის კონფიგურაცია %s?"
      ],
      "Deploy": [
        "განთავსება"
      ],
      "Details": [
        "დეტალები"
      ],
      "Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "სხვადასხვა გამართვის მნიშვნელობის დაყენება შეუძლებელია ჰიპერვიზორზე, ამიტომ ის გავლენას მოახდენს ჰოსტზე ყველა სხვა განლაგებულ კონფიგურაციაზე, რომელზეც განთავსდება ეს კონფიგურაცია."
      ],
      "Download the script": [
        "სკრიპტის გადმოწერა"
      ],
      "Edit": [
        "ჩასწორება"
      ],
      "Edit Virt-who Config": [
        "Virt-who-ის კონფიგურაციის ჩასწორება"
      ],
      "Enable AHV debug": [
        "AHV -ის გამართვის ჩართვა"
      ],
      "Enable debugging output": [
        "დამატებითი ინფორმაციის გამოტანა"
      ],
      "Enable debugging output?": [
        "ჩავრთო დამატებითი ინფორმაციის გამოტანა?"
      ],
      "Every 12 hours": [
        "ყოველ 12 საათში"
      ],
      "Every 2 days": [
        "ყოველ 2 დღეში"
      ],
      "Every 2 hours": [
        "ყოველ 2 საათში"
      ],
      "Every 24 hours": [
        "ყოველ 24 საათში"
      ],
      "Every 3 days": [
        "ყოველ 3 დღეში"
      ],
      "Every 4 hours": [
        "ყოველ 4 საათში"
      ],
      "Every 8 hours": [
        "ყოველ 8 საათში"
      ],
      "Every hour": [
        "ყოველ საათში"
      ],
      "Exclude Hosts": [
        "ჰოსტების გამორიცხვა"
      ],
      "Exclude host parents": [
        "ჰოსტის მშობლების გამორიცხვა"
      ],
      "Exclude hosts": [
        "ჰოსტების გამორიცხვა"
      ],
      "Exclude hosts which cluster ID is specified in comma-separated list in this option will <b>NOT</b> be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Filter Hosts": [
        "ჰოსტების ფილტრი"
      ],
      "Filter host parents": [
        "ჰოსტის მშობლების ფილტრი"
      ],
      "Filter hosts": [
        "ჰოსტების ფილტრი"
      ],
      "Filtering": [
        "გაფილტვრა"
      ],
      "Foreman server FQDN": [
        "Foreman-ის სერვერის FQDN"
      ],
      "Foreman server’s fully-qualified host name, for example: foreman.example.com": [
        "Foreman-ის სერვერის სრული დომენური სახელი. მაგ: foreman.example.com"
      ],
      "Fully qualified host name or IP address of the hypervisor": [
        "ჰაიპერვაიზორის სრულ დომენური სახელი ან IP მისამართი"
      ],
      "General information": [
        "ზოგადი ინფორმაცია"
      ],
      "HTTP Proxy": [
        "HTTP პროქსი"
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers.": [
        "HTTP პროქსი, virt-who სერვერს შორისა და ჰიპერვიზორებსა და ვირტუალიზაციის მენეჯერებს შორის კომუნიკაციისთვის რომელიც უნდა იყოს გამოყენებული."
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used.": [
        "HTTP პროქსი, რომელიც უნდა იყოს გამოყენებული სერვერს შორის კომუნიკაციისთვის, რომელზეც მუშაობს virt-who და ჰიპერვიზორებსა და ვირტუალიზაციის მენეჯერებს შორის. თუ პროქსი არ გამოიყენება, დატოვეთ ცარიელი."
      ],
      "Hammer command: ": [
        "Hammer-ის ბრძანება: "
      ],
      "Help": [
        "დახმარება"
      ],
      "Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "ჰოსტები, რომლების uuid (ან ჰოსტის სახელი ან hwuuid, <code>hypervisor_id</code>-ზე დაფუძნებული) მითითებულია მძიმით გამოყოფილ სიაში ამ პარამეტრში, <b>არ</b> იქნება მოხსენებული. Wildcards და რეგულარული გამონათქვამები მხარდაჭერილია, მრავალი ჩანაწერი უნდა იყოს გამოყოფილი მძიმით. ჩასვით მნიშვნელობა ორ ბრჭყალებში, თუ ის შეიცავს სპეციალურ სიმბოლოებს, როგორიცაა მძიმე. ყველა ახალი ხაზის სიმბოლო წაიშლება შედეგად კონფიგურაციის ფაილში, თეთრი სივრცეები ამოღებულია დასაწყისიდან და ბოლოდან."
      ],
      "How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "რამდენად ხშირად უნდა შეამოწმოთ დაკავშირებული ჰიპერვიზორები ცვლილებებისთვის? ასევე გავლენას ახდენს რუკების შესახებ მოხსენების სიხშირეზე. რეკომენდირებული მნიშვნელობა უმეტეს გარემოსთვის არის ყოველ ორ საათში. სხვადასხვა ინტერვალის დაყენება შეუძლებელია ჰიპერვიზორზე, ამიტომ ის გავლენას მოახდენს ჰოსტზე ყველა სხვა განლაგებულ კონფიგურაციაზე, რომელზედაც განთავსდება ეს კონფიგურაცია."
      ],
      "Hypervisor ID": [
        "ჰაიპერვაიზორის ID"
      ],
      "Hypervisor Password": [
        "ჰაიპერვაიზორის პაროლი"
      ],
      "Hypervisor Server": [
        "ჰაიპერვაიზორის სერვერი"
      ],
      "Hypervisor Type": [
        "ჰაიპერვაიზორის ტიპი"
      ],
      "Hypervisor Username": [
        "ჰაიპერვაიზორის მომხმარებლის სახელი"
      ],
      "Hypervisor blacklist, applicable only when filtering mode is set to 2. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "ჰიპერვიზორის შავი სია, გამოიყენება მხოლოდ მაშინ, როდესაც ფილტრაციის რეჟიმი დაყენებულია 2-ზე. Wildcards და რეგულარული გამონათქვამები მხარდაჭერილია. ჩანაწერები მძიმით უნდა იყოს გამოყოფილი."
      ],
      "Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist": [
        "ჰიპერვიზორის ფილტრაციის რეჟიმი, %{unlimited} ნიშნავს ფილტრაციის გარეშე, %{whitelist} ნიშნავს თეთრ სიას, %{blacklist} ნიშნავს შავ სიას"
      ],
      "Hypervisor password, required for all hypervisor types except for libvirt/kubevirt.": [
        "ჰაიპერვაიზორის პაროლი, რომელიც libvirt/kubevirt-ის გარდა ყველას სჭირდება."
      ],
      "Hypervisor type": [
        "ჰაიპერვაიზორის ტიპი"
      ],
      "Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "Hypervisor whitelist, გამოიყენება მხოლოდ მაშინ, როდესაც ფილტრაციის რეჟიმი დაყენებულია 1-ზე. Wildcards და რეგულარული გამონათქვამები მხარდაჭერილია, ჩანაწერები მძიმით უნდა იყოს გამოყოფილი."
      ],
      "If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-who’s access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent.": [
        "თუ თქვენ გაქვთ ჰიბრიდული გარემო ვირტუალური მანქანებით, რომლებიც მუშაობენ Red Hat Enterprise Linux-ით და სხვა ოპერაციული სისტემებით, შეგიძლიათ შეზღუდოთ Virt-Who's წვდომა ჰოსტებზე. მაგალითად, თუ ზოგიერთი ჰიპერვიზორი მასპინძლობს მხოლოდ Microsoft Windows Server-ის ინსტანციებს, არანაირი სარგებელი არ არის ამ ჰიპერვიზორების მოხსენებაში virt-who აგენტის მიერ."
      ],
      "Ignore Proxy": [
        "პროქსის იგნორი"
      ],
      "Ignore proxy": [
        "პროქსის იგნორი"
      ],
      "Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses.": [
        "პროქსის იგნორირება. ჰოსტის სახელების ან დომენების ან IP მისამართების მძიმით გამოყოფილი სია პროქსის პარამეტრების უგულებელყოფისთვის. სურვილისამებრ, ეს შეიძლება დაყენდეს *-ზე პროქსის პარამეტრების გვერდის ავლით ყველა ჰოსტის სახელების დომენისთვის ან IP მისამართისთვის."
      ],
      "Interval": [
        "ინტერვალი"
      ],
      "Interval was not provided": [
        "ინტერვალი მითითებული არაა"
      ],
      "Latest Configurations Without Change": [
        "ბოლო კონფიგურაციები ცვლილებების გარეშე"
      ],
      "Libvirt server’s fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. Make sure you setup root's SSH key on target host for a user specified at hypervisor username field": [
        ""
      ],
      "List of virt-who configurations": [
        "Virt-who-ის კონფიგურაციების სია"
      ],
      "List of virt-who configurations per organization": [
        "Virt-who-ის კონფიგურაციების სია თითოეული ორგანიზაციისთვის"
      ],
      "Microsoft Hyper-V fully qualified host name or IP address.": [
        "Microsoft Hyper-V-ის სრული დომენური სახელი ან IP მისამართი."
      ],
      "Name": [
        "სახელი"
      ],
      "Name of this configuration, e.g. the name of the hypervisor": [
        "კონფიგურაციის სახელი. მაგ. ჰაიპერვაიზორის სახელი"
      ],
      "New Config": [
        "ახალი კონფიგურაცია"
      ],
      "New Virt-who Config": [
        "Virt-who-ის ახალი კონფიგურაცია"
      ],
      "Newer version of virt-who is required, minimum version is %s": [
        "საჭიროა virt-who-ის არსებულზე ახალი ვერსია. მინიმალური ვერსიაა %s"
      ],
      "No Change": [
        "ცვლილებების გარეშე"
      ],
      "No Report Yet": [
        "ანგარიშების გარეშე"
      ],
      "No Reports": [
        "ანგარიშების გარეშე"
      ],
      "No change": [
        "ცვლილების გარეშე"
      ],
      "No configuration found": [
        "კონფიგურაციები ნაპოვნი არაა"
      ],
      "Nutanix AHV’s IP address.": [
        "Nutanix AHV -ის IP მისამართი."
      ],
      "OK": [
        "დიახ"
      ],
      "On the target virt-who host:": [
        "Virt-who-ის სამიზნე ჰოსტზე:"
      ],
      "On this page you can define virt-who configurations for your hypervisors.": [
        "ამ გვერდზე თქვენ შეგიძლიათ განსაზღვროთ virt-who-ის კონფიგურაციები თქვენი ჰიპერვიზორებისთვის."
      ],
      "One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment.": [
        "Virt-who-ის ერთი კონფიგურაცია წარმოადგენს ერთ კონფიგურაციის ფაილს /etc/virt-who.d დირექტორიაში და ასახავს ერთ ჰიპერვიზორს, ორგანიზაციას და სასიცოცხლო ციკლის გარემოს."
      ],
      "Only hosts which cluster ID is specified in comma-separated list in this option will be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "მოხსენებული იქნება მხოლოდ ჰოსტები, რომლებიც uuid (ან ჰოსტის სახელი ან hwuuid, <code>hypervisor_id</code>-ზე დაფუძნებული) მითითებულია მძიმით გამოყოფილ სიაში ამ პარამეტრში. Wildcards და რეგულარული გამონათქვამები მხარდაჭერილია, ჩანაწერები მძიმით უნდა იყოს გამოყოფილი. ჩასვით მნიშვნელობა ორ ბრჭყალში, თუ ის შეიცავს ისეთ სიმბოლოებს, როგორიცაა მძიმე. ყველა ახალი ხაზის სიმბოლო წაიშლება შედეგად კონფიგურაციის ფაილში, თეთრი სივრცეები ამოღებულია დასაწყისიდან და ბოლოდან."
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled": [
        "AHV-ს შიდა გამართვისთვის საჭიროა გამართვის ინფორმაციის გამოტანის პარამეტრის ჩართვა. როცა ორივე პარამეტრი ჩართულია, AHV-ის გასამართად დამატებითი ინფორმაცია იქნება ხელმისაწვდომი"
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled ": [
        "AHV-ს შიდა გამართვისთვის საჭიროა გამართვის ინფორმაციის გამოტანის პარამეტრის ჩართვა. როცა ორივე პარამეტრი ჩართულია, AHV-ის გასამართად დამატებითი ინფორმაცია იქნება ხელმისაწვდომი "
      ],
      "Organization of the virt-who configuration": [
        "Virt-who-ის კონფიგურაციის ორგნიზაცია"
      ],
      "Overview": [
        "მიმოხილვა"
      ],
      "Owner": [
        "მფლობელი"
      ],
      "Owner was not provided": [
        "მფლობელი მითითებული არაა"
      ],
      "Path to kubeconfig file": [
        "ბილიკი kubeconfig ფაილამდე"
      ],
      "Prism Central": [
        "Prism ცენტრალი"
      ],
      "Prism Element": [
        "Prism ელემენტი"
      ],
      "Prism Flavor": [
        "Prism -ის ვარიანტი"
      ],
      "Renders a deploy script for the specified virt-who configuration": [
        "Virt-who-ს მითითებული კონფიგურაციის განშლის სკრიპტის რენდერი"
      ],
      "Schedule": [
        "განრიგი"
      ],
      "Select the Prism flavor you are connecting to": [
        "აირჩიეთ Prism-ის ტიპი, რომელსაც უკავშირდებით"
      ],
      "Show a virt-who configuration": [
        "Virt-who-ის კონფიგურაცის ჩვენება"
      ],
      "Specifies how the hypervisor will be identified.": [
        "მიუთითებს, როგორ გამოვიცნოთ ჰაიპერვაიზორის ტიპი."
      ],
      "Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.\\n                              Note that some virtualization backends don't have all of them implemented.\\n                              Default is <b>hostname</b>, which provides more meaningful hypervisor\\n                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.\\n                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager.": [
        "განსაზღვრავს, რომ ჰიპერვიზორები იდენტიფიცირებული იქნება მათი <b>ჰოსტის სახელით</b> , <b>uuid</b> ან <b>hwuuid</b>.\\n                              გაითვალისწინეთ, რომ ზოგიერთ ვირტუალიზაციის უკანაბოლოს ყველა მათგანი არ აქვს დანერგილი. \\n                               ნაგულისხმებია <b>ჰოსტის სახელი</b> , რომელიც უზრუნველყოფს ჰიპერვიზორის უფრო მნიშვნელოვან სახელებს. \\n                              მაგრამ შეიძლება გამოიწვიოს ჰიპერვიზორის დუბლირებული რეგისტრაცია, თუ ჰოსტს სახელი გადაერქვა. ამის თავიდან ასაცილებლად, ამის ნაცვლად შეგიძლიათ გამოიყენოთ <b>uuid</b> . <b>hwuuid</b> ვრცელდება მხოლოდ esx-ზე. ეს ფუნქცია გამიზნულია, რომ შეიქმნას virt-who-ს თავდაპირველ გაშვებამდე. მოგვიანებით მისი შეცვლა გამოიწვევს გამოწერების მენეჯერში ჩანაწერების დუბლირებას."
      ],
      "Status": [
        "სტატუსი"
      ],
      "Success": [
        "წარმატება"
      ],
      "The configuration was not deployed yet or the virt-who was unable to report the status": [
        "კონფიგურაცია ჯერ არ იყო განლაგებული ან Virt-მა ვერ შეძლო სტატუსის შესახებ შეტყობინება"
      ],
      "The virt-who report arrived within the interval": [
        "Virt-who-ის ანგარიში ინტერვალში იქნა გამოთხოვილი"
      ],
      "The virt-who report has not arrived within the interval, which indicates there was no change on hypervisor": [
        "Virt-who-ის ანგარიში არ მოვიდა ინტერვალის ფარგლებში, რაც მიუთითებს, რომ ჰიპერვიზორზე ცვლილება არ მომხდარა"
      ],
      "To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution.": [
        "ახალი კონფიგურაციის დასადგენად დააჭირეთ ღილაკს New Config და შეავსეთ ფორმა. მას შემდეგ რაც მიაწოდებთ ყველა საჭირო ინფორმაციას, წარმოიქმნება virt-who კონფიგურაციის სკრიპტი. შეგიძლიათ ან ხელით დააინსტალიროთ სკრიპტის კოპირებით, ან განათავსოთ იგი არჩეულ სამიზნე ჰოსტზე დისტანციური შესრულების საშუალებით."
      ],
      "Total Configurations": [
        "კონფიგურაციები ჯამში"
      ],
      "Unable to create sysconfig file": [
        "Sysconfig-ის ფაილის შექმნა შეუძლებელია"
      ],
      "Unable to create virt-who config file": [
        "Virt-who-ის კონფიგურაციის ფაილის შექმნა სეუძლებელია"
      ],
      "Unable to enable virt-who service using systemctl": [
        "Virt-who-ის სერვისის systemctl-ით შექმნა შეუძლებელია"
      ],
      "Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository": [
        "შეუძლებელია virt-who პაკეტის დაყენება, დარწმუნდით, რომ ჰოსტი სწორად არის გამოწერილი და აქვს წვდომა katello-host-tools-ის საცავზე"
      ],
      "Unable to start virt-who service, please see virt-who logs for more details": [
        "Virt-who-ის სერვსის გაშვების შეცდომა. მეტი დეტალებისთვის იხილეთ virt-who-ის ჟურნალი"
      ],
      "Unknown": [
        "უცნობი"
      ],
      "Unknown configuration status": [
        "კონფიგურაციის უცნობი სტატუსი"
      ],
      "Unknown configuration status, caused by unexpected conditions": [
        "კონფიგურაციის უცნობი სტატუსი. გამოწვეულია გაუთვალისწინებელი პირობებით"
      ],
      "Unlimited": [
        "შეუზღუდავი"
      ],
      "Update a virt-who configuration": [
        "Virt-who-ის კონფიგურაცის განახლება"
      ],
      "Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host:": [
        "გამოიყენეთ ან hammer ბრძანება ან ქვემოთ მოცემული სკრიპტი ამ კონფიგურაციის განსათავსებლად. ორივეს სჭირდება root პრივილეგიები. გაუშვით ერთ-ერთი მათგანი სამიზნე ჰოსტზე, რომელსაც აქვს წვდომა katello-host-tools-ის საცავზე და გაუშვებს virt-who reporting, სასურველია Foreman-ის ჰოსტი:"
      ],
      "VMware vCenter server’s fully qualified host name or IP address.": [
        "VMware vCenter-ის სერვერის სრული დომენური სახელი ან IP მისამართი."
      ],
      "Virt-who Configs Status": [
        "Virt-who-ის კონფიგურაციების სტატუსი"
      ],
      "Virt-who Configuration %s": [
        "Virt-who-ის კონფიგურაცია %s"
      ],
      "Virt-who Configurations": [
        "Virt-who-ის კონფიგურაციები"
      ],
      "Virt-who Configurations Status": [
        "Virt-who-ის კონფიგურაციის სტატუსი"
      ],
      "Whitelist": [
        "თეთრი სია"
      ],
      "every %s hours": [
        "ყოველ %s საათში"
      ]
    }
  }
};