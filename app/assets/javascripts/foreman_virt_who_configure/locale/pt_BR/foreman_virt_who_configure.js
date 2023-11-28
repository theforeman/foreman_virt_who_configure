 locales['foreman_virt_who_configure'] = locales['foreman_virt_who_configure'] || {}; locales['foreman_virt_who_configure']['pt_BR'] = {
  "domain": "foreman_virt_who_configure",
  "locale_data": {
    "foreman_virt_who_configure": {
      "": {
        "Project-Id-Version": "foreman_virt_who_configure 0.5.17",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2017-05-03 11:59+0000",
        "Last-Translator": "Bryan Kearney <bryan.kearney@gmail.com>, 2023",
        "Language-Team": "Portuguese (Brazil) (https://app.transifex.com/foreman/teams/114/pt_BR/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "pt_BR",
        "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;",
        "lang": "pt_BR",
        "domain": "foreman_virt_who_configure",
        "plural_forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;"
      },
      "List of virt-who configurations": [
        "Lista de configurações do virt-who"
      ],
      "List of virt-who configurations per organization": [
        "Lista de configurações do virt-who por organização"
      ],
      "Show a virt-who configuration": [
        "Exibir uma configuração do virt-who"
      ],
      "Renders a deploy script for the specified virt-who configuration": [
        "Renderiza um script de implantação para a configuração especificada do virt-who"
      ],
      "Configuration name": [
        "Nome da configuração"
      ],
      "Configuration interval in minutes": [
        "Intervalo de configuração em minutos"
      ],
      "Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist": [
        "Modo de filtragem do Hypervisor, %{unlimited} significa sem filtragem, %{whitelist} significa lista branca, %{blacklist} significa lista negra"
      ],
      "Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "Lista de permissões do hipervisor, aplicável somente quando o modo de filtragrm está definido como 1. Curingas e expressões regulares são compatíveis, registros devem ser separados por vírgulas."
      ],
      "Hypervisor blacklist, applicable only when filtering mode is set to 2. Wildcards and regular expressions are supported, multiple records must be separated by comma.": [
        "Lista de bloqueios do hipervisor, aplicável somente quando o modo de filtragem está definido como 2. Curingas e expressões regulares são compatíveis, registros devem ser separados por vírgulas."
      ],
      "Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Aplicável apenas ao provedor do tipo de esx. Serão reportados somente os hosts cujo nome do pai (geralmente, ComputeResource) esteja especificado na lista separada por vírgulas nesta opção. Curingas e expressões regulares são suportados, múltiplos registros devem ser separados por vírgula. Coloque o valor entre aspas duplas se ele contiver caracteres especiais como vírgula. Todos os caracteres de nova linha serão removidos no arquivo de configuração resultante, espaços em branco são removidos do início e do fim."
      ],
      "Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Aplicável somente para o tipo de fornecedor esx. Anfitriões cujo nome do pai (geralmente ComputeResource) está especificado na lista separada por vírgula nesta opção <b>NÃO</b> será relatado. Wildcards e expressões regulares são suportados, múltiplos registros devem ser separados por vírgula. Coloque o valor nas aspas duplas se ele contiver caracteres especiais como vírgula. Todos os novos caracteres de linha serão removidos no arquivo de configuração resultante, espaços em branco são removidos do início e do fim."
      ],
      "Specifies how the hypervisor will be identified.": [
        "Especifica como o hipervisor será identificado."
      ],
      "Hypervisor type": [
        "Tipo de hipervisor"
      ],
      "Fully qualified host name or IP address of the hypervisor": [
        "Nome de host ou endereço IP completamente qualificado do hipervisor"
      ],
      "Account name by which virt-who is to connect to the hypervisor.": [
        "Nome da conta pela qual o virt-who está conectado ao hipervisor."
      ],
      "Hypervisor password, required for all hypervisor types except for libvirt/kubevirt.": [
        ""
      ],
      "Foreman server FQDN": [
        "Servidor do Foreman FQDN"
      ],
      "Enable debugging output": [
        "Habilitar saída de depuração"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details.": [
        ""
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers.": [
        "O proxy HTTP que deve ser usado para comunicação entre o servidor no qual o virt-who está em execução e os hipervisores e o gerentes de virtualização."
      ],
      "Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses.": [
        "Ignorar proxy. Uma lista separada por vírgulas de nomes de hosts, domínios ou endereços IP para os quais ignorar as configurações do proxy. Opcionalmente, isso pode ser definido como * para ignorar configurações de proxy para todos os domínios de nomes de hosts ou endereços IP."
      ],
      "Organization of the virt-who configuration": [
        "Organização da configuração do virt-who"
      ],
      "Select the Prism flavor you are connecting to": [
        ""
      ],
      "Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled": [
        ""
      ],
      "Create a virt-who configuration": [
        "Criar uma configuração do virt-who"
      ],
      "Update a virt-who configuration": [
        "Atualizar uma configuração do virt-who"
      ],
      "Configuration numeric identifier": [
        "Identificador numérico da configuração"
      ],
      "Delete a virt-who configuration": [
        "Excluir uma configuração do virt-who"
      ],
      "Create Config": [
        "Criar configuração"
      ],
      "New Config": [
        "Nova configuração"
      ],
      "Help": [
        "Ajuda"
      ],
      "VMware vCenter server’s fully qualified host name or IP address.": [
        "Nome de host ou endereço IP completamente qualificado do servidor vCenter VMware"
      ],
      "Microsoft Hyper-V fully qualified host name or IP address.": [
        "Nome de host ou endereço IP completamente qualificado do Microsoft Hyper-V."
      ],
      "Libvirt server’s fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. Make sure you setup root's SSH key on target host for a user specified at hypervisor username field": [
        ""
      ],
      "Container-native virtualization’s fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token.": [
        "A virtualização nativa do contêiner é um nome de host ou endereço IP completamente qualificado. Para conectar ao cluster, é necessário fornecer o caminho para o kubeconfig com os detalhes de conexão e o token de autenticação."
      ],
      "Nutanix AHV’s IP address.": [
        ""
      ],
      "Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\\\\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information.": [
        "Nome da conta pela qual o virt-whove deve se conectar ao hipervisor, no formato <code>nome_do_domínio\\\\nome_da_conta</code>. Note que somente uma única barra invertida separa os valores para domain_name e account_name. Se você estiver usando uma conta de domínio, e o arquivo de configuração global <code>/etc/virt-who.conf</code>, então <b>duas barras invertidas</b> são necessárias. Para maiores detalhes, veja <a href=\\\"https://access.redhat.com/solutions/1270223\\\">Red Hat Knowledgebase solução Como usar uma conta de domínio windows com virt-who.conf</a> para maiores informações."
      ],
      "Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users.": [
        "Nome da conta pela qual a virgem deve se conectar com o hipervisor. Por padrão, este é <code>Administrador</code>. Para utilizar uma conta alternativa, criar uma conta de usuário e atribuir essa conta aos seguintes grupos (Windows 2012 Server): Administradores Hyper-V e Usuários de Gerenciamento Remoto."
      ],
      "Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information.": [
        "Nome da conta pela qual a virgem deve se conectar com o hipervisor. Virt-quem não suporta autenticação baseada em senha, você deve configurar manualmente a chave SSH, veja <a href=\\\"https://access.redhat.com/solutions/1515983\\\">Solução Red Hat Knowledgebase Como configurar virt-quem para um host KVM</a> para mais informações."
      ],
      "Account name by which virt-who is to connect to Nutanix AHV.": [
        ""
      ],
      "No Report Yet": [
        "Nenhum relatório ainda"
      ],
      "Unknown configuration status": [
        "Status de configuração desconhecido"
      ],
      "Unlimited": [
        "Ilimitado"
      ],
      "Whitelist": [
        "Lista de permissões"
      ],
      "Blacklist": [
        "Lista de bloqueios"
      ],
      "General information": [
        "Informações gerais"
      ],
      "Schedule": [
        "Agendamento"
      ],
      "Connection": [
        "Conexão"
      ],
      "Every hour": [
        "A cada hora"
      ],
      "Every 2 hours": [
        "A cada duas horas"
      ],
      "Every 4 hours": [
        "A cada quatro horas"
      ],
      "Every 8 hours": [
        "A cada oito horas"
      ],
      "Every 12 hours": [
        "A cada 12 horas"
      ],
      "Every 24 hours": [
        "A cada 24 horas"
      ],
      "Every 2 days": [
        "A cada 2 dias"
      ],
      "Every 3 days": [
        "A cada 3 dias"
      ],
      "OK": [
        "OK"
      ],
      "No change": [
        "Sem alterações"
      ],
      "Unknown": [
        "Desconhecido"
      ],
      "Unknown configuration status, caused by unexpected conditions": [
        "Status de configuração desconhecido causado por condições inesperadas"
      ],
      "The configuration was not deployed yet or the virt-who was unable to report the status": [
        "A configuração não foi implantada ainda ou o virt-who não pode relatar o status"
      ],
      "The virt-who report arrived within the interval": [
        "O relatório do virt-who chegou no intervalo"
      ],
      "The virt-who report has not arrived within the interval, which indicates there was no change on hypervisor": [
        "O relatório do virt-who não chegou no intervalo, o que indica que não houve alterações no hipervisor"
      ],
      "Prism Central": [
        ""
      ],
      "Prism Element": [
        ""
      ],
      "every %s hours": [
        "a cada %s horas"
      ],
      "Success": [
        "Sucesso"
      ],
      "Newer version of virt-who is required, minimum version is %s": [
        "Versão mais recente do virt-quem é necessário, a versão mínima é %s"
      ],
      "Unable to create virt-who config file": [
        "Não é possível criar o arquivo de configuração do virt-who"
      ],
      "Unable to create sysconfig file": [
        "Não é possível criar o arquivo sysconfig "
      ],
      "Unable to enable virt-who service using systemctl": [
        "Incapaz de habilitar o serviço de virt-whove utilizando systemctl"
      ],
      "Unable to start virt-who service, please see virt-who logs for more details": [
        "Não foi possível iniciar o serviço virt-who, consulte os registros do virt-who para obter mais detalhes"
      ],
      "Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository": [
        "Incapaz de instalar o pacote virt-whooter, certifique-se de que o host está devidamente subscrito e tem acesso ao repositório de katello-host-tools"
      ],
      "Owner was not provided": [
        "Proprietário não fornecido"
      ],
      "Interval was not provided": [
        "Intervalo não fornecido"
      ],
      "Virt-who Configurations Status": [
        "Status de configuração do virt-who"
      ],
      "Configuration Status": [
        "Status de configuração"
      ],
      "Count": [
        "Contagem"
      ],
      "No Reports": [
        "Sem relatórios"
      ],
      "No Change": [
        "Não alterar"
      ],
      "Total Configurations": [
        "Total de configurações"
      ],
      "Latest Configurations Without Change": [
        "Configurações mais recentes sem alteração"
      ],
      "No configuration found": [
        "Nenhuma configuração encontrada"
      ],
      "Config|Name": [
        "Configuração|Nome"
      ],
      "Config|Last Report": [
        "Configuração|Último relatório"
      ],
      "Config|Interval": [
        "Configuração|Intervalo"
      ],
      "Edit Virt-who Config": [
        "Editar configuração do virt-who"
      ],
      "Virt-who Configurations": [
        "Configurações do virt-who"
      ],
      "Edit": [
        "Editar"
      ],
      "Status": [
        "Estado"
      ],
      "Actions": [
        "Ações"
      ],
      "Delete virt-who configuration %s?": [
        "Excluir a configuração virgem-quem %s?"
      ],
      "New Virt-who Config": [
        "Nova configuração do virt-who"
      ],
      "Virt-who Configuration %s": [
        "Configuração de Virt-whoho %s"
      ],
      "Overview": [
        "Visão Geral"
      ],
      "Deploy": [
        "Implantar"
      ],
      "Details": [
        "Detalhes"
      ],
      "Hypervisor ID": [
        "ID do hipervisor"
      ],
      "Filtering": [
        "Filtragem"
      ],
      "Filter Hosts": [
        "Filtrar hosts"
      ],
      "Exclude Hosts": [
        "Excluir hosts"
      ],
      "Enable debugging output?": [
        "Habilitar saída de depuração?"
      ],
      "HTTP Proxy": [
        "Proxy HTTP"
      ],
      "Ignore Proxy": [
        "Ignorar proxy"
      ],
      "Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host:": [
        "Use o comando de martelo ou o script abaixo para implantar esta configuração. Ambos requerem privilégios de raiz. Execute um deles no host alvo que tem acesso ao repositório de katello-host-tools e executará o virt-whools que reporta, de preferência o host Foreman:"
      ],
      "Hammer command: ": [
        "Comando martelo:"
      ],
      "Copy to clipboard": [
        "Copiar para área de transferência"
      ],
      "Configuration script: ": [
        "Script de configuração:"
      ],
      "On the target virt-who host:": [
        "No host virt-who de destino:"
      ],
      "1. Copy this configuration script to a safe directory.": [
        "1. Copie este script de configuração para um diretório seguro."
      ],
      "2. Make the script executable and run it.": [
        "2. Torne o script executável e o execute."
      ],
      "3. Delete the script.": [
        "3. Exclua o script."
      ],
      "Download the script": [
        "Faça download do script"
      ],
      "Foreman server’s fully-qualified host name, for example: foreman.example.com": [
        "Nome do servidor do Foreman totalmente qualificado, por exemplo: foran.example.com"
      ],
      "Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.\\n                              Note that some virtualization backends don't have all of them implemented.\\n                              Default is <b>hostname</b>, which provides more meaningful hypervisor\\n                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.\\n                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager.": [
        "Especifica que os hipervisores serão identificados por seu <b>hostname</b>, <b>uuid</b> ou <b>hwuuid</b>.\\n                              Note que alguns backends de virtualização não têm todos eles implementados.\\n                              O padrão é <b>hostname</b>, que fornece um hipervisor mais significativo.\\n                                  nomes, mas pode causar a duplicação de registros de hipervisor se o host for renomeado. Para evitar isso, você pode usar <b>uuid</b> em seu lugar. <b>hwuuid</b> é aplicável somente ao esx.\\n                                  Esta propriedade deve ser configurada antes do início do funcionamento do virt-who. Alterá-la posteriormente resultará em entradas duplicadas no gerenciador de assinaturas."
      ],
      "If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-who’s access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent.": [
        "Se você executar um ambiente híbrido, com máquinas virtuais executando Red Hat Enterprise Linux e outros sistemas operacionais, limite o escopo do acesso aos hosts do virt-who. Por exemplo, se alguns hipervisores hospedam somente instâncias do servidor Microsoft Windows, não há benefícios em esses hipervisores serem relatados pelo agente virt-who."
      ],
      "Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Somente os hosts que uuid (ou hostname ou hwuuid, baseado em <code>hypervisor_id</code>) estão especificados na lista separada por vírgulas nesta opção serão relatados. Wildcards e expressões regulares são suportados, múltiplos registros devem ser separados por vírgula. Coloque o valor nas aspas duplas se ele contiver caracteres especiais como vírgula. Todos os novos caracteres de linha serão removidos no arquivo de configuração resultante, espaços em branco são removidos do início e do fim."
      ],
      "Filter hosts": [
        "Filtrar hosts"
      ],
      "Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        "Os anfitriões que uuid (ou hostname ou hwuuid, baseado em <code>hypervisor_id</code>) é especificado na lista separada por vírgulas nesta opção <b>NÃO</b> será relatado. Wildcards e expressões regulares são suportados, múltiplos registros devem ser separados por vírgula. Coloque o valor nas aspas duplas se ele contiver caracteres especiais como vírgula. Todos os novos caracteres de linha serão removidos no arquivo de configuração resultante, espaços em branco são removidos do início e do fim."
      ],
      "Exclude hosts": [
        "Excluir hosts"
      ],
      "Only hosts which cluster ID is specified in comma-separated list in this option will be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Filter host parents": [
        "Filtrar pais de host"
      ],
      "Exclude hosts which cluster ID is specified in comma-separated list in this option will <b>NOT</b> be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster “ClusterName” | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end.": [
        ""
      ],
      "Exclude host parents": [
        "Excluir pais de host"
      ],
      "Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "Não é possível definir um valor de depuração diferente por hipervisor. Portanto, isso afetará todas as outras configurações implantadas no host em que essa configuração será implantada."
      ],
      "HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used.": [
        "O proxy HTTP deve ser usado para comunicação entre o servidor no qual o virt-who está em execução e os hipervisores e gerentes de virtualização. Deixe isso em branco se nenhum proxy for usado."
      ],
      "A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses.": [
        "Uma lista separada por vírgulas de nomes de hosts ou domínios ou endereços ip para ignorar as configurações de proxy. Opcionalmente, isto pode ser definido para <code>*</code> para ignorar as configurações de proxy para todos os domínios ou endereços ip de hostnames."
      ],
      "Ignore proxy": [
        "Ignorar proxy"
      ],
      "Configuration file containing details about how to connect to the cluster and authentication details": [
        "Arquivo de configuração contendo detalhes sobre como se conectar ao cluster e de autenticação"
      ],
      "Path to kubeconfig file": [
        "Caminho para o arquivo kubeconfig"
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
        "Nome dessa configuração. Por exemplo, o nome do hipervisor"
      ],
      "Name": [
        "Nome"
      ],
      "Owner": [
        "Proprietário"
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
        "Senha da conta pela qual o virt-who está conectado à instância do hipervisor."
      ],
      "How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed.": [
        "Com que frequência alterações nos hipervisores conectados devem ser verificadas? Também afeta a frequência com que um mapeamento é relatado. O valor recomendado para a maioria dos ambientes é a cada duas horas. Não é possível definir intervalos diferentes por hipervisor. Portanto, isso afetará todas as outras configurações implantadas no host em que essa configuração será implantada."
      ],
      "Interval": [
        "Intervalo"
      ],
      "Configs": [
        "Configs"
      ],
      "On this page you can define virt-who configurations for your hypervisors.": [
        "Nessa página, você define as configurações do virt-who para seus hipervisores."
      ],
      "One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment.": [
        "Uma configuração do virt-who representa um arquivo de configuração no diretório /etc/virt-who.d e mapeia um único hipervisor, organização e ambiente de ciclo de vida."
      ],
      "To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution.": [
        "Para definir uma nova configuração, clique no botão Nova configuração e preencha o formulário. Depois que você fornecer todas as informações necessárias, um script de configuração do virt-who será gerado. Você pode instalá-lo manualmente copiando o script ou implantá-lo em um host de destino selecionado com a execução remota."
      ],
      "Virt-who configurations": [
        "Configurações do virt-who"
      ],
      "Virt-who Configs Status": [
        "Status das configurações do virt-who"
      ],
      "A plugin to make virt-who configuration easy": [
        "Um plug-in para facilitar a configuração do virt-who"
      ],
      "Abstract async task": [
        "Tarefa assíncrona abstrata"
      ],
      "Action with sub plans": [
        "Ação com subplanos "
      ],
      "Agent action": [
        "Ação de agente"
      ],
      "Attach subscriptions": [
        "Anexar subscrições"
      ],
      "Auto attach subscriptions": [
        "Anexar as subscrições automaticamente"
      ],
      "Bulk generate applicability for hosts": [
        "Aplicabilidade de geração em massa para hosts"
      ],
      "Combined Profile Update": [
        "Atualização de perfil combinado"
      ],
      "Copy version units to library": [
        "Copiar unidades da versão para a biblioteca"
      ],
      "Create": [
        "Criar"
      ],
      "Create Export History": [
        "Criar histórico de exportação"
      ],
      "Create Import History": [
        "Criar histórico de importação"
      ],
      "Delete": [
        "Excluir"
      ],
      "Delete Activation Key": [
        "Remover chave de ativação"
      ],
      "Delete Lifecycle Environment": [
        "Remover um Ambiente de Ciclo de Vida"
      ],
      "Delete Product": [
        "Remover Produto"
      ],
      "Destroy": [
        "Destruir"
      ],
      "Destroy Content Host": [
        "Destruir Host de Conteúdo"
      ],
      "Disable": [
        "Desabilitar"
      ],
      "Discover": [
        "Descubra"
      ],
      "Enable": [
        "Habilitar"
      ],
      "Errata mail": [
        "E-mail da Errata"
      ],
      "Export": [
        "Exportar"
      ],
      "Export Library": [
        "Biblioteca de exportação"
      ],
      "Fetch pxe files": [
        "Buscar arquivos de PXE"
      ],
      "Filtered index content": [
        "Conteúdo de índice filtrado"
      ],
      "Generate host applicability": [
        "Gerar aplicabilidade de host"
      ],
      "Generate repository applicability": [
        "Gerar aplicabilidade de repositório"
      ],
      "Hypervisors": [
        "Hipervisores"
      ],
      "Hypervisors update": [
        "Atualização de hipervisores"
      ],
      "Import": [
        "Importar"
      ],
      "Import Content View Version": [
        "Versão Importar Conteúdo Ver"
      ],
      "Import Default Content View": [
        "Importação de Conteúdo Padrão"
      ],
      "Import Puppet classes": [
        "Importar classes de Puppet"
      ],
      "Import facts": [
        "Importar fatos"
      ],
      "Incremental Update": [
        "Atualização Adicional"
      ],
      "Incremental Update of  Content View Version(s) ": [
        "Atualização incremental de versão(ões) da Exibição de Conteúdo."
      ],
      "Index content": [
        "Indexar conteúdo "
      ],
      "Index errata": [
        "Errata de índice"
      ],
      "Index module streams": [
        "Indexar fluxos do módulo"
      ],
      "Index package groups": [
        "Indexar grupos de pacotes "
      ],
      "Install Applicable Errata": [
        "Instalar Errata Aplicável"
      ],
      "Instance update": [
        "Atualização de instância"
      ],
      "Package Profile Update": [
        "Atualização de Perfil de Pacote"
      ],
      "Product Create": [
        "Criação de Produto"
      ],
      "Promote": [
        "Promover"
      ],
      "Promotion to Environment": [
        "Promoção a ambiente"
      ],
      "Publish": [
        "Publicar"
      ],
      "Publish Lifecycle Environment Repositories": [
        "Publicar repositórios do ambiente de ciclo de vida"
      ],
      "Reindex subscriptions": [
        "Reindexar subscrições "
      ],
      "Remove Content": [
        "Remover Conteúdo"
      ],
      "Remove Version": [
        "Versão a Remover"
      ],
      "Remove Versions and Associations": [
        "Versões a remover e associações"
      ],
      "Remove from Environment": [
        "Remover do Ambiente"
      ],
      "Remove subscriptions": [
        "Remover as subscrições"
      ],
      "Report": [
        "Relatório"
      ],
      "Republish Version Repositories": [
        "Republicar repositórios da versão"
      ],
      "Run Sync Plan:": [
        "Executar plano de sincronização:"
      ],
      "Sync capsule": [
        "Sincronizar cápsula"
      ],
      "Synchronize": [
        "Sincronizar"
      ],
      "Synchronize smart proxy": [
        "Sincronizar proxy inteligente"
      ],
      "Update": [
        "Atualizar"
      ],
      "Update Content Overrides": [
        "Atualizar substituições do conteúdo"
      ],
      "Update content urls": [
        "Atualizar urls do conteúdo"
      ],
      "Update for host": [
        "Atualização para host"
      ],
      "Update http proxy": [
        "Atualizar proxy http"
      ],
      "Update http proxy details": [
        "Atualizar detalhes do proxy http"
      ],
      "Update redhat repository": [
        "Atualizar repositório redhat"
      ],
      "Update release version for host": [
        "Atualizar versão do host"
      ],
      "Updating System Purpose for host": [
        "Atualização do sistema Objetivo do sistema de hospedagem"
      ],
      "Upload into": [
        "Carregar em"
      ],
      "Verify checksum": [
        "Verificação do checksum"
      ]
    }
  }
};