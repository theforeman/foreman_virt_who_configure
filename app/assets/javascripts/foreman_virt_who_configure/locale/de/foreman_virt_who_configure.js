 locales['foreman_virt_who_configure'] = locales['foreman_virt_who_configure'] || {}; locales['foreman_virt_who_configure']['de'] = {
  "domain": "foreman_virt_who_configure",
  "locale_data": {
    "foreman_virt_who_configure": {
      "": {
        "Project-Id-Version": "foreman_virt_who_configure 0.5.26",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2017-05-03 11:59+0000",
        "Last-Translator": "Bryan Kearney <bryan.kearney@gmail.com>, 2025",
        "Language-Team": "German (https://app.transifex.com/foreman/teams/114/de/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "de",
        "Plural-Forms": "nplurals=2; plural=(n != 1);",
        "lang": "de",
        "domain": "foreman_virt_who_configure",
        "plural_forms": "nplurals=2; plural=(n != 1);"
      },
      "1. Copy this configuration script to a safe directory.": [
        "1. Kopiere dieses Konfigurations-Skript in ein sicheres Verzeichnis."
      ],
      "2. Make the script executable and run it.": [
        "2. Mache das Skript ausführbar und führe es aus."
      ],
      "3. Delete the script.": [
        "3. Lösche das Skript."
      ],
      "A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses.": [
        "Eine durch Kommas getrennte Liste von Hostnamen oder Domänen oder IP-Adressen, für die Proxy-Einstellungen ignoriert werden sollen. Optional kann dies auf <code> * </code>gesetzt werden, um die Proxy-Einstellungen für alle Hostnamen-Domains oder IP-Adressen zu umgehen."
      ],
      "A plugin to make virt-who configuration easy": [
        "Plugin um virt-who Konfiguration einfacher zu machen"
      ],
      "Account name by which virt-who is to connect to Nutanix AHV.": [
        ""
      ],
      "Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\\\\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information.": [
        "Kontoname, über den sich virt-who mit dem Hypervisor verbinden soll, im Format <code>Domänenname\\\\Kontoname </code>. Beachten Sie, dass nur ein einzelner umgekehrter Schrägstrich die Werte für Domänenname und Kontoname trennt. Wenn Sie ein Domänenkonto und die globale Konfigurationsdatei <code> /etc/virt-who.conf </code>verwenden, sind <b>zwei </b> umgekehrte Schrägstriche erforderlich. Weitere Informationen finden Sie in der <a href=\\\"https://access.redhat.com/solutions/1270223\\\"> Red Hat Knowledgebase-Lösung How to use a windows domain account with virt-who </a>für weitere Informationen."
      ],
      "Account name by which virt-who is to connect to the hypervisor.": [
        "Kontoname, über den sich virt-who mit dem Hypervisor verbinden soll."
      ],
      "Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users.": [
        "Kontoname, über den sich virt-who mit dem Hypervisor verbinden soll. Standardmäßig <code> ist dies Administrator </code> . Um ein alternatives Konto zu verwenden, erstellen Sie ein Benutzerkonto und weisen Sie dieses Konto den folgenden Gruppen zu (Windows 2012 Server): Hyper-V-Administratoren und Remoteverwaltungsbenutzer."
      ],
      "Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information.": [
        "Kontoname, über den sich virt-who mit dem Hypervisor verbinden soll. Virt-who unterstützt keine passwortbasierte Authentifizierung, Sie müssen den SSH-Schlüssel manuell einrichten. Weitere Informationen finden Sie in der <a href=\\\"https://access.redhat.com/solutions/1515983\\\"> Red Hat Knowledgebase-Lösung So konfigurieren Sie virt-who für einen KVM-Host </a>."
      ],
      "Account password by which virt-who is to connect to the hypervisor instance.": [
        "Kontokennwort, mit dem sich virt-who mit der Hypervisor-Instanz verbinden soll."
      ],
      "Actions": [
        "Aktionen"
      ],
      "Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Gilt nur für den esx-Anbietertyp. Hosts, deren übergeordneter Name (normalerweise ComputeResource) in dieser Option in einer durch Kommas getrennten Liste angegeben ist, werden <b> NICHT </b> gemeldet. Wildcards und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Komma getrennt werden. Setzen Sie den Wert in doppelte Anführungszeichen, wenn er Sonderzeichen wie Komma enthält. Alle neuen Zeilenzeichen werden in der resultierenden Konfigurationsdatei entfernt, Leerzeichen werden am Anfang und am Ende entfernt."
      ],
      "Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Gilt nur für den esx-Anbietertyp. Nur Hosts, deren übergeordneter Name (normalerweise ComputeResource) in dieser Option in einer durch Kommas getrennten Liste angegeben ist, werden gemeldet. Wildcards und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Komma getrennt werden. Setzen Sie den Wert in doppelte Anführungszeichen, wenn er Sonderzeichen wie Komma enthält. Alle neuen Zeilenzeichen werden in der resultierenden Konfigurationsdatei entfernt, Leerzeichen werden am Anfang und am Ende entfernt."
      ],
      "Blacklist": [
        "Blacklist"
      ],
      "Configs": [
        "Konfigurationen"
      ],
      "Configuration Status": [
        "Konfigurationsstatus"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details": [
        "Konfigurationsdatei mit Details zur Verbindung mit dem Cluster und Authentifizierungsdetails"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details.": [
        ""
      ],
      "Configuration interval in minutes": [
        "Konfigurations-Interval in Minuten"
      ],
      "Configuration name": [
        "Konfigurationsname"
      ],
      "Configuration numeric identifier": [
        "Numerischer Konfigurations Identifikator"
      ],
      "Configuration script: ": [
        "Konfigurationsskript:"
      ],
      "Config|Interval": [
        "Intervall"
      ],
      "Config|Last Report": [
        "Letzer Bericht"
      ],
      "Config|Name": [
        "Name"
      ],
      "Connection": [
        "Verbindung"
      ],
      "Container-native virtualization’s fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token.": [
        "Vollständig qualifizierter Hostname oder IP-Adresse der containernativen Virtualisierung. Um eine Verbindung zum Cluster herzustellen, muss der Pfad zu kubeconfig angegeben werden, der Verbindungsdetails und Authentifizierungstoken enthält."
      ],
      "Copy to clipboard": [
        "In Zwischenablage abspeichern"
      ],
      "Count": [
        "Zähler"
      ],
      "Create Config": [
        "Konfiguration erstellen"
      ],
      "Create a virt-who configuration": [
        "Virt-Who-Konfiguration erstellen"
      ],
      "Delete a virt-who configuration": [
        "Virt-Who-Konfiguration löschen"
      ],
      "Delete virt-who configuration %s?": [
        "Virt-who Konfiguration %s löschen?"
      ],
      "Deploy": [
        "Einsetzen"
      ],
      "Details": [
        "Details"
      ],
      "Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "Für jeden Hypervisor kann kein unterschiedlicher Debug-Wert festgelegt werden, daher wirkt sich dies auf alle anderen bereitgestellten Konfigurationen auf dem Host aus, auf dem diese Konfiguration bereitgestellt wird."
      ],
      "Download the script": [
        "Das Skript herunterladen"
      ],
      "Edit": [
        "Bearbeiten"
      ],
      "Edit Virt-who Config": [
        "Virt-who bearbeiten"
      ],
      "Enable AHV debug": [
        ""
      ],
      "Enable debugging output": [
        "Debugausgabe aktivieren"
      ],
      "Enable debugging output?": [
        "Debug-Ausgabe aktivieren?"
      ],
      "Every 12 hours": [
        "Alle 12 Stunden"
      ],
      "Every 2 days": [
        "Alle 2 Tage"
      ],
      "Every 2 hours": [
        "Alle 2 Stunden"
      ],
      "Every 24 hours": [
        "Alle 24 Stunden"
      ],
      "Every 3 days": [
        "Alle 3 Tage"
      ],
      "Every 4 hours": [
        "Alle 4 Stunden"
      ],
      "Every 8 hours": [
        "Alle 8 Stunden"
      ],
      "Every hour": [
        "Jede Stunde"
      ],
      "Exclude Hosts": [
        "Hosts ausschließen"
      ],
      "Exclude host parents": [
        "Gast-Hosts ausschließen"
      ],
      "Exclude hosts": [
        "Hosts ausschließen"
      ],
      "Exclude hosts which cluster ID is specified in comma-separated list in this option will <b>NOT</b> be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Filter Hosts": [
        "Hosts filtern"
      ],
      "Filter host parents": [
        "Gast-Hosts filtern"
      ],
      "Filter hosts": [
        "Hosts filtern"
      ],
      "Filtering": [
        "FIltern"
      ],
      "Foreman server FQDN": [
        "Foreman-Server FQDN"
      ],
      "Foreman server’s fully-qualified host name, for example: foreman.example.com": [
        "Der vollständig qualifizierte Hostname des Foreman-Servers, zum Beispiel: foreman.example.com"
      ],
      "Fully qualified host name or IP address of the hypervisor": [
        "Vollqualifizierter Hostname oder IP-Adresse des Hypervisors"
      ],
      "General information": [
        "Allgemeine Informationen"
      ],
      "HTTP Proxy": [
        "HTTP-Proxy"
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers.": [
        "HTTP-Proxy, der für die Kommunikation zwischen dem Server, auf dem virt-who läuft, und den Hypervisoren und Virtualisierungsmanagern verwendet werden soll."
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used.": [
        "HTTP-Proxy, der für die Kommunikation zwischen dem Server, auf dem virt-who läuft, und den Hypervisoren und Virtualisierungsmanagern verwendet werden soll. Lassen Sie dieses Feld leer, wenn kein Proxy verwendet wird."
      ],
      "Hammer command: ": [
        "Hammer-Befehl:"
      ],
      "Help": [
        "Hilfe"
      ],
      "Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Hosts, deren uuid (oder hostname oder hwuuid, basierend auf <code> hypervisor_id </code>) in dieser Option in einer durch Kommas getrennten Liste angegeben ist, werden<b> NICHT </b> gemeldet. Wildcards und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Komma getrennt werden. Setzen Sie den Wert in doppelte Anführungszeichen, wenn er Sonderzeichen wie Komma enthält. Alle neuen Zeilenzeichen werden in der resultierenden Konfigurationsdatei entfernt, Leerzeichen werden am Anfang und am Ende entfernt."
      ],
      "How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "Wie oft werden verbundene Hypervisoren auf Änderungen überprüft? Beeinflusst auch, wie oft eine Zuordnung gemeldet wird. Der empfohlene Wert für die meisten Umgebungen ist alle zwei Stunden. Für jeden Hypervisor kann kein unterschiedliches Intervall festgelegt werden, daher wirkt sich dies auf alle anderen bereitgestellten Konfigurationen auf dem Host aus, auf dem diese Konfiguration bereitgestellt wird."
      ],
      "Hypervisor ID": [
        "Hypervisor ID"
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
        "Hypervisor-Blacklist, nur anwendbar, wenn der Filtermodus auf 2 gesetzt ist. Wildcards und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Kommas getrennt werden."
      ],
      "Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist": [
        "Hypervisor-Filtermodus, %{unlimited} bedeutet keine Filterung, %{whitelist} bedeutet Whitelist, %{blacklist} bedeutet Blacklist"
      ],
      "Hypervisor password, required for all hypervisor types except for libvirt/kubevirt.": [
        ""
      ],
      "Hypervisor type": [
        "Hypervisor-Typ"
      ],
      "Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "Hypervisor-Whitelist, nur anwendbar, wenn der Filtermodus auf 1 gesetzt ist. Platzhalter und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Kommas getrennt werden."
      ],
      "If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-who’s access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent.": [
        "Wenn Sie eine Hybridumgebung mit virtuellen Maschinen betreiben, auf denen Red Hat Enterprise Linux und andere Betriebssysteme ausgeführt werden, möchten Sie möglicherweise den Umfang des Zugriffs von virt-who auf Hosts einschränken. Wenn beispielsweise einige Hypervisoren nur Microsoft Windows Server-Instanzen hosten, hat es keinen Vorteil, wenn diese Hypervisoren vom virt-who-Agenten gemeldet werden."
      ],
      "Ignore Proxy": [
        "Proxy ignorieren"
      ],
      "Ignore proxy": [
        "Proxy ignorieren"
      ],
      "Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses.": [
        "Proxy ignorieren. Eine durch Kommas getrennte Liste von Hostnamen oder Domänen oder IP-Adressen, für die Proxy-Einstellungen ignoriert werden sollen. Optional kann dies auf * gesetzt werden, um die Proxy-Einstellungen für alle Hostnamen-Domains oder IP-Adressen zu umgehen."
      ],
      "Interval": [
        "Intervall"
      ],
      "Interval was not provided": [
        "Intervall wurde nicht mitgeliefert"
      ],
      "Latest Configurations Without Change": [
        "Neueste Konfigurationen ohne Änderung"
      ],
      "Libvirt server’s fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. Make sure you setup root's SSH key on target host for a user specified at hypervisor username field": [
        ""
      ],
      "List of virt-who configurations": [
        "Liste der virt-who-Konfigurationen"
      ],
      "List of virt-who configurations per organization": [
        "Liste der virt-who-Konfigurationen pro Organisation"
      ],
      "Microsoft Hyper-V fully qualified host name or IP address.": [
        "Vollständig qualifizierter Microsoft Hyper-V-Hostname oder IP-Adresse."
      ],
      "Name": [
        "Name"
      ],
      "Name of this configuration, e.g. the name of the hypervisor": [
        "Name der Konfiguration, z.B. der Name des Hypervisors"
      ],
      "New Config": [
        "Neue Konfiguration"
      ],
      "New Virt-who Config": [
        "Neue Virt-Who Konfiguration"
      ],
      "Newer version of virt-who is required, minimum version is %s": [
        "Neuere Version von virt-who ist erforderlich, Mindestversion ist %s"
      ],
      "No Change": [
        "Keine Änderung"
      ],
      "No Report Yet": [
        "Noch kein Bericht vorhanden"
      ],
      "No Reports": [
        "Keine Berichte"
      ],
      "No change": [
        "Keine Änderungen"
      ],
      "No configuration found": [
        "Keine Konfiguration gefunden"
      ],
      "Nutanix AHV’s IP address.": [
        ""
      ],
      "OK": [
        "OK"
      ],
      "On the target virt-who host:": [
        "Auf dem Ziel-virt-who-Host:"
      ],
      "On this page you can define virt-who configurations for your hypervisors.": [
        "Auf dieser Seite können Sie virt-who-Konfigurationen für Ihre Hypervisoren definieren."
      ],
      "One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment.": [
        "Eine virt-who-Konfiguration stellt eine Konfigurationsdatei im Verzeichnis /etc/virt-who.d dar und wird einem einzelnen Hypervisor, einer Organisation und einer Lebenszyklusumgebung zugeordnet."
      ],
      "Only hosts which cluster ID is specified in comma-separated list in this option will be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Nur Hosts, deren uuid (oder hostname oder hwuuid, basierend auf <code> hypervisor_id </code>) in dieser Option in einer durch Kommas getrennten Liste angegeben ist, werden gemeldet. Wildcards und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Komma getrennt werden. Setzen Sie den Wert in doppelte Anführungszeichen, wenn er Sonderzeichen wie Komma enthält. Alle neuen Zeilenzeichen werden in der resultierenden Konfigurationsdatei entfernt, Leerzeichen werden am Anfang und am Ende entfernt."
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled": [
        ""
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled ": [
        ""
      ],
      "Organization of the virt-who configuration": [
        "Organisation der virt-who Konfiguration"
      ],
      "Overview": [
        "Überblick"
      ],
      "Owner": [
        "Benutzer"
      ],
      "Owner was not provided": [
        "Besitzer wurde nicht mitgeliefert"
      ],
      "Path to kubeconfig file": [
        "Pfad zur kubeconfig-Datei"
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
        "Rendert ein Deploy-Skript für die angegebene virt-who-Konfiguration"
      ],
      "Schedule": [
        "Plan"
      ],
      "Select the Prism flavor you are connecting to": [
        ""
      ],
      "Show a virt-who configuration": [
        "Zeigen Sie eine virt-who-Konfiguration an"
      ],
      "Specifies how the hypervisor will be identified.": [
        "Spezifiziert wie der Hypervisor identifiziert wird."
      ],
      "Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.\\n                              Note that some virtualization backends don't have all of them implemented.\\n                              Default is <b>hostname</b>, which provides more meaningful hypervisor\\n                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.\\n                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager.": [
        "Gibt an, dass Hypervisoren durch ihren <b>Hostnamen </b>, <b> uuid </b> oder <b>hwuuid</b> identifiziert werden.\\nBeachten Sie, dass einige Virtualisierungs-Back-Ends nicht alle implementiert haben.\\nStandard ist <b> Hostname </b>, der einen aussagekräftigeren Hypervisor bietet\\nNamen, kann aber doppelte Hypervisor-Registrierungen verursachen, wenn der Host umbenannt wird. Um dies zu vermeiden, können Sie stattdessen <b> uuid </b> verwenden. <b> hwuuid </b>gilt nur für esx.\\n This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager."
      ],
      "Status": [
        "Status"
      ],
      "Success": [
        "Erfolg"
      ],
      "The configuration was not deployed yet or the virt-who was unable to report the status": [
        "Die Konfiguration wurde noch nicht bereitgestellt oder der virt-who konnte den Status nicht melden"
      ],
      "The virt-who report arrived within the interval": [
        "Der virt-who-Bericht ist innerhalb der Frist eingetroffen"
      ],
      "The virt-who report has not arrived within the interval, which indicates there was no change on hypervisor": [
        "Der virt-who-Bericht ist nicht innerhalb des Intervalls angekommen, was darauf hinweist, dass auf dem Hypervisor keine Änderung stattgefunden hat"
      ],
      "To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution.": [
        "Um eine neue Konfiguration zu definieren, klicken Sie auf die Schaltfläche Neue Konfiguration und füllen Sie das Formular aus. Nachdem Sie alle erforderlichen Informationen eingegeben haben, wird ein virt-who-Konfigurationsskript generiert. Sie können es entweder manuell installieren, indem Sie das Skript kopieren, oder es über Remote Execution auf einem ausgewählten Zielhost bereitstellen."
      ],
      "Total Configurations": [
        "Gesamtkonfigurationen"
      ],
      "Unable to create sysconfig file": [
        "Es konnte keine sysconfig Datei angelegt werden"
      ],
      "Unable to create virt-who config file": [
        "Virt-Who Konfigurationsdatei konnte nicht erstellt werden"
      ],
      "Unable to enable virt-who service using systemctl": [
        "virt-who-Dienst kann nicht mit systemctl aktiviert werden "
      ],
      "Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository": [
        "Das virt-who-Paket kann nicht installiert werden, stellen Sie sicher, dass der Host richtig abonniert ist und Zugriff auf das katello-host-tools-Repository hat"
      ],
      "Unable to start virt-who service, please see virt-who logs for more details": [
        "Der virt-who-Dienst kann nicht gestartet werden. Weitere Informationen finden Sie in den virt-who-Protokollen."
      ],
      "Unknown": [
        "Unbekannt"
      ],
      "Unknown configuration status": [
        "Unbekannter Konfigurationsstatus"
      ],
      "Unknown configuration status, caused by unexpected conditions": [
        "Unbekannter Konfigurationsstatus, verursacht durch unbekannte Umstände"
      ],
      "Unlimited": [
        "Unbegrenzt"
      ],
      "Update a virt-who configuration": [
        "Virt-Who-Konfiguration aktualisieren"
      ],
      "Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host:": [
        "Verwenden Sie entweder den Befehl hammer oder das folgende Skript, um diese Konfiguration bereitzustellen. Beide benötigen Root-Rechte. Führen Sie einen davon auf dem Zielhost aus, der Zugriff auf das katello-host-tools-Repository hat und das virt-who-Reporting ausführt, vorzugsweise Foreman-Host:"
      ],
      "VMware vCenter server’s fully qualified host name or IP address.": [
        "Vollständig qualifizierter Hostname oder IP-Adresse des VMware vCenter-Servers."
      ],
      "Virt-who Configs Status": [
        "Virt-who Konfigurationsstatus"
      ],
      "Virt-who Configuration %s": [
        "Virt-who-Konfiguration %s"
      ],
      "Virt-who Configurations": [
        "Virt-who Konfigurationen"
      ],
      "Virt-who Configurations Status": [
        "Virt-who Konfigurationsstatus"
      ],
      "Whitelist": [
        "Whitelist"
      ],
      "every %s hours": [
        "Alle %s Stunden"
      ]
    }
  }
};