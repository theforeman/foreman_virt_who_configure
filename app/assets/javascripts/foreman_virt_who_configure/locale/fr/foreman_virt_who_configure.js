 locales['foreman_virt_who_configure'] = locales['foreman_virt_who_configure'] || {}; locales['foreman_virt_who_configure']['fr'] = {
  "domain": "foreman_virt_who_configure",
  "locale_data": {
    "foreman_virt_who_configure": {
      "": {
        "Project-Id-Version": "foreman_virt_who_configure 0.5.26",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2017-05-03 11:59+0000",
        "Last-Translator": "Ewoud Kohl van Wijngaarden <ewoud+transifex@kohlvanwijngaarden.nl>, 2025",
        "Language-Team": "French (https://app.transifex.com/foreman/teams/114/fr/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "fr",
        "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;",
        "lang": "fr",
        "domain": "foreman_virt_who_configure",
        "plural_forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;"
      },
      "1. Copy this configuration script to a safe directory.": [
        "1. Copiez ce script de configuration dans un répertoire sûr."
      ],
      "2. Make the script executable and run it.": [
        "2. Rendez le script exécutable et exécutez-le."
      ],
      "3. Delete the script.": [
        "3. Supprimez le script."
      ],
      "A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses.": [
        "Ignorer le proxy. Une liste de noms d'hôte ou de domaines ou d'adresses IP séparés par une virgule pour ignorer les paramètres du proxy. Peut éventuellement être défini sur <code>*</code> pour contourner les paramètres du proxy pour tous les noms d'hôte, domaines ou adresses IP."
      ],
      "A plugin to make virt-who configuration easy": [
        "Plug-in pour faciliter la configuration de virt-who"
      ],
      "Account name by which virt-who is to connect to Nutanix AHV.": [
        "Nom du compte avec lequel virt-who doit se connecter à AHV Nutanix."
      ],
      "Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\\\\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information.": [
        "Nom du compte avec lequel virt-who doit se connecter à l'hyperviseur, au format <code>domain_name\\\\account_name</code>. Notez qu'une seule barre oblique inverse sépare les valeurs de domain_name et account_name. Si vous utilisez un compte de domaine et le fichier de configuration global <code>/etc/virt-who.conf</code>, <b>two</b> barres obliques inverses sont alors requises. Pour en savoir plus, consultez <a href=\\\"https://access.redhat.com/solutions/1270223\\\"> Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a>."
      ],
      "Account name by which virt-who is to connect to the hypervisor.": [
        "Nom du compte avec lequel virt-who doit se connecter à l'hyperviseur."
      ],
      "Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users.": [
        "Nom du compte avec lequel virt-who doit se connecter à l'hyperviseur. Par défaut, il s'agit de l'<code>Administrateur</code>. Pour utiliser un autre compte, créez un compte d'utilisateur et attribuez-le aux groupes suivants (Windows 2012 Server) : administrateurs Hyper-V et utilisateurs de la gestion à distance."
      ],
      "Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information.": [
        "Nom du compte avec lequel virt-who doit se connecter à l'hyperviseur. Virt-who ne prend pas en charge l'authentification par mot de passe, vous devez donc configurer manuellement une clé SSH, consultez <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> pour en savoir plus."
      ],
      "Account password by which virt-who is to connect to the hypervisor instance.": [
        "Mot de passe du compte avec lequel virt-who doit se connecter à l'instance de l'hyperviseur."
      ],
      "Actions": [
        "Actions"
      ],
      "Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Applicable uniquement pour le type de prestataire esx. Les hôtes dont le nom du parent (généralement ComputeResource) est spécifié dans la liste séparée par des virgules dans cette option seront <b>PAS</b> signalés. Les caractères de remplacement et les expressions régulières sont pris en charge, les enregistrements multiples doivent être séparés par une virgule. Mettez la valeur entre guillemets si elle contient des caractères spéciaux comme la virgule. Tous les nouveaux caractères de ligne seront supprimés dans le fichier de configuration résultant, les espaces blancs sont supprimés au début et à la fin."
      ],
      "Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Applicable uniquement pour le type de prestataire esx. Seuls les hôtes dont le nom du parent (généralement ComputeResource) est spécifié dans la liste séparée par des virgules dans cette option seront signalés. Les caractères de remplacement et les expressions régulières sont pris en charge, les enregistrements multiples doivent être séparés par une virgule. Mettez la valeur entre guillemets si elle contient des caractères spéciaux comme la virgule. Tous les nouveaux caractères de ligne seront supprimés dans le fichier de configuration résultant, les espaces blancs sont supprimés au début et à la fin."
      ],
      "Blacklist": [
        "Liste noire"
      ],
      "Configs": [
        "Configs"
      ],
      "Configuration Status": [
        "État de la configuration"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details": [
        "Fichier de configuration contenant des détails sur la façon de se connecter au cluster et des détails d'authentification"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details.": [
        "Fichier de configuration contenant des détails sur la façon de se connecter au cluster et des détails d'authentification."
      ],
      "Configuration interval in minutes": [
        "Intervalle de configuration en minutes"
      ],
      "Configuration name": [
        "Nom de la configuration"
      ],
      "Configuration numeric identifier": [
        "Identifiant numérique de la configuration"
      ],
      "Configuration script: ": [
        "Script de configuration :"
      ],
      "Config|Interval": [
        "Intervalle"
      ],
      "Config|Last Report": [
        "Dernier rapport"
      ],
      "Config|Name": [
        "Nom"
      ],
      "Connection": [
        "Connexion"
      ],
      "Container-native virtualization’s fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token.": [
        "Nom d'hôte ou adresse IP entièrement qualifié de la virtualisation native du conteneur. Afin de se connecter au cluster, il est nécessaire de fournir le chemin d'accès à kubeconfig qui contient les détails de la connexion et le jeton d'authentification."
      ],
      "Copy to clipboard": [
        "Copier dans le presse-papiers"
      ],
      "Count": [
        "Nombre"
      ],
      "Create Config": [
        "Créer une configuration"
      ],
      "Create a virt-who configuration": [
        "Créer une configuration virt-who"
      ],
      "Delete a virt-who configuration": [
        "Supprimer une configuration virt-who"
      ],
      "Delete virt-who configuration %s?": [
        "Supprimer la configuration virt-who %s?"
      ],
      "Deploy": [
        "Déploiement"
      ],
      "Details": [
        "Détails"
      ],
      "Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "Une valeur de débogage différente ne peut pas être définie par hyperviseur, elle affectera donc toutes les autres configurations déployées sur l'hôte sur lequel cette configuration sera déployée."
      ],
      "Download the script": [
        "Télécharger le script"
      ],
      "Edit": [
        "Modifier"
      ],
      "Edit Virt-who Config": [
        "Modifier la configuration virt-who"
      ],
      "Enable AHV debug": [
        "Activer le débogage de l'AVH"
      ],
      "Enable debugging output": [
        "Activer la sortie de débogage"
      ],
      "Enable debugging output?": [
        "Activer la sortie de débogage ?"
      ],
      "Every 12 hours": [
        "Toutes les 12 heures"
      ],
      "Every 2 days": [
        "Tous les 2 jours"
      ],
      "Every 2 hours": [
        "Toutes les 2 heures"
      ],
      "Every 24 hours": [
        "Toutes les 24 heures"
      ],
      "Every 3 days": [
        "Tous les 3 jours"
      ],
      "Every 4 hours": [
        "Toutes les 4 heures"
      ],
      "Every 8 hours": [
        "Toutes les 8 heures"
      ],
      "Every hour": [
        "Toutes les heures"
      ],
      "Exclude Hosts": [
        "Exclure des hôtes"
      ],
      "Exclude host parents": [
        "Exclure les parents hôtes"
      ],
      "Exclude hosts": [
        "Exclure des hôtes"
      ],
      "Exclude hosts which cluster ID is specified in comma-separated list in this option will <b>NOT</b> be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Exclure les hôtes dont l'ID de cluster est spécifié dans une liste séparée par des virgules dans cette option ne sera <b>PAS</b> rapporté. Utiliser la commande PowerCLI pour trouver les noms de domaine dans VMware <code>Get-Cluster \\\"ClusterName\\\" | Select ID</code>. Les caractères génériques et les expressions régulières sont pris en charge, les enregistrements multiples doivent être séparés par une virgule. Mettez la valeur entre guillemets si elle contient des caractères spéciaux comme la virgule. Tous les caractères de nouvelle ligne seront supprimés dans le fichier de configuration résultant, les espaces blancs sont supprimés au début et à la fin."
      ],
      "Filter Hosts": [
        "Filtrer les hôtes"
      ],
      "Filter host parents": [
        "Filtrer les parents hôtes"
      ],
      "Filter hosts": [
        "Filtrer les hôtes"
      ],
      "Filtering": [
        "Filtrage"
      ],
      "Foreman server FQDN": [
        "FQDN du serveur de Foreman"
      ],
      "Foreman server’s fully-qualified host name, for example: foreman.example.com": [
        "Nom d'hôte complet du serveur Foreman, par exemple : foreman.example.com"
      ],
      "Fully qualified host name or IP address of the hypervisor": [
        "Nom d'hôte complet ou adresse IP de l'hyperviseur"
      ],
      "General information": [
        "Informations générales"
      ],
      "HTTP Proxy": [
        "HTTP Proxy"
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers.": [
        "Proxy HTTP à utiliser pour la communication entre le serveur sur lequel virt-who est exécuté et les hyperviseurs et gestionnaires de virtualisation."
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used.": [
        "Proxy HTTP devant être utilisé pour la communication entre le serveur sur lequel virt-who est exécuté et les hyperviseurs et gestionnaires de virtualisation. Laissez vide si aucun proxy n'est utilisé."
      ],
      "Hammer command: ": [
        "Commande hammer :"
      ],
      "Help": [
        "Assistance"
      ],
      "Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Les hôtes dont l'uuid (ou le nom d'hôte ou hwuuid, basé sur <code>hypervisor_id</code>) est spécifié dans la liste séparée par des virgules dans cette option ne seront <b>PAS</b> signalés. Les caractères de remplacement et les expressions régulières sont pris en charge, les enregistrements multiples doivent être séparés par une virgule. Mettez la valeur entre guillemets si elle contient des caractères spéciaux comme la virgule. Tous les nouveaux caractères de ligne seront supprimés dans le fichier de configuration résultant, les espaces blancs sont supprimés au début et à la fin."
      ],
      "How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "À quelle fréquence faut-il vérifier les modifications apportées aux hyperviseurs connectés ? Cela affecte également la fréquence de signalement d'un mappage. La valeur recommandée pour la plupart des environnements est toutes les deux heures. Il n'est pas possible de définir un intervalle différent pour chaque hyperviseur, ce qui affectera toutes les autres configurations déployées sur l'hôte sur lequel cette configuration sera déployée."
      ],
      "Hypervisor ID": [
        "ID hyperviseur"
      ],
      "Hypervisor Password": [
        "Mot de passe de l'hyperviseur"
      ],
      "Hypervisor Server": [
        "Serveur d'hyperviseur"
      ],
      "Hypervisor Type": [
        "Type d'hyperviseur"
      ],
      "Hypervisor Username": [
        "Nom d'utilisateur de l'hyperviseur"
      ],
      "Hypervisor blacklist, applicable only when filtering mode is set to 2. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "Liste noire Hyperviseur, applicable uniquement lorsque le mode de filtrage est défini sur 2. Les caractères génériques et les expressions régulières sont pris en charge, plusieurs enregistrements doivent être séparés par une virgule."
      ],
      "Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist": [
        "Mode de filtrage Hyperviseur, %{unlimited} indique aucun filtrage, %{whitelist} means whitelist, %{blacklist} signifie liste noire"
      ],
      "Hypervisor password, required for all hypervisor types except for libvirt/kubevirt.": [
        "Mot de passe de l'hyperviseur obligatoire pour tous les types d'hyperviseur sauf libvirt/kebevirt."
      ],
      "Hypervisor type": [
        "Type d'hyperviseur"
      ],
      "Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "Liste blanche Hyperviseur, applicable uniquement lorsque le mode de filtrage est défini sur 1. Les caractères génériques et les expressions régulières sont pris en charge, plusieurs enregistrements doivent être séparés par une virgule."
      ],
      "If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-who’s access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent.": [
        "Si vous exécutez un environnement hybride, avec des machines virtuelles exécutant Red Hat Enterprise Linux et d'autres systèmes d'exploitation, il se peut que vous souhaitiez limiter l'accès de virt-who aux hôtes. Par exemple, si certains hyperviseurs n'hébergent que des instances Microsoft Windows Server, il n'y a aucun avantage à ce que ces hyperviseurs soient signalés par l'agent virt-who."
      ],
      "Ignore Proxy": [
        "Ignorer le proxy"
      ],
      "Ignore proxy": [
        "Ignorer le proxy"
      ],
      "Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses.": [
        "Ignorer le proxy. Une liste de noms d'hôte ou de domaines ou d'adresses IP séparés par une virgule pour ignorer les paramètres du proxy. Peut éventuellement être défini sur * pour contourner les paramètres du proxy pour tous les noms d'hôte, domaines ou adresses IP."
      ],
      "Interval": [
        "Intervalle"
      ],
      "Interval was not provided": [
        "L'intervalle n'était pas fourni"
      ],
      "Latest Configurations Without Change": [
        "Dernières configurations sans modification"
      ],
      "Libvirt server’s fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. Make sure you setup root's SSH key on target host for a user specified at hypervisor username field": [
        "Nom d'hôte complet ou adresse IP du serveur Libvirt. Vous pouvez également spécifier le schéma préféré, par exemple :<code> qemu+ssh://libvirt.example.com/system</code> Assurez-vous de configurer la clé SSH de root sur l'hôte cible pour un utilisateur spécifié dans le champ nom d'utilisateur de l'hyperviseur"
      ],
      "List of virt-who configurations": [
        "Liste des configurations virt-who"
      ],
      "List of virt-who configurations per organization": [
        "Liste des configurations virt-who par organisation"
      ],
      "Microsoft Hyper-V fully qualified host name or IP address.": [
        "Nom d'hôte complet ou adresse IP Microsoft Hyper-V."
      ],
      "Name": [
        "Nom"
      ],
      "Name of this configuration, e.g. the name of the hypervisor": [
        "Nom de cette configuration, par exemple le nom de l'hyperviseur"
      ],
      "New Config": [
        "Nouvelle configuration"
      ],
      "New Virt-who Config": [
        "Nouvelle configuration virt-who"
      ],
      "Newer version of virt-who is required, minimum version is %s": [
        "Version de virt-who plus récente requise. La version minimale est %s"
      ],
      "No Change": [
        "Aucun changement"
      ],
      "No Report Yet": [
        "Aucun rapport pour l'instant"
      ],
      "No Reports": [
        "Aucun rapport"
      ],
      "No change": [
        "Aucun changement"
      ],
      "No configuration found": [
        "Aucune configuration trouvée"
      ],
      "Nutanix AHV’s IP address.": [
        "L'adresse IP de Nutanix AHV."
      ],
      "OK": [
        "OK"
      ],
      "On the target virt-who host:": [
        "Sur l'hôte virt-who cible :"
      ],
      "On this page you can define virt-who configurations for your hypervisors.": [
        "Sur cette page, vous pouvez définir les configurations virt-who de vos hyperviseurs."
      ],
      "One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment.": [
        "Une configuration virt-who représente un fichier de configuration dans le répertoire /etc/virt-who.d et correspond à un hyperviseur, une organisation et un environnement de cycle de vie."
      ],
      "Only hosts which cluster ID is specified in comma-separated list in this option will be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Seuls les hôtes dont l'ID de cluster est spécifié dans une liste séparée par des virgules dans cette option seront signalés. Utiliser la commande PowerCLI pour trouver les noms de domaine dans VMware <code>Get-Cluster \\\"ClusterName\\\" | Select ID</code>. Les caractères génériques et les expressions régulières sont pris en charge, les enregistrements multiples doivent être séparés par une virgule. Mettez la valeur entre guillemets si elle contient des caractères spéciaux comme la virgule. Tous les caractères de nouvelle ligne seront supprimés dans le fichier de configuration résultant, les espaces blancs sont supprimés au début et à la fin."
      ],
      "Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Seuls les hôtes dont l'uuid (ou le nom d'hôte ou hwuuid, basé sur <code>hypervisor_id</code>) est spécifié dans la liste séparée par des virgules dans cette option seront signalés. Les caractères de remplacement et les expressions régulières sont pris en charge, les enregistrements multiples doivent être séparés par une virgule. Mettez la valeur entre guillemets si elle contient des caractères spéciaux comme la virgule. Tous les nouveaux caractères de ligne seront supprimés dans le fichier de configuration résultant, les espaces blancs sont supprimés au début et à la fin."
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled": [
        "L'option Activer la sortie de débogage est nécessaire pour activer le débogage interne de l'AHV. Elle fournit des informations supplémentaires sur le débogage de l'AHV lorsque les deux options sont activées"
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled ": [
        "L'option Activer la sortie de débogage est nécessaire pour activer le débogage interne de l'AHV. Elle fournit des informations supplémentaires sur le débogage de l'AHV lorsque les deux options sont activées "
      ],
      "Organization of the virt-who configuration": [
        "Organisation de la configuration virt-who"
      ],
      "Overview": [
        "Vue d'ensemble"
      ],
      "Owner": [
        "Propriétaire"
      ],
      "Owner was not provided": [
        "Le propriétaire n'était pas fourni"
      ],
      "Path to kubeconfig file": [
        "Chemin d'accès au fichier kubeconfig"
      ],
      "Prism Central": [
        "Prism Central"
      ],
      "Prism Element": [
        "Élément Prism"
      ],
      "Prism Flavor": [
        "Gabarit Prism"
      ],
      "Renders a deploy script for the specified virt-who configuration": [
        "Produit un script de déploiement pour la configuration virt-who spécifiée"
      ],
      "Report": [
        ""
      ],
      "Schedule": [
        "Programmer"
      ],
      "Select the Prism flavor you are connecting to": [
        "Sélectionnez le gabarit Prism auquel vous êtes connecté"
      ],
      "Show a virt-who configuration": [
        "Afficher une configuration virt-who"
      ],
      "Specifies how the hypervisor will be identified.": [
        "Indique comment l'hyperviseur sera identifié."
      ],
      "Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.\\n                              Note that some virtualization backends don't have all of them implemented.\\n                              Default is <b>hostname</b>, which provides more meaningful hypervisor\\n                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.\\n                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager.": [
        "Spécifie que les hyperviseurs seront identifiés par leur <b>hostname</b>, <b>uuid</b> ou <b>hwuuid</b>.\\n                              Notez que certains serveurs principaux de virtualisation n'ont pas implémenté tous leurs hyperviseurs.\\n                              La valeur par défaut est <b>hostname</b> qui fournit d'autres noms d'hyperviseur significatifs,\\n                                  mais qui entraîne la création de doublons d'enregistrements d'hyperviseur si l'hôte est renommé. Pour éviter cela, vous pouvez utiliser l’<b>uuid</b> à la place. <b>hwuuid</b> ne s'applique qu'à esx.\\n                                  Cette propriété doit être configurée avant l'exécution initiale de virt-who. Si vous la modifiez ultérieurement, des entrées en double seront présentes dans le gestionnaire d'abonnements."
      ],
      "Status": [
        "Statut"
      ],
      "Success": [
        "Réussi"
      ],
      "The configuration was not deployed yet or the virt-who was unable to report the status": [
        "La configuration n'a pas encore été déployée ou virt-who n'a pas été en mesure de signaler l'état"
      ],
      "The virt-who report arrived within the interval": [
        "Le rapport virt-who est arrivé dans l'intervalle"
      ],
      "The virt-who report has not arrived within the interval, which indicates there was no change on hypervisor": [
        "Le rapport virt-who n'est pas arrivé dans l'intervalle, ce qui indique qu'aucun changement n'est intervenu sur l'hyperviseur"
      ],
      "To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution.": [
        "Pour définir une nouvelle configuration, cliquez sur le bouton Nouvelle configuration et complétez le formulaire. Une fois que vous avez fourni toutes les informations requises, un script de configuration virt-who sera généré. Vous pouvez l'installer manuellement en copiant le script ou le déployer sur un hôte cible sélectionné via l'exécution distante."
      ],
      "Total Configurations": [
        "Nombre total de configurations"
      ],
      "Unable to create sysconfig file": [
        "Impossible de créer le fichier sysconfig"
      ],
      "Unable to create virt-who config file": [
        "Impossible de créer le fichier de configuration virt-who"
      ],
      "Unable to enable virt-who service using systemctl": [
        "Impossible d'activer le service virt-who à l'aide de systemctl"
      ],
      "Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository": [
        "Impossible d'installer le paquetage virt-who. Assurez-vous que l'hôte dispose d'un abonnement correct et qu'il a accès au référentiel katello-host-tools"
      ],
      "Unable to start virt-who service, please see virt-who logs for more details": [
        "Impossible de démarrer le service virt-who. Consultez les journaux virt-who pour en savoir plus"
      ],
      "Unknown": [
        "Inconnu"
      ],
      "Unknown configuration status": [
        "État de la configuration inconnu"
      ],
      "Unknown configuration status, caused by unexpected conditions": [
        "État de la configuration inconnu en raison de conditions inattendues"
      ],
      "Unlimited": [
        "Illimité"
      ],
      "Update a virt-who configuration": [
        "Mettre à jour une configuration virt-who"
      ],
      "Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host:": [
        "Utilisez soit la commande hammer, soit le script ci-dessous pour déployer cette configuration. Les deux requièrent les privilèges root. Exécutez l'un d'eux sur l'hôte cible qui a accès au dépôt katello-host-tools et qui exécutera le rapport de virt-who, de préférence l'hôte Foreman :"
      ],
      "VMware vCenter server’s fully qualified host name or IP address.": [
        "Nom d'hôte complet ou adresse IP du serveur VMware vCenter."
      ],
      "Virt-who Configs Status": [
        "État des configurations virt-who"
      ],
      "Virt-who Configuration %s": [
        "Virt-who Configuration %s"
      ],
      "Virt-who Configurations": [
        "Configurations virt-who"
      ],
      "Virt-who Configurations Status": [
        "État des configurations virt-who"
      ],
      "Whitelist": [
        "Liste blanche"
      ],
      "every %s hours": [
        "toutes les %s heures"
      ]
    }
  }
};