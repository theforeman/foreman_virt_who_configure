 locales['foreman_virt_who_configure'] = locales['foreman_virt_who_configure'] || {}; locales['foreman_virt_who_configure']['es'] = {
  "domain": "foreman_virt_who_configure",
  "locale_data": {
    "foreman_virt_who_configure": {
      "": {
        "Project-Id-Version": "foreman_virt_who_configure 0.5.25",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2017-05-03 11:59+0000",
        "Last-Translator": "Bryan Kearney <bryan.kearney@gmail.com>, 2023",
        "Language-Team": "Spanish (https://app.transifex.com/foreman/teams/114/es/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "es",
        "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;",
        "lang": "es",
        "domain": "foreman_virt_who_configure",
        "plural_forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;"
      },
      "1. Copy this configuration script to a safe directory.": [
        "1. Copiar este script de configuración en un directorio seguro."
      ],
      "2. Make the script executable and run it.": [
        "2. Hacer que el script sea ejecutable y ejecutarlo."
      ],
      "3. Delete the script.": [
        "3. Eliminar este script."
      ],
      "A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses.": [
        "Una lista separada por comas de nombres de host o dominios o direcciones ip para los que ignorar la configuración del proxy. Opcionalmente, puede definirse como <code>*</code> para omitir la configuración del proxy para todos los nombres de host, dominios o direcciones IP."
      ],
      "A plugin to make virt-who configuration easy": [
        "Complemento para simplificar la configuración de virt-who"
      ],
      "Account name by which virt-who is to connect to Nutanix AHV.": [
        ""
      ],
      "Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\\\\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information.": [
        "Nombre de cuenta con el que virt-who debe conectarse al hipervisor, en el formato <code>nombre_dominio nombre_cuenta</code>. Tenga en cuenta que sólo una barra invertida separa los valores de nombre_dominio y nombre_cuenta. Si está utilizando una cuenta de dominio, y el archivo de configuración global <code>/etc/virt-who.conf</code>, entonces <b>dos</b> barras invertidas son necesarias. Para más detalles, consulte <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> para más información."
      ],
      "Account name by which virt-who is to connect to the hypervisor.": [
        "Nombre de cuenta con el cual virt-who se conecta al hipervisor."
      ],
      "Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users.": [
        "Nombre de cuenta con el que virt-who debe conectarse al hipervisor. Por defecto es <code>Administrator</code>. Para utilizar una cuenta alternativa, cree una cuenta de usuario y asigne dicha cuenta a los siguientes grupos (Windows 2012 Server): Administradores de Hyper-V y Usuarios de administración remota."
      ],
      "Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information.": [
        "Nombre de cuenta mediante el cual virt-who se conectará al hipervisor. Virt-who no soporta autenticación basada en contraseña, debe configurar manualmente la clave SSH, vea <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> para más información."
      ],
      "Account password by which virt-who is to connect to the hypervisor instance.": [
        "Contraseña de la cuenta por medio de la cual virt-who se conecta a la instancia del hipervisor."
      ],
      "Actions": [
        "Acciones"
      ],
      "Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Aplicable sólo para el tipo de proveedor esx. Los hosts cuyo nombre principal (normalmente ComputeResource) se especifique en una lista separada por comas en esta opción se notificarán <b>NO</b>. Se admiten comodines y expresiones regulares; los registros múltiples deben estar separados por comas. Ponga el valor entre comillas dobles si contiene caracteres especiales como la coma. Todos los caracteres de nueva línea se eliminarán en el archivo de configuración resultante, los espacios en blanco se eliminan del principio y del final."
      ],
      "Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Aplicable solo para el tipo de proveedor esx. Solo se informará de los hosts cuyo nombre de padre (normalmente ComputeResource) se especifique en la lista separada por comas en esta opción. Se admiten comodines y expresiones regulares. Los registros múltiples deben estar separados por coma. Ponga el valor entre comillas si contiene caracteres especiales como la coma. Todos los caracteres de nueva línea serán eliminados en el archivo de configuración resultante. Los espacios en blanco se eliminan del principio y el final."
      ],
      "Blacklist": [
        "Lista negra"
      ],
      "Configs": [
        "Configuraciones"
      ],
      "Configuration Status": [
        "Estado de configuración"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details": [
        "Archivo de configuración que contiene detalles sobre cómo conectarse al clúster y detalles de autenticación"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details.": [
        ""
      ],
      "Configuration interval in minutes": [
        "Intervalo de configuración en minutos"
      ],
      "Configuration name": [
        "Nombre de la configuración"
      ],
      "Configuration numeric identifier": [
        "Identificador numérico de la configuración"
      ],
      "Configuration script: ": [
        "Script de configuración:"
      ],
      "Config|Interval": [
        "Configuración|Intervalo"
      ],
      "Config|Last Report": [
        "Configuración|Último informe"
      ],
      "Config|Name": [
        "Configuración|Nombre"
      ],
      "Connection": [
        "Conexión"
      ],
      "Container-native virtualization’s fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token.": [
        "El nombre de host o la dirección IP totalmente calificados de la virtualización nativa del contenedor. Para poder conectarse al clúster es necesario proporcionar la ruta a kubeconfig que contiene los detalles de la conexión y el token de autenticación."
      ],
      "Copy to clipboard": [
        "Copiar al portapapeles"
      ],
      "Count": [
        "Recuento"
      ],
      "Create Config": [
        "Crear configuración"
      ],
      "Create a virt-who configuration": [
        "Crear una configuración virt-who"
      ],
      "Delete a virt-who configuration": [
        "Eliminar una configuración virt-who"
      ],
      "Delete virt-who configuration %s?": [
        "Borrar configuración virt-who %s?"
      ],
      "Deploy": [
        "Implementar"
      ],
      "Details": [
        "Detalles"
      ],
      "Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "No se puede establecer un valor de depuración diferente por hipervisor, por lo que afectará a todas las demás configuraciones implementadas en el host en el que se implementará esta configuración."
      ],
      "Download the script": [
        "4. Descargar el script."
      ],
      "Edit": [
        "Editar"
      ],
      "Edit Virt-who Config": [
        "Editar configuración de virt-who"
      ],
      "Enable AHV debug": [
        ""
      ],
      "Enable debugging output": [
        "Habilitar salida de depuración"
      ],
      "Enable debugging output?": [
        "¿Habilitar la salida de depuración?"
      ],
      "Every 12 hours": [
        "Cada 12 horas"
      ],
      "Every 2 days": [
        "Cada 2 días"
      ],
      "Every 2 hours": [
        "Cada 2 horas"
      ],
      "Every 24 hours": [
        "Cada 24 horas"
      ],
      "Every 3 days": [
        "Cada 3 días"
      ],
      "Every 4 hours": [
        "Cada 4 horas"
      ],
      "Every 8 hours": [
        "Cada 8 horas"
      ],
      "Every hour": [
        "Todas las horas"
      ],
      "Exclude Hosts": [
        "Excluir hosts"
      ],
      "Exclude host parents": [
        "Excluir padres de host"
      ],
      "Exclude hosts": [
        "Excluir hosts"
      ],
      "Exclude hosts which cluster ID is specified in comma-separated list in this option will <b>NOT</b> be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Filter Hosts": [
        "Filtrar hosts"
      ],
      "Filter host parents": [
        "Filtrar padres de host"
      ],
      "Filter hosts": [
        "Filtrar hosts"
      ],
      "Filtering": [
        "Filtrando"
      ],
      "Foreman server FQDN": [
        "FQDN del servidor Foreman"
      ],
      "Foreman server’s fully-qualified host name, for example: foreman.example.com": [
        "Nombre completo del servidor Foreman, por ejemplo: foreman.ejemplo.com"
      ],
      "Fully qualified host name or IP address of the hypervisor": [
        "Nombre de host totalmente calificado o dirección IP del hipervisor"
      ],
      "General information": [
        "Información general"
      ],
      "HTTP Proxy": [
        "Proxy HTTP"
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers.": [
        "Proxy HTTP que debe utilizarse para establecer la comunicación entre el servidor en el que se está ejecutando virt-who y los hipervisores y administradores de virtualización."
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used.": [
        "Proxy de HTTP que debería utilizarse para la comunicación entre el servidor en el que se está ejecutando virt-who y los hipervisores y los administradores de virtualización. Dejar en blanco si no se utilizan proxies."
      ],
      "Hammer command: ": [
        "Comando hammer:"
      ],
      "Help": [
        "Ayuda"
      ],
      "Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Los hosts cuyo uuid (o nombre de host o hwuuid, según <code>hypervisor_id</code>) se especifique en una lista separada por comas en esta opción NO se informarán <b></b> . Se admiten comodines y expresiones regulares; los registros múltiples deben estar separados por comas. Ponga el valor entre comillas dobles si contiene caracteres especiales como la coma. Todos los caracteres de nueva línea se eliminarán en el archivo de configuración resultante, los espacios en blanco se eliminan del principio y del final."
      ],
      "How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "¿Con qué frecuencia hay que revisar los hipervisores conectados para ver si hay cambios? También afecta la frecuencia con la que se informa una asociación. El valor recomendado para la mayoría de los entornos es cada dos horas. No se puede establecer un intervalo diferente por hipervisor, por lo que afectará a todas las demás configuraciones implementadas en el host en el que se implementará esta configuración."
      ],
      "Hypervisor ID": [
        "ID del hipervisor"
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
        "Lista negra del hipervisor, aplicable únicamente cuando el modo de filtrado está configurado en 2. Se admiten comodines y expresiones regulares, los registros múltiples deben separarse con coma."
      ],
      "Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist": [
        "Modo de filtrado del hipervisor, %{unlimited} significa sin filtrado, %{whitelist} significa lista blanca, %{blacklist} significa lista negra."
      ],
      "Hypervisor password, required for all hypervisor types except for libvirt/kubevirt.": [
        ""
      ],
      "Hypervisor type": [
        "Tipo de hipervisor"
      ],
      "Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "Lista blanca del hipervisor, aplicable únicamente cuando el modo de filtrado está configurado en 1. Se admiten comodines y expresiones regulares, los registros múltiples deben separarse con coma."
      ],
      "If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-who’s access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent.": [
        "Si ejecuta un entorno híbrido, con máquinas virtuales que utilizan Red Hat Enterprise Linux y otros sistemas operativos, tal vez quiera limitar el alcance del acceso de virt-who a los hosts. Por ejemplo, si algunos hipervisores solo admiten instancias de Microsoft Windows Server, no hay ningún tipo de beneficio en que el agente virt-who informe estos hipervisores. "
      ],
      "Ignore Proxy": [
        "Ignorar el proxy"
      ],
      "Ignore proxy": [
        "Ignorar el proxy"
      ],
      "Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses.": [
        "Ignorar el proxy. Lista de nombres de host o dominios separados por comas o direcciones ip para determinar cómo ignorar la configuración del proxy. De manera opcional, esto puede definirse en la configuración de proxy como *to bypass en todos los dominios de nombres de hosts o direcciones ip."
      ],
      "Interval": [
        "Intervalo"
      ],
      "Interval was not provided": [
        "No se proporcionó el intervalo"
      ],
      "Latest Configurations Without Change": [
        "Configuraciones más recientes sin modificaciones"
      ],
      "Libvirt server’s fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. Make sure you setup root's SSH key on target host for a user specified at hypervisor username field": [
        ""
      ],
      "List of virt-who configurations": [
        "Lista de configuraciones virt-who"
      ],
      "List of virt-who configurations per organization": [
        "Lista de configuraciones virt-who por organización"
      ],
      "Microsoft Hyper-V fully qualified host name or IP address.": [
        "Nombre de host o dirección IP totalmente calificados de Microsoft Hyper-V."
      ],
      "Name": [
        "名称"
      ],
      "Name of this configuration, e.g. the name of the hypervisor": [
        "Nombre de esta configuración, por ejemplo: nombre del hipervisor"
      ],
      "New Config": [
        "Nueva configuración"
      ],
      "New Virt-who Config": [
        "Nueva configuración de virt-who"
      ],
      "Newer version of virt-who is required, minimum version is %s": [
        "Se requiere una versión más reciente de virt-who, la versión mínima es %s"
      ],
      "No Change": [
        "Sin cambios"
      ],
      "No Report Yet": [
        "Sin informes por el momento"
      ],
      "No Reports": [
        "Sin informes"
      ],
      "No change": [
        "Sin modificaciones"
      ],
      "No configuration found": [
        "No se encontró ninguna configuración"
      ],
      "Nutanix AHV’s IP address.": [
        ""
      ],
      "OK": [
        "Aceptar"
      ],
      "On the target virt-who host:": [
        "En el host de destino virt-who:"
      ],
      "On this page you can define virt-who configurations for your hypervisors.": [
        "En esta página, puede definir las configuraciones virt-who para sus hipervisores."
      ],
      "One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment.": [
        "La configuración de virt-who representa un archivo de configuración en el directorio /etc/virt-tho.d y establece una ruta a un único hipervisor, organización y entorno de ciclo de vida."
      ],
      "Only hosts which cluster ID is specified in comma-separated list in this option will be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Sólo se informará de los hosts cuyo uuid (o nombre de host o hwuuid, según <code>hypervisor_id</code>) se especifique en una lista separada por comas en esta opción. Se admiten comodines y expresiones regulares; los registros múltiples deben estar separados por comas. Ponga el valor entre comillas dobles si contiene caracteres especiales como la coma. Todos los caracteres de nueva línea se eliminarán en el archivo de configuración resultante, los espacios en blanco se eliminan del principio y del final."
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled": [
        ""
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled ": [
        ""
      ],
      "Organization of the virt-who configuration": [
        "Organización de la configuración virt-who"
      ],
      "Overview": [
        "Sinopsis"
      ],
      "Owner": [
        "Propietario"
      ],
      "Owner was not provided": [
        "No se proporcionó el propietario"
      ],
      "Path to kubeconfig file": [
        "Ruta al archivo kubeconfig"
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
        "Muestra un script de implementación para la configuración virt-who especificada"
      ],
      "Schedule": [
        "Programa"
      ],
      "Select the Prism flavor you are connecting to": [
        ""
      ],
      "Show a virt-who configuration": [
        "Mostrar una configuración virt-who"
      ],
      "Specifies how the hypervisor will be identified.": [
        "Especifica cómo se identificará el hipervisor."
      ],
      "Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.\\n                              Note that some virtualization backends don't have all of them implemented.\\n                              Default is <b>hostname</b>, which provides more meaningful hypervisor\\n                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.\\n                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager.": [
        "Especifica que los hipervisores serán identificados por su <b>hostname</b>, <b>uuid</b> o <b>hwuuid</b>.\\n                              Tenga en cuenta que algunos backends de virtualización no los tienen todos implementados.\\n                              Por defecto es <b>hostname</b>, que proporciona nombres de hipervisor más significativos\\n                                  más significativos, pero puede causar registros duplicados del hipervisor si se cambia el nombre del host. Para evitarlo, puede utilizar <b>uuid</b> en su lugar. <b>hwuuid</b> sólo es aplicable a esx.\\n                                  Esta propiedad debe configurarse antes de la ejecución inicial de virt-who. Cambiarla más tarde resultará en entradas duplicadas en el gestor de suscripciones."
      ],
      "Status": [
        "Estado"
      ],
      "Success": [
        "Éxito"
      ],
      "The configuration was not deployed yet or the virt-who was unable to report the status": [
        "La configuración todavía no se implementó o bien virt-who no pudo informar el estado"
      ],
      "The virt-who report arrived within the interval": [
        "Informe virt-who recibido en el intervalo"
      ],
      "The virt-who report has not arrived within the interval, which indicates there was no change on hypervisor": [
        "El informe virt-who no llegó en el intervalo, lo que indica que no se produjeron cambios en el hipervisor"
      ],
      "To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution.": [
        "Para definir una nueva configuración, haga clic en el botón Nueva configuración y complete el formulario. Después de proporcionar la información requerida, se generará un script de configuración de virt-who. Puede instalarlo manualmente al copiar el script o implementarlo en un host de destino seleccionado a través de la ejecución remota."
      ],
      "Total Configurations": [
        "Configuraciones totales"
      ],
      "Unable to create sysconfig file": [
        "No es posible crear el archivo de configuración del sistema"
      ],
      "Unable to create virt-who config file": [
        "No es posible crear el archivo de configuración virt-who"
      ],
      "Unable to enable virt-who service using systemctl": [
        "No se puede activar el servicio virt-who con systemctl"
      ],
      "Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository": [
        "No se puede instalar el paquete virt-who, asegúrese de que el host está correctamente suscrito y tiene acceso al repositorio katello-host-tools."
      ],
      "Unable to start virt-who service, please see virt-who logs for more details": [
        "No es posible iniciar el servicio virt-who. Consulte los registros de virt-who para obtener información detallada"
      ],
      "Unknown": [
        "Desconocido"
      ],
      "Unknown configuration status": [
        "Estado de configuración desconocido"
      ],
      "Unknown configuration status, caused by unexpected conditions": [
        "Estado de configuración desconocido provocado por condiciones inesperadas"
      ],
      "Unlimited": [
        "Ilimitado"
      ],
      "Update a virt-who configuration": [
        "Actualizar una configuración virt-who"
      ],
      "Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host:": [
        "Utilice el comando hammer o el script que aparece a continuación para desplegar esta configuración. Ambos requieren privilegios de root. Ejecute uno de ellos en el host de destino que tenga acceso al repositorio katello-host-tools y que ejecute el informe virt-who, preferiblemente el host Foreman:"
      ],
      "VMware vCenter server’s fully qualified host name or IP address.": [
        "Nombre de host o dirección IP totalmente calificados del servidor vCenter de VMWare."
      ],
      "Virt-who Configs Status": [
        "Estado de las configuraciones virt-who"
      ],
      "Virt-who Configuration %s": [
        "Configuración Virt-who %s"
      ],
      "Virt-who Configurations": [
        "Configuraciones de virt-who"
      ],
      "Virt-who Configurations Status": [
        "Estado de configuración de virt-who"
      ],
      "Whitelist": [
        "Lista blanca"
      ],
      "every %s hours": [
        "cada %s horas"
      ]
    }
  }
};