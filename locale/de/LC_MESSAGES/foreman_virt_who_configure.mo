��    �      �    �      @  6   A  )   x     �  �   �  ,   �     �    �  ?   �      5  <  L   r     �     �     �  �  �  �  �     �     �  	   �  %   �     �            d   "  !   �     �      �     �     �            
   #  �   .               7     =     D     R     h     ~     �     �     �     �     �            !   1     S     Z     b     w  �        '      /      8      L      Q      f      m      �      �      �      �      �      �      �      �      �   
   !     !     %!     :!     H!     O!     ^!     n!     {!     �!     �!  	   �!     �!  N   �!  9    "     Z"     n"  !   �"  
   �"  �   �"  �   I#     $     $  �  $  H  �%     *'  �   8'  v   �'     T(  �   d(     	)     )  T  ()     }*     �*  �   �*     f+     m+     �+     �+     �+     �+  /   �+     ,     ,     &,     ;,     P,     j,     z,  $   �,    �,     �-  0   �-  :   ".  ;   ].  
   �.     �.  <   �.  	   �.     �.  
   /  	   /     "/     9/     </  I   Y/  �   �/  �  =0  *   2     ,2     52     ;2     R2     i2     �2     �2     �2     �2  *   �2     �2     �2     	3      3     93     Q3  @   f3     �3     �3     �3     �3     �3  0   4  �  44     �6     �6     �6     
7     7  V   .7  /   �7  j   �7  *   8     K9     `9  %   �9  1   �9  }   �9  K   V:     �:     �:  =   �:  	   ;     ;     ;     /;     O;     c;     s;     �;     �;     �;      �;     �;  �   <  B   �<     A=     Q=     i=     �=     �=     �=  	   �=     �=  v  �=  D   b?  2   �?     �?    �?  4   A     7A  Z  RA  E   �C  H  �C  m  <E  O   �F     �F     G     G  !  )G    KI     bK  &   }K  	   �K  .   �K     �K     �K     L  \   L  "   zL     �L  (   �L     �L  	   �L     �L     M  
   M  �   M     N  (   )N     RN  	   ZN     dN     |N     �N     �N      �N     �N     �N     O     *O     ?O     PO  #   pO  	   �O     �O     �O     �O  �   �O     �P     �P     �P  
   �P     �P  
   �P     �P     Q     (Q     6Q     FQ     RQ     aQ     qQ     }Q     �Q     �Q     �Q     �Q     �Q     �Q     �Q     R     R     -R     @R     NR     dR     lR  ^   �R  ;   �R     S     4S  #   QS  
   uS  �   �S  �   T     �T     U    U  �  $W     �X  �   �X     �Y     Z  �   Z     �Z     �Z  �  [     �\     �\    �\     �]  "   �]  "    ^     #^     >^     Q^  ;   n^     �^     �^     �^     �^     �^     _  "   +_  &   N_  k  u_  "   �`  3   a  G   8a  5   �a     �a     �a  C   �a     )b     9b     Ub     db     vb     �b     �b  X   �b  �   c    �c  '   �e  
   f     f  !   f     7f     Jf     df     vf     �f     �f  2   �f     �f     �f     g  &   "g     Ig     `g  D   yg     �g  ,   �g  !   �g     h  )   h  3   Ch  x  wh     �j     �j     �j     k     %k  b   Ak  9   �k  �   �k  �  ql      n  /   n  9   Fn  :   �n  �   �n  n   [o  	   �o      �o  G   �o  
   =p     Hp  &   Vp  $   }p     �p     �p     �p      �p     q  '   (q  ,   Pq     }q  -  �q  P   �r     s     #s     As     [s     ts     �s  	   �s     �s     �   S           �      �   �   +       1           !   �   e       �       K   �   �   I   G   �      H      �               �   �   #       C      �   t       �   �          s   �   .   �          �   �   r   5   z   ;   �   i   (   3   j   u           Z   �                     �   F   =       �      b              v   6       �   �   c   `   �   	   �   {   �   �   W      �   d   ,   n   �           &   /         0   g          �   L   �   �   N   )       Q   y       [   �   �       a   T   A   '   �           �   O   p   �          �   4   �   �   7   �      �   X   �   D   �   U   �   x               -       �   �                  �   >       f       �   �                   k   P   �   :   \   �   }   q   �   @   �       �   <       _   �       9       �   V   ]   �      ~   Y       �   �       �   8                 ^                  l   *   �      M   E           �      
   $   �           "   �   h   �       R   J      ?       �   �   B   �              �       2   �      �   %       w      �      �   m       �       �   o                      |        1. Copy this configuration script to a safe directory. 2. Make the script executable and run it. 3. Delete the script. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses. A plugin to make virt-who configuration easy Abstract async task Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href="https://access.redhat.com/solutions/1270223">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information. Account name by which virt-who is to connect to the hypervisor. Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users. Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href="https://access.redhat.com/solutions/1515983">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information. Account password by which virt-who is to connect to the hypervisor instance. Action with sub plans Actions Agent action Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end. Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end. Attach subscriptions Auto attach subscriptions Blacklist Bulk generate applicability for hosts Combined Profile Update Configs Configuration Status Configuration file containing details about how to connect to the cluster and authentication details Configuration interval in minutes Configuration name Configuration numeric identifier Configuration script:  Config|Interval Config|Last Report Config|Name Connection Container-native virtualization’s fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token. Copy to clipboard Copy version units to library Count Create Create Config Create Export History Create Import History Create Package Group Create a virt-who configuration Delete Delete Activation Key Delete Lifecycle Environment Delete Package Group Delete Product Delete a virt-who configuration Delete virt-who configuration %s? Deploy Destroy Destroy Content Host Details Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed. Disable Discover Download the script Edit Edit Virt-who Config Enable Enable debugging output Enable debugging output? Errata mail Every 12 hours Every 2 days Every 2 hours Every 24 hours Every 3 days Every 4 hours Every 8 hours Every hour Exclude Hosts Exclude host parents Exclude hosts Export Export Library Fetch pxe files Filter Hosts Filter host parents Filter hosts Filtered index content Filtering Foreman server FQDN Foreman server’s fully-qualified host name, for example: foreman.example.com Fully qualified host name or IP address of the hypervisor General information Generate host applicability Generate repository applicability HTTP Proxy HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used. Hammer command:  Help Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end. How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed. Hypervisor ID Hypervisor blacklist, applicable only when filtering mode is set to 2. Wildcards and regular expressions are supported, multiple records must be separated by comma. Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist Hypervisor type Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma. Hypervisors Hypervisors update If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-who’s access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent. Ignore Proxy Ignore proxy Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses. Import Import Content View Version Import Default Content View Import Puppet classes Import facts Incremental Update Incremental Update of  Content View Version(s)  Index content Index errata Index module streams Index package groups Install Applicable Errata Instance update Interval was not provided Latest Configurations Without Change Libvirt server’s fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. If you use SSH, make sure you setup root's SSH key on target host for a user specified at hypervisor username field List of virt-who configurations List of virt-who configurations per organization Microsoft Hyper-V fully qualified host name or IP address. Name of this configuration, e.g. the name of the hypervisor New Config New Virt-who Config Newer version of virt-who is required, minimum version is %s No Change No Report Yet No Reports No change No configuration found OK On the target virt-who host: On this page you can define virt-who configurations for your hypervisors. One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment. Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end. Organization of the virt-who configuration Overview Owner Owner was not provided Package Profile Update Path to kubeconfig file Product Create Promote Promotion to Environment Publish Publish Lifecycle Environment Repositories Reindex subscriptions Remove Content Remove Version Remove Versions and Associations Remove from Environment Remove subscriptions Renders a deploy script for the specified virt-who configuration Report Republish Version Repositories Run Sync Plan: Schedule Show a virt-who configuration Specifies how the hypervisor will be identified. Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.
                              Note that some virtualization backends don't have all of them implemented.
                              Default is <b>hostname</b>, which provides more meaningful hypervisor
                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.
                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager. Status Success Sync capsule Synchronize Synchronize smart proxy The configuration was not deployed yet or the virt-who was unable to report the status The virt-who report arrived within the interval The virt-who report has not arrived within the interval, which indicates there was no change on hypervisor To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution. Total Configurations Unable to create sysconfig file Unable to create virt-who config file Unable to enable virt-who service using systemctl Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository Unable to start virt-who service, please see virt-who logs for more details Unknown Unknown configuration status Unknown configuration status, caused by unexpected conditions Unlimited Update Update Content Overrides Update a virt-who configuration Update content urls Update for host Update http proxy Update http proxy details Update redhat repository Update release version for host Updating System Purpose for host Upload into Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host: VMware vCenter server’s fully qualified host name or IP address. Verify checksum Virt-who Configs Status Virt-who Configuration %s Virt-who Configurations Virt-who Configurations Status Virt-who configurations Whitelist every %s hours Project-Id-Version: foreman_virt_who_configure 0.5.11
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2017-05-03 11:59+0000
Last-Translator: Patrick Dolinic, 2021
Language-Team: German (https://www.transifex.com/foreman/teams/114/de/)
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Language: de
Plural-Forms: nplurals=2; plural=(n != 1);
 1. Kopiere dieses Konfigurations-Skript in ein sicheres Verzeichnis. 2. Mache das Skript ausführbar und führe es aus. 3. Lösche das Skript. Eine durch Kommas getrennte Liste von Hostnamen oder Domänen oder IP-Adressen, für die Proxy-Einstellungen ignoriert werden sollen. Optional kann dies auf <code> * </code>gesetzt werden, um die Proxy-Einstellungen für alle Hostnamen-Domains oder IP-Adressen zu umgehen. Plugin um virt-who Konfiguration einfacher zu machen Übersicht asynchrone Task Kontoname, über den sich virt-who mit dem Hypervisor verbinden soll, im Format <code>Domänenname\Kontoname </code>. Beachten Sie, dass nur ein einzelner umgekehrter Schrägstrich die Werte für Domänenname und Kontoname trennt. Wenn Sie ein Domänenkonto und die globale Konfigurationsdatei <code> /etc/virt-who.conf </code>verwenden, sind <b>zwei </b> umgekehrte Schrägstriche erforderlich. Weitere Informationen finden Sie in der <a href="https://access.redhat.com/solutions/1270223"> Red Hat Knowledgebase-Lösung How to use a windows domain account with virt-who </a>für weitere Informationen. Kontoname, über den sich virt-who mit dem Hypervisor verbinden soll. Kontoname, über den sich virt-who mit dem Hypervisor verbinden soll. Standardmäßig <code> ist dies Administrator </code> . Um ein alternatives Konto zu verwenden, erstellen Sie ein Benutzerkonto und weisen Sie dieses Konto den folgenden Gruppen zu (Windows 2012 Server): Hyper-V-Administratoren und Remoteverwaltungsbenutzer. Kontoname, über den sich virt-who mit dem Hypervisor verbinden soll. Virt-who unterstützt keine passwortbasierte Authentifizierung, Sie müssen den SSH-Schlüssel manuell einrichten. Weitere Informationen finden Sie in der <a href="https://access.redhat.com/solutions/1515983"> Red Hat Knowledgebase-Lösung So konfigurieren Sie virt-who für einen KVM-Host </a>. Kontokennwort, mit dem sich virt-who mit der Hypervisor-Instanz verbinden soll. Aktion mit Unterplänen Aktionen Agentenaktion Gilt nur für den esx-Anbietertyp. Hosts, deren übergeordneter Name (normalerweise ComputeResource) in dieser Option in einer durch Kommas getrennten Liste angegeben ist, werden <b> NICHT </b> gemeldet. Wildcards und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Komma getrennt werden. Setzen Sie den Wert in doppelte Anführungszeichen, wenn er Sonderzeichen wie Komma enthält. Alle neuen Zeilenzeichen werden in der resultierenden Konfigurationsdatei entfernt, Leerzeichen werden am Anfang und am Ende entfernt. Gilt nur für den esx-Anbietertyp. Nur Hosts, deren übergeordneter Name (normalerweise ComputeResource) in dieser Option in einer durch Kommas getrennten Liste angegeben ist, werden gemeldet. Wildcards und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Komma getrennt werden. Setzen Sie den Wert in doppelte Anführungszeichen, wenn er Sonderzeichen wie Komma enthält. Alle neuen Zeilenzeichen werden in der resultierenden Konfigurationsdatei entfernt, Leerzeichen werden am Anfang und am Ende entfernt. Subskriptionen verknüpfen Subskriptionen automatisch verknüpfen Blacklist Anwendbarkeit von Massengenerierung für Hosts Kombiniertes Profil-Update Konfigurationen Konfigurationsstatus Konfigurationsdatei mit Details zur Verbindung mit dem Cluster und Authentifizierungsdetails Konfigurations-Interval in Minuten Konfigurationsname Numerischer Konfigurations Identifikator Konfigurationsskript: Intervall Letzer Bericht Name Verbindung Vollständig qualifizierter Hostname oder IP-Adresse der containernativen Virtualisierung. Um eine Verbindung zum Cluster herzustellen, muss der Pfad zu kubeconfig angegeben werden, der Verbindungsdetails und Authentifizierungstoken enthält. In Zwischenablage abspeichern Versionseinheiten in Bibliothek kopieren Zähler Erstellen Konfiguration erstellen Exportverlauf erstellen Importverlauf erstellen Paketgruppe erstellen Virt-Who-Konfiguration erstellen Löschen Aktivierungsschlüssel löschen Lebenszyklusumgebung löschen Paketgruppe löschen Produkt löschen Virt-Who-Konfiguration löschen Virt-who Konfiguration %s löschen? Einsetzen Löschen Inhaltshost löschen Details Für jeden Hypervisor kann kein unterschiedlicher Debug-Wert festgelegt werden, daher wirkt sich dies auf alle anderen bereitgestellten Konfigurationen auf dem Host aus, auf dem diese Konfiguration bereitgestellt wird. Deaktivieren Suchen Das Skript herunterladen Bearbeiten Virt-who bearbeiten Aktivieren Debugausgabe aktivieren Debug-Ausgabe aktivieren? Errata-E-Mail Alle 12 Stunden Alle 2 Tage Alle 2 Stunden Alle 24 Stunden Alle 3 Tage Alle 4 Stunden Alle 8 Stunden Jede Stunde Hosts ausschließen Gast-Hosts ausschließen Hosts ausschließen Exportieren Bibliothek exportieren pxe-Dateien abrufen Hosts filtern Gast-Hosts filtern Hosts filtern Indexinhalt gefiltert FIltern Foreman-Server FQDN Der vollständig qualifizierte Hostname des Foreman-Servers, zum Beispiel: foreman.example.com Vollqualifizierter Hostname oder IP-Adresse des Hypervisors Allgemeine Informationen Hostanwendbarkeit generieren Repository-Anwendbarkeit generieren HTTP-Proxy HTTP-Proxy, der für die Kommunikation zwischen dem Server, auf dem virt-who läuft, und den Hypervisoren und Virtualisierungsmanagern verwendet werden soll. HTTP-Proxy, der für die Kommunikation zwischen dem Server, auf dem virt-who läuft, und den Hypervisoren und Virtualisierungsmanagern verwendet werden soll. Lassen Sie dieses Feld leer, wenn kein Proxy verwendet wird. Hammer-Befehl: Hilfe Hosts, deren uuid (oder hostname oder hwuuid, basierend auf <code> hypervisor_id </code>) in dieser Option in einer durch Kommas getrennten Liste angegeben ist, werden<b> NICHT </b> gemeldet. Wildcards und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Komma getrennt werden. Setzen Sie den Wert in doppelte Anführungszeichen, wenn er Sonderzeichen wie Komma enthält. Alle neuen Zeilenzeichen werden in der resultierenden Konfigurationsdatei entfernt, Leerzeichen werden am Anfang und am Ende entfernt. Wie oft werden verbundene Hypervisoren auf Änderungen überprüft? Beeinflusst auch, wie oft eine Zuordnung gemeldet wird. Der empfohlene Wert für die meisten Umgebungen ist alle zwei Stunden. Für jeden Hypervisor kann kein unterschiedliches Intervall festgelegt werden, daher wirkt sich dies auf alle anderen bereitgestellten Konfigurationen auf dem Host aus, auf dem diese Konfiguration bereitgestellt wird. Hypervisor ID Hypervisor-Blacklist, nur anwendbar, wenn der Filtermodus auf 2 gesetzt ist. Wildcards und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Kommas getrennt werden. Hypervisor-Filtermodus, %{unlimited} bedeutet keine Filterung, %{whitelist} bedeutet Whitelist, %{blacklist} bedeutet Blacklist Hypervisor-Typ Hypervisor-Whitelist, nur anwendbar, wenn der Filtermodus auf 1 gesetzt ist. Platzhalter und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Kommas getrennt werden. Hypervisors Hypervisoren aktualisieren Wenn Sie eine Hybridumgebung mit virtuellen Maschinen betreiben, auf denen Red Hat Enterprise Linux und andere Betriebssysteme ausgeführt werden, möchten Sie möglicherweise den Umfang des Zugriffs von virt-who auf Hosts einschränken. Wenn beispielsweise einige Hypervisoren nur Microsoft Windows Server-Instanzen hosten, hat es keinen Vorteil, wenn diese Hypervisoren vom virt-who-Agenten gemeldet werden. Proxy ignorieren Proxy ignorieren Proxy ignorieren. Eine durch Kommas getrennte Liste von Hostnamen oder Domänen oder IP-Adressen, für die Proxy-Einstellungen ignoriert werden sollen. Optional kann dies auf * gesetzt werden, um die Proxy-Einstellungen für alle Hostnamen-Domains oder IP-Adressen zu umgehen. Import Inhaltsansichtsversion importieren Standardinhaltsansicht importieren Puppet-Klassen importieren Fakten importieren Inkrementelle Aktualisierung Inkrementelle Aktualisierung der Inhaltsansichtsversion(en) Inhalt indizieren Errata indizieren Modulströme indexieren Paketgruppen indizieren Relevante Errata installieren Instanz-Update Intervall wurde nicht mitgeliefert Neueste Konfigurationen ohne Änderung Vollständig qualifizierter Hostname oder IP-Adresse des Libvirt-Servers. Sie können auch ein bevorzugtes Schema angeben, zum Beispiel: <code>qemu+ssh://libvirt.example.com/system </code>. Wenn Sie SSH verwenden, stellen Sie sicher, dass Sie den SSH-Schlüssel von root auf dem Zielhost für einen im Hypervisor-Benutzernamensfeld angegebenen Benutzer einrichten Liste der virt-who-Konfigurationen Liste der virt-who-Konfigurationen pro Organisation Vollständig qualifizierter Microsoft Hyper-V-Hostname oder IP-Adresse. Name der Konfiguration, z.B. der Name des Hypervisors Neue Konfiguration Neue Virt-Who Konfiguration Neuere Version von virt-who ist erforderlich, Mindestversion ist %s Keine Änderung Noch kein Bericht vorhanden Keine Berichte Keine Änderungen Keine Konfiguration gefunden OK Auf dem Ziel-virt-who-Host: Auf dieser Seite können Sie virt-who-Konfigurationen für Ihre Hypervisoren definieren. Eine virt-who-Konfiguration stellt eine Konfigurationsdatei im Verzeichnis /etc/virt-who.d dar und wird einem einzelnen Hypervisor, einer Organisation und einer Lebenszyklusumgebung zugeordnet. Nur Hosts, deren uuid (oder hostname oder hwuuid, basierend auf <code> hypervisor_id </code>) in dieser Option in einer durch Kommas getrennten Liste angegeben ist, werden gemeldet. Wildcards und reguläre Ausdrücke werden unterstützt, mehrere Datensätze müssen durch Komma getrennt werden. Setzen Sie den Wert in doppelte Anführungszeichen, wenn er Sonderzeichen wie Komma enthält. Alle neuen Zeilenzeichen werden in der resultierenden Konfigurationsdatei entfernt, Leerzeichen werden am Anfang und am Ende entfernt. Organisation der virt-who Konfiguration Überblick Benutzer Besitzer wurde nicht mitgeliefert Paketprofil-Update Pfad zur kubeconfig-Datei Produkt erstellen Übertragen Promotion des Environments Veröffentlichen Lebenszyklusumgebungs-Repositorys veröffentlichen Subskriptionen neu indizieren Inhalt entfernen Version entfernen Versionen und Verknüpfungen entfernen Aus Umgebung entfernen Subskriptionen entfernen Rendert ein Deploy-Skript für die angegebene virt-who-Konfiguration Melden Versions-Repositorys erneut veröffentlichen Synchronisierungsplan ausführen: Plan Zeigen Sie eine virt-who-Konfiguration an Spezifiziert wie der Hypervisor identifiziert wird. Gibt an, dass Hypervisoren durch ihren <b>Hostnamen </b>, <b> uuid </b> oder <b>hwuuid</b> identifiziert werden.
Beachten Sie, dass einige Virtualisierungs-Back-Ends nicht alle implementiert haben.
Standard ist <b> Hostname </b>, der einen aussagekräftigeren Hypervisor bietet
Namen, kann aber doppelte Hypervisor-Registrierungen verursachen, wenn der Host umbenannt wird. Um dies zu vermeiden, können Sie stattdessen <b> uuid </b> verwenden. <b> hwuuid </b>gilt nur für esx.
 This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager. Status Erfolg Kapsel synchronisieren Synchronisieren Smart-Proxy synchronisieren Die Konfiguration wurde noch nicht bereitgestellt oder der virt-who konnte den Status nicht melden Der virt-who-Bericht ist innerhalb der Frist eingetroffen Der virt-who-Bericht ist nicht innerhalb des Intervalls angekommen, was darauf hinweist, dass auf dem Hypervisor keine Änderung stattgefunden hat Um eine neue Konfiguration zu definieren, klicken Sie auf die Schaltfläche Neue Konfiguration und füllen Sie das Formular aus. Nachdem Sie alle erforderlichen Informationen eingegeben haben, wird ein virt-who-Konfigurationsskript generiert. Sie können es entweder manuell installieren, indem Sie das Skript kopieren, oder es über Remote Execution auf einem ausgewählten Zielhost bereitstellen. Gesamtkonfigurationen Es konnte keine sysconfig Datei angelegt werden Virt-Who Konfigurationsdatei konnte nicht erstellt werden virt-who-Dienst kann nicht mit systemctl aktiviert werden  Das virt-who-Paket kann nicht installiert werden, stellen Sie sicher, dass der Host richtig abonniert ist und Zugriff auf das katello-host-tools-Repository hat Der virt-who-Dienst kann nicht gestartet werden. Weitere Informationen finden Sie in den virt-who-Protokollen. Unbekannt Unbekannter Konfigurationsstatus Unbekannter Konfigurationsstatus, verursacht durch unbekannte Umstände Unbegrenzt Aktualisieren Inhaltsüberschreibungen aktualisieren Virt-Who-Konfiguration aktualisieren Inhalts-URLs aktualisieren Update für Host HTTP-Proxy aktualisieren HTTP-Proxy-Details aktualisieren Redhat-Repository aktualisieren Release-Version für Host aktualisieren Aktualisieren des Systemzwecks für den Host Hochgeladen in Verwenden Sie entweder den Befehl hammer oder das folgende Skript, um diese Konfiguration bereitzustellen. Beide benötigen Root-Rechte. Führen Sie einen davon auf dem Zielhost aus, der Zugriff auf das katello-host-tools-Repository hat und das virt-who-Reporting ausführt, vorzugsweise Foreman-Host: Vollständig qualifizierter Hostname oder IP-Adresse des VMware vCenter-Servers. Prüfsumme überprüfen Virt-who Konfigurationsstatus Virt-who-Konfiguration %s Virt-who Konfigurationen Virt-who Konfigurationsstatus Virt-Who-Konfigurationen Whitelist Alle %s Stunden 