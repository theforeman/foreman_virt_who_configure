Þ          Ì  Ó   |	      È  6   É  )         *  Í   @  ,     <   ;    x  ?       Ð  5  í  L   #     p  Ô  x  Î  M  	        &     .  d   C  e   ¨  !        0      C     d     {            
   ª  Ø   µ                ¦     ´     Ô  !   ô            §   %     Í     á     æ     û          $     =     L     Y     g     v            
        ª     ¸     Í    Û     â     ï       	          N   .  9   }     ·  
   Ë     Ö  ·   h            1   É  6   H   "     I#     W#     k#     }#     #  ¤   ¡#  v   F$  S   ½$     %  ¤   !%  T  Æ%     '     ('  Î   5'     (     (  $   '(    L(     T)  0   t)  :   ¥)     à)  ;   å)  
   !*     ,*  <   @*  	   }*     *  
   *  	    *     ª*     Á*     Ý*     à*  I   ý*     G+  ø  á+  Ã  Ú-     /     -0  *   ½0     è0     ñ0     ÷0     1     &1     41     B1  @   O1     1  -   1     Ç1  0   å1  ¹  2     Ð4     ×4  V   ß4  /   65  j   f5  *  Ñ5     ü6     7  %   17  1   W7  }   7  K   8     S8     [8  =   x8  	   ¶8     À8  ø   à8  B   Ù9     :     4:     N:     f:  	   :     :  ¤  :  W   C<  N   <  '   ê<  >  =  0   Q>  R   >  ®  Õ>  ]   A    âA    uC  {   	E     E  f  E  a  üG     ^J     tJ     {J  N   J  N   àJ     /K  	   KK     UK     eK     }K     K     K     ¡K  ô   ¨K  $   L     ÂL     ÏL     ßL  $   øL  )   M     GM     TM  É   [M  $   %N     JN     QN     jN     N  +   ¦N     ÒN     âN     îN     ýN     O     O     (O     7O     >O     QO     jO    }O  !   R  '   8R  !   `R     R     R  J   µR  L    S     MS     ZS  ®   oS  ÿ   T     U  	   4U  L  >U    W      Y  *   <Y  '   gY  $   Y  *   ´Y  )  ßY  ä   	[     î[  $   o\  )  \  ð  ¾]     ¯_     Î_  L  ç_     4a  $   ;a     `a  e  a  *   åb  %   c  I   6c     c  >   c     Æc     Óc  U   êc     @d  $   Md     rd     d     d  "   ½d     àd  &   ãd  X   
e  Ô   ce    8f  P  Êh  Í   k  Ï   ék     ¹l     Òl  	   Ùl  '   ãl  #   m     /m     =m     Km  ]   am     ¿m  (   Òm  $   ûm  <    n  ¶  ]n     r     r  s   "r  .   r     År  ª  Ps     ût  .   u  3   :u  J   nu  Ö   ¹u  f   v     ÷v     þv  H   w  	   fw     pw  j  w  O   ôx     Dy     cy     vy     y     ¥y     »y     n   U   T       V   	   6   d   D       .   o      /   G       @           -       M   [   R   _       W   N      '                 H       
      Y   %   l   i             C   $      ~      y       <         j   B            (                   8   3             \   h          K   q         s       +           J                     =   {              e   L   t   c      A                          P   *   4              &   w       9      `       v   "   ^         :              X          |                       ;                  u   m                x           Z                 g       0                 !   5       7   )   2   1   a           F      k   #          z   ,       I   S   ]           r      p          Q          O       E       >       ?   }          f       b    1. Copy this configuration script to a safe directory. 2. Make the script executable and run it. 3. Delete the script. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to <code>*</code> to bypass proxy settings for all hostnames domains or ip addresses. A plugin to make virt-who configuration easy Account name by which virt-who is to connect to Nutanix AHV. Account name by which virt-who is to connect to the hypervisor, in the format <code>domain_name\account_name</code>. Note that only a single backslash separates the values for domain_name and account_name. If you are using a domain account, and the global configuration file <code>/etc/virt-who.conf</code>, then <b>two</b> backslashes are required. For further details, see <a href="https://access.redhat.com/solutions/1270223">Red Hat Knowledgebase solution How to use a windows domain account with virt-who</a> for more information. Account name by which virt-who is to connect to the hypervisor. Account name by which virt-who is to connect to the hypervisor. By default this is <code>Administrator</code>. To use an alternate account, create a user account and assign that account to the following groups (Windows 2012 Server): Hyper-V Administrators and Remote Management Users. Account name by which virt-who is to connect to the hypervisor. Virt-who does not support password based authentication, you must manually setup SSH key, see <a href="https://access.redhat.com/solutions/1515983">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a> for more information. Account password by which virt-who is to connect to the hypervisor instance. Actions Applicable only for esx provider type. Hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end. Applicable only for esx provider type. Only hosts which parent (usually ComputeResource) name is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end. Blacklist Configs Configuration Status Configuration file containing details about how to connect to the cluster and authentication details Configuration file containing details about how to connect to the cluster and authentication details. Configuration interval in minutes Configuration name Configuration numeric identifier Configuration script:  Config|Interval Config|Last Report Config|Name Connection Container-native virtualizationâs fully qualified host name or IP address. In order to connect to the cluster it is required to provide path to kubeconfig which contains connection details and authentication token. Copy to clipboard Count Create Config Create a virt-who configuration Delete a virt-who configuration Delete virt-who configuration %s? Deploy Details Different debug value can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed. Download the script Edit Edit Virt-who Config Enable AHV debug Enable debugging output Enable debugging output? Every 12 hours Every 2 days Every 2 hours Every 24 hours Every 3 days Every 4 hours Every 8 hours Every hour Exclude Hosts Exclude host parents Exclude hosts Exclude hosts which cluster ID is specified in comma-separated list in this option will <b>NOT</b> be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster âClusterNameâ | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end. Filter Hosts Filter host parents Filter hosts Filtering Foreman server FQDN Foreman serverâs fully-qualified host name, for example: foreman.example.com Fully qualified host name or IP address of the hypervisor General information HTTP Proxy HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. HTTP proxy that should be used for communication between the server on which virt-who is running and the hypervisors and virtualization managers. Leave this blank if no proxy is used. Hammer command:  Help Hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will <b>NOT</b> be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end. How often to check connected hypervisors for changes? Also affects how often a mapping is reported. The recommended value for most environments is every two hours. Different interval can't be set per hypervisor, therefore it will affect all other deployed configurations on the host on which this configuration will be deployed. Hypervisor ID Hypervisor Password Hypervisor Server Hypervisor Type Hypervisor Username Hypervisor blacklist, applicable only when filtering mode is set to 2. Wildcards and regular expressions are supported, multiple records must be separated by comma. Hypervisor filtering mode, %{unlimited} means no filtering, %{whitelist} means whitelist, %{blacklist} means blacklist Hypervisor password, required for all hypervisor types except for libvirt/kubevirt. Hypervisor type Hypervisor whitelist, applicable only when filtering mode is set to 1. Wildcards and regular expressions are supported, multiple records must be separated by comma. If you run a hybrid environment, with virtual machines running Red Hat Enterprise Linux and other operating systems, you may want to limit the scope of virt-whoâs access to hosts. For example, if some hypervisors host only Microsoft Windows Server instances, there is no benefit in having those hypervisors reported by the virt-who agent. Ignore Proxy Ignore proxy Ignore proxy. A comma-separated list of hostnames or domains or ip addresses to ignore proxy settings for. Optionally this may be set to * to bypass proxy settings for all hostnames domains or ip addresses. Interval Interval was not provided Latest Configurations Without Change Libvirt serverâs fully qualified host name or IP address. You can also specify preferred schema, for example: <code>qemu+ssh://libvirt.example.com/system</code>. Make sure you setup root's SSH key on target host for a user specified at hypervisor username field List of virt-who configurations List of virt-who configurations per organization Microsoft Hyper-V fully qualified host name or IP address. Name Name of this configuration, e.g. the name of the hypervisor New Config New Virt-who Config Newer version of virt-who is required, minimum version is %s No Change No Report Yet No Reports No change No configuration found Nutanix AHVâs IP address. OK On the target virt-who host: On this page you can define virt-who configurations for your hypervisors. One virt-who configuration represents one config file in /etc/virt-who.d directory and maps to single hypervisor, organization and lifecycle environment. Only hosts which cluster ID is specified in comma-separated list in this option will be reported. PowerCLI command to find the domain names in VMware <code>Get-Cluster âClusterNameâ | Select ID</code>. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end. Only hosts which uuid (or hostname or hwuuid, based on <code>hypervisor_id</code>) is specified in comma-separated list in this option will be reported. Wildcards and regular expressions are supported, multiple records must be separated by comma. Put the value into the double-quotes if it contains special characters like comma. All new line characters will be removed in resulting configuration file, white spaces are removed from beginning and end. Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled Option Enable debugging output is required to enable AHV internal debug. It provides extra AHV debug information when both options are enabled  Organization of the virt-who configuration Overview Owner Owner was not provided Path to kubeconfig file Prism Central Prism Element Prism Flavor Renders a deploy script for the specified virt-who configuration Schedule Select the Prism flavor you are connecting to Show a virt-who configuration Specifies how the hypervisor will be identified. Specifies that hypervisors will be identified by their <b>hostname</b>, <b>uuid</b> or <b>hwuuid</b>.
                              Note that some virtualization backends don't have all of them implemented.
                              Default is <b>hostname</b>, which provides more meaningful hypervisor
                                  names, but can cause duplicated hypervisor registrations if the host is renamed. To avoid that, you can use <b>uuid</b> instead. <b>hwuuid</b> is applicable to esx only.
                                  This property is meant to be set up before the initial run of virt-who. Changing it later will result in duplicated entries in the subscription manager. Status Success The configuration was not deployed yet or the virt-who was unable to report the status The virt-who report arrived within the interval The virt-who report has not arrived within the interval, which indicates there was no change on hypervisor To define a new configuration, click the New Config button and fill in the form. After you provide all required information a virt-who configuration script will be generated. You could either install it manually by copying the script or deploy it on a selected target host through Remote Execution. Total Configurations Unable to create sysconfig file Unable to create virt-who config file Unable to enable virt-who service using systemctl Unable to install virt-who package, make sure the host is properly subscribed and has access to katello-host-tools repository Unable to start virt-who service, please see virt-who logs for more details Unknown Unknown configuration status Unknown configuration status, caused by unexpected conditions Unlimited Update a virt-who configuration Use either hammer command or the script below to deploy this configuration. Both require root privileges. Run one of them on the target host which has access to katello-host-tools repository and will run virt-who reporting, preferably Foreman host: VMware vCenter serverâs fully qualified host name or IP address. Virt-who Configs Status Virt-who Configuration %s Virt-who Configurations Virt-who Configurations Status Whitelist every %s hours Project-Id-Version: foreman_virt_who_configure 0.5.25
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2017-05-03 11:59+0000
Last-Translator: Ewoud Kohl van Wijngaarden <ewoud+transifex@kohlvanwijngaarden.nl>, 2025
Language-Team: Japanese (https://app.transifex.com/foreman/teams/114/ja/)
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Language: ja
Plural-Forms: nplurals=1; plural=0;
 1. ãã®è¨­å®ã¹ã¯ãªãããå®å¨ãªãã£ã¬ã¯ããªã¼ã«ã³ãã¼ãã¾ãã 2. ã¹ã¯ãªãããå®è¡å¯è½ãªç¶æã«ãããããå®è¡ãã¾ãã 3. ã¹ã¯ãªãããåé¤ãã¾ãã ãã­ã­ã·ã¼è¨­å®ãç¡è¦ãããã¹ãåããã¡ã¤ã³ã¾ãã¯ IP ã¢ãã¬ã¹ã®ã³ã³ãåºåãã®ä¸è¦§ããªãã·ã§ã³ã¨ãã¦ãããã <code>*</code> ã«è¨­å®ãããã¹ã¦ã®ãã¹ãåãã¡ã¤ã³ã¾ãã¯ IP ã¢ãã¬ã¹ã®ãã­ã­ã·ã¼è¨­å®ããã¤ãã¹ãããã¨ãã§ãã¾ãã virt-who è¨­å®ãå®¹æã«ãããã©ã°ã¤ã³ virt-who ã Nutanix AHV ã«æ¥ç¶ããéã«ä½¿ç¨ãããã¢ã«ã¦ã³ãåã virt-who ã <code>domain_name\account_name</code> å½¢å¼ã§ãã¤ãã¼ãã¤ã¶ã¼ã«æ¥ç¶ããéã«ä½¿ç¨ããã¢ã«ã¦ã³ãåãåä¸ã®ããã¯ã¹ã©ãã·ã¥ã®ã¿ã domain_name ããã³ account_name ã®å¤ãåºå¥ãããã¨ã«æ³¨æãã¦ãã ããããã¡ã¤ã³ã¢ã«ã¦ã³ãããã³ã°ã­ã¼ãã«è¨­å®ãã¡ã¤ã« <code>/etc/virt-who.conf</code> ãä½¿ç¨ãã¦ããå ´åã<b>2 ã¤</b> ã®ããã¯ã¹ã©ãã·ã¥ãå¿è¦ã«ãªãã¾ããè©³ç´°ã¯ãRed Hat ãã¬ãã¸ãã¼ã¹ã®ã½ãªã¥ã¼ã·ã§ã³è¨äºã<a href="https://access.redhat.com/solutions/1270223">How to use a windows domain account with virt-who</a>ããåç§ãã¦ãã ããã virt-who ããã¤ãã¼ãã¤ã¶ã¼ã«æ¥ç¶ããéã«ä½¿ç¨ãããã¢ã«ã¦ã³ãåã virt-who ããã¤ãã¼ãã¤ã¶ã¼ã«æ¥ç¶ããéã«ä½¿ç¨ãããã¢ã«ã¦ã³ãåãããã©ã«ãã§ãããã¯ <code>Administrator</code> ã«ãªãã¾ããä»£æ¿ã¢ã«ã¦ã³ããä½¿ç¨ããã«ã¯ãã¦ã¼ã¶ã¼ã¢ã«ã¦ã³ããä½æãããã®ã¢ã«ã¦ã³ããæ¬¡ã®ã°ã«ã¼ãã«å²ãå½ã¦ã¾ã (Windows 2012 Server): Hyper-V ç®¡çèããã³ãªã¢ã¼ãç®¡çã¦ã¼ã¶ã¼ã virt-who ããã¤ãã¼ãã¤ã¶ã¼ã«æ¥ç¶ããéã«ä½¿ç¨ãããã¢ã«ã¦ã³ãåãVirt-who ã¯ãã¹ã¯ã¼ããã¼ã¹ã®èªè¨¼ããµãã¼ãããªããããSSH éµãæåã§è¨­å®ããå¿è¦ãããã¾ããè©³ç´°ã¯ãã<a href="https://access.redhat.com/solutions/1515983">Red Hat Knowledgebase solution How to configure virt-who for a KVM host</a>ããåç§ãã¦ãã ããã virt-who ããã¤ãã¼ãã¤ã¶ã¼ã¤ã³ã¹ã¿ã³ã¹ã«æ¥ç¶ããéã«ä½¿ç¨ãããã¢ã«ã¦ã³ããã¹ã¯ã¼ãã ã¢ã¯ã·ã§ã³ esx ãã­ãã¤ãã¼ã¿ã¤ãã«ã®ã¿é©ç¨ã§ãã¾ããè¦ª (éå¸¸ã¯ ComputeResource) ã®ååããã®ãªãã·ã§ã³ã®ã³ã³ãåºåãã®ä¸è¦§ã«æå®ããã¦ãããã¹ãã®å ´åã¯ <b>ã¬ãã¼ãããã¾ãã</b>ãã¯ã¤ã«ãã«ã¼ãããã³æ­£è¦è¡¨ç¾ããµãã¼ããããè¤æ°ã®ã¬ã³ã¼ãã¯ã³ã³ãã§åºåãããå¿è¦ãããã¾ããã³ã³ããªã©ã®ç¹æ®æå­ãå«ã¾ãã¦ããå ´åã¯å¤ãäºéå¼ç¨ç¬¦ã§å²ã¿ã¾ãããã¹ã¦ã®æ¹è¡æå­ã¯çæãããè¨­å®ãã¡ã¤ã«ã§åé¤ãããç©ºç½ã¯åé ­ããã³æ«å°¾ããåé¤ããã¾ãã esx ãã­ãã¤ãã¼ã¿ã¤ãã«ã®ã¿é©ç¨ã§ãã¾ããè¦ª (éå¸¸ã¯ ComputeResource) ã®ååããã®ãªãã·ã§ã³ã®ã³ã³ãåºåãã®ä¸è¦§ã«æå®ããã¦ãããã¹ãã®å ´åã«ã®ã¿ã¬ãã¼ãããã¾ããã¯ã¤ã«ãã«ã¼ãããã³æ­£è¦è¡¨ç¾ããµãã¼ããããè¤æ°ã®ã¬ã³ã¼ãã¯ã³ã³ãã§åºåãããå¿è¦ãããã¾ããã³ã³ããªã©ã®ç¹æ®æå­ãå«ã¾ãã¦ããå ´åã¯å¤ãäºéå¼ç¨ç¬¦ã§å²ã¿ã¾ãããã¹ã¦ã®æ¹è¡æå­ã¯çæãããè¨­å®ãã¡ã¤ã«ã§åé¤ãããç©ºç½ã¯åé ­ããã³æ«å°¾ããåé¤ããã¾ãã ãã©ãã¯ãªã¹ã è¨­å® è¨­å®ã¹ãã¼ã¿ã¹ ã¯ã©ã¹ã¿ã¼ã¸ã®æ¥ç¶æ¹æ³ã¨èªè¨¼ã®è©³ç´°ãå«ãè¨­å®ãã¡ã¤ã« ã¯ã©ã¹ã¿ã¼ã¸ã®æ¥ç¶æ¹æ³ã¨èªè¨¼ã®è©³ç´°ãå«ãè¨­å®ãã¡ã¤ã« è¨­å®ã®éé (ååä½) è¨­å®å è¨­å®æ°å¤ ID è¨­å®ã¹ã¯ãªãã:  éé æå¾ã®ã¬ãã¼ã åå æ¥ç¶ ã³ã³ããã¼ãã¤ãã£ãã®ä»®æ³åã®å®å¨ä¿®é£¾ãã¹ãåã¾ãã¯ IP ã¢ãã¬ã¹ãã¯ã©ã¹ã¿ã¼ã«æ¥ç¶ããã«ã¯ãæ¥ç¶ã®è©³ç´°ã¨èªè¨¼ãã¼ã¯ã³ãå«ã kubeconfig ã¸ã®ãã¹ãæå®ããå¿è¦ãããã¾ãã ã¯ãªãããã¼ãã¸ã®ã³ãã¼ ã«ã¦ã³ã è¨­å®ã®ä½æ virt-who è¨­å®ã®ä½æ virt-who è¨­å®ãåé¤ãã¾ãã virt-who è¨­å® %s ãåé¤ãã¾ãã? ããã­ã¤ è©³ç´° ãã¤ãã¼ãã¤ã¶ã¼ãã¨ã«ç°ãªããããã°å¤ãè¨­å®ã§ãã¾ããããã®ããããã®è¨­å®ãããã­ã¤ãããã¹ãã«ããã­ã¤æ¸ã¿ã®ä»ã®å¨è¨­å®ã«å½±é¿ãã¾ãã ã¹ã¯ãªããã®ãã¦ã³ã­ã¼ã ç·¨é Virt-who è¨­å®ã®ç·¨é AHV ãããã°ã®æå¹å ãããã°åºåã®æå¹å ãããã°åºåãæå¹ã«ãã¾ãã? 12 æéãã¨ 2 æ¥ãã¨ 2 æéãã¨ 24 æéãã¨ 3 æ¥ãã¨ 4 æéãã¨ 8 æéãã¨ æ¯æ ãã¹ãã®é¤å¤ ãã¹ãã®è¦ªã®é¤å¤ ãã¹ãã®é¤å¤ ã¯ã©ã¹ã¿ã¼ ID ããã®ãªãã·ã§ã³ã®ã³ã³ãåºåãã®ä¸è¦§ã«æå®ããã¦ãããã¹ãã¯ãã¬ãã¼ã<b>ããã¾ãã</b>ãPowerCLI ã³ãã³ããä½¿ç¨ãã¦ VMware ã§ãã¡ã¤ã³åãæ¤ç´¢ãã¾ã (<code>Get-Cluster âClusterNameâ | Select ID</code>)ãã¯ã¤ã«ãã«ã¼ãããã³æ­£è¦è¡¨ç¾ããµãã¼ããããè¤æ°ã®ã¬ã³ã¼ãã¯ã³ã³ãã§åºåãããå¿è¦ãããã¾ããã³ã³ããªã©ã®ç¹æ®æå­ãå«ã¾ãã¦ããå ´åã¯å¤ãäºéå¼ç¨ç¬¦ã§å²ã¿ã¾ãããã¹ã¦ã®æ¹è¡æå­ã¯çæãããè¨­å®ãã¡ã¤ã«ã§åé¤ãããç©ºç½ã¯åé ­ããã³æ«å°¾ããåé¤ããã¾ãã ãã¹ãã®ãã£ã«ã¿ãªã³ã° ãã¹ãã®è¦ªã®ãã£ã«ã¿ãªã³ã° ãã¹ãã®ãã£ã«ã¿ãªã³ã° ãã£ã«ã¿ãªã³ã° Foreman ãµã¼ãã¼ã® FQDN Foreman ãµã¼ãã¼ã®å®å¨ä¿®é£¾ãã¹ãå (ä¾: foreman.example.com) ãã¤ãã¼ãã¤ã¶ã¼ã®å®å¨ä¿®é£¾ãã¹ãåã¾ãã¯ IP ã¢ãã¬ã¹ ä¸è¬æå ± HTTP ãã­ã­ã·ã¼ virt-who ãå®è¡ããã¦ãããµã¼ãã¼ã¨ãã¤ãã¼ãã¤ã¶ã¼ããã³ä»®æ³åããã¼ã¸ã£ã¼éã®éä¿¡ã«ä½¿ç¨ããå¿è¦ã®ãã HTTP ãã­ã­ã·ã¼ã virt-who ãå®è¡ããã¦ãããµã¼ãã¼ã¨ãã¤ãã¼ãã¤ã¶ã¼ããã³ä»®æ³åããã¼ã¸ã£ã¼éã®éä¿¡ã«ä½¿ç¨ããå¿è¦ã®ãã HTTP ãã­ã­ã·ã¼ããã­ã­ã·ã¼ãä½¿ç¨ããã¦ããªãå ´åã¯ãããç©ºç½ã«ãã¾ãã Hammer ã³ãã³ã:  ãã«ã uuid (ã¾ãã¯ <code>hypervisor_id</code> ã«å¿ãã¦ãã¹ãåã¾ãã¯ hwuuid) ããã®ãªãã·ã§ã³ã®ã³ã³ãåºåãã®ä¸è¦§ã«æå®ããã¦ãããã¹ãã¯ <b>ã¬ãã¼ãããã¾ãã</b>ãã¯ã¤ã«ãã«ã¼ãããã³æ­£è¦è¡¨ç¾ããµãã¼ããããè¤æ°ã®ã¬ã³ã¼ãã¯ã³ã³ãã§åºåãããå¿è¦ãããã¾ããã³ã³ããªã©ã®ç¹æ®æå­ãå«ã¾ãã¦ããå ´åã¯å¤ãäºéå¼ç¨ç¬¦ã§å²ã¿ã¾ãããã¹ã¦ã®æ¹è¡æå­ã¯çæãããè¨­å®ãã¡ã¤ã«ã§åé¤ãããç©ºç½ã¯åé ­ããã³æ«å°¾ããåé¤ããã¾ãã æ¥ç¶æ¸ã¿ã®ãã¤ãã¼ãã¤ã¶ã¼ã«å¤æ´ããªãããã©ã®ãããªé »åº¦ã§ç¢ºèªãã¾ãã?ã¾ãããããã³ã°ã®å ±åé »åº¦ã«ãå½±é¿ãã¾ããå¤§åã®ç°å¢ã§ã®æ¨å¥¨å¤ã¯ã2æéãã¨ã§ãããã¤ãã¼ãã¤ã¶ã¼ãã¨ã«ç°ãªãééãè¨­å®ã§ããã®ã§ããã®è¨­å®ãããã­ã¤ãããã¹ãã«è¨­å®æ¸ã¿ã®ä»ã®å¨è¨­å®ã«å½±é¿ãããã¾ãã ãã¤ãã¼ãã¤ã¶ã¼ ID ãã¤ãã¼ãã¤ã¶ã¼ã®ãã¹ã¯ã¼ã ãã¤ãã¼ãã¤ã¶ã¼ã®ãµã¼ãã¼ ãã¤ãã¼ãã¤ã¶ã¼ã®ã¿ã¤ã ãã¤ãã¼ãã¤ã¶ã¼ã®ã¦ã¼ã¶ã¼å ãã£ã«ã¿ãªã³ã°ã¢ã¼ãã 2 ã«è¨­å®ããã¦ããå ´åã«ã®ã¿é©ç¨ã§ãããã¤ãã¼ãã¤ã¶ã¼ã®ãã©ãã¯ãªã¹ãã§ããã¯ã¤ã«ãã«ã¼ãããã³æ­£è¦è¡¨ç¾ããµãã¼ãããã¦ãããè¤æ°ã®ã¬ã³ã¼ãã¯ã³ã³ãã§åºåãããå¿è¦ãããã¾ãã ãã¤ãã¼ãã¤ã¶ã¼ã®ãã£ã«ã¿ãªã³ã°ã¢ã¼ãã%%{unlimited} ã¯ãã£ã«ã¿ãªã³ã°ããªããã¨ãæå³ãã%%{whitelist} ã¯ãã¯ã¤ããªã¹ãã%%{blacklist} ã¯ãã©ãã¯ãªã¹ããæå³ãã¾ãã libvirt/kubevirt ãé¤ããã¹ã¦ã®ãã¤ãã¼ãã¤ã¶ã¼ã®ã¿ã¤ãã«å¿è¦ãªãã¤ãã¼ãã¤ã¶ã¼ã®ãã¹ã¯ã¼ã ãã¤ãã¼ãã¤ã¶ã¼ã®ã¿ã¤ã ãã£ã«ã¿ãªã³ã°ã¢ã¼ãã 1 ã«è¨­å®ããã¦ããå ´åã«ã®ã¿é©ç¨ã§ãããã¤ãã¼ãã¤ã¶ã¼ã®ãã¯ã¤ããªã¹ãã§ããã¯ã¤ã«ãã«ã¼ãããã³æ­£è¦è¡¨ç¾ããµãã¼ãããã¦ãããè¤æ°ã®ã¬ã³ã¼ãã¯ã³ã³ãã§åºåãããå¿è¦ãããã¾ãã Red Hat Enterprise Linux ããã³ãã®ä»ã®ãªãã¬ã¼ãã£ã³ã°ã·ã¹ãã ãå®è¡ããä»®æ³ãã·ã³ã§ãã¤ããªããç°å¢ãå®è¡ããå ´åã¯ãvirt-who ã®ãã¹ãã¸ã®ã¢ã¯ã»ã¹ã®ç¯å²ãå¶éãããã¨ããå§ããã¾ãããã¨ãã°ãä¸é¨ã®ãã¤ãã¼ãã¤ã¶ã¼ã Microsoft Windows Server ã¤ã³ã¹ã¿ã³ã¹ã®ã¿ããã¹ãããå ´åããããã®ãã¤ãã¼ãã¤ã¶ã¼ã virt-who ã¨ã¼ã¸ã§ã³ããå ±åããå©ç¹ã¯ããã¾ããã ãã­ã­ã·ã¼ãç¡è¦ãã ãã­ã­ã·ã¼ãç¡è¦ ãã­ã­ã·ã¼ãç¡è¦ãã¾ãããã­ã­ã·ã¼è¨­å®ãç¡è¦ãããã¹ãåããã¡ã¤ã³ã¾ãã¯ IP ã¢ãã¬ã¹ã®ã³ã³ãåºåãã®ä¸è¦§ã§ãããªãã·ã§ã³ã¨ãã¦ãããã¯ * ã«è¨­å®ã§ãããã¹ã¦ã®ãã¹ãåãã¡ã¤ã³ã¾ãã¯ IP ã¢ãã¬ã¹ã®ãã­ã­ã·ã¼è¨­å®ããã¤ãã¹ãã¾ãã éé ééã¯æå®ããã¦ãã¾ãã å¤æ´ã®ãªãææ°ã®è¨­å® Libvirt ãµã¼ãã¼ã®å®å¨ä¿®é£¾ãã¹ãåã¾ãã¯ IP ã¢ãã¬ã¹ãåªåã¹ã­ã¼ããæå®ãããã¨ãã§ãã¾ããä¾:<code> qemu+ssh://libvirt.example.com/system</code>ããã¤ãã¼ãã¤ã¶ã¼ã®ã¦ã¼ã¶ã¼åãã£ã¼ã«ãã§æå®ãããã¦ã¼ã¶ã¼ã®ã¿ã¼ã²ãããã¹ãã«ã«ã¼ãã® SSH éµãè¨­å®ãã¦ãã ããã virt-who è¨­å®ä¸è¦§ãè¡¨ç¤ºãã¾ãã çµç¹å¥ã® virt-who è¨­å®ã®ä¸è¦§ Microsoft Hyper-V ã®å®å¨ä¿®é£¾ãã¹ãåã¾ãã¯ IP ã¢ãã¬ã¹ã åå ãã®è¨­å®ã®ååãä¾: ãã¤ãã¼ãã¤ã¶ã¼ã®åå æ°è¦è¨­å® æ°è¦ Virt-who è¨­å® virt-who ã®æ°è¦ãã¼ã¸ã§ã³ãå¿è¦ã§ããæå°ãã¼ã¸ã§ã³ã¯ %s ã§ã å¤æ´ãªã ã¬ãã¼ãã¯ã¾ã ããã¾ãã ã¬ãã¼ããããã¾ãã å¤æ´ãªã è¨­å®ãè¦ã¤ããã¾ãã Nutanix AHV ã® IP ã¢ãã¬ã¹ã OK ã¿ã¼ã²ãã virt-who ãã¹ãä¸: ãã®ãã¼ã¸ã§ããã¤ãã¼ãã¤ã¶ã¼ã® virt-who è¨­å®ãå®ç¾©ã§ãã¾ãã 1 ã¤ã® virt-who è¨­å®ã¯ /etc/virt-who.d ãã£ã¬ã¯ããªã¼ã® 1 ã¤ã®è¨­å®ãã¡ã¤ã«ãè¡¨ããåä¸ã®ãã¤ãã¼ãã¤ã¶ã¼ãçµç¹ããã³ã©ã¤ããµã¤ã¯ã«ç°å¢ã«ãããããã¾ãã ã¯ã©ã¹ã¿ã¼ ID ããã®ãªãã·ã§ã³ã®ã³ã³ãåºåãã®ä¸è¦§ã«æå®ããã¦ãããã¹ãã ããã¬ãã¼ãããã¾ããPowerCLI ã³ãã³ããä½¿ç¨ãã¦ VMware ã§ãã¡ã¤ã³åãæ¤ç´¢ãã¾ã (<code>Get-Cluster âClusterNameâ | Select ID</code>)ãã¯ã¤ã«ãã«ã¼ãããã³æ­£è¦è¡¨ç¾ããµãã¼ããããè¤æ°ã®ã¬ã³ã¼ãã¯ã³ã³ãã§åºåãããå¿è¦ãããã¾ããã³ã³ããªã©ã®ç¹æ®æå­ãå«ã¾ãã¦ããå ´åã¯å¤ãäºéå¼ç¨ç¬¦ã§å²ã¿ã¾ãããã¹ã¦ã®æ¹è¡æå­ã¯çæãããè¨­å®ãã¡ã¤ã«ã§åé¤ãããç©ºç½ã¯åé ­ããã³æ«å°¾ããåé¤ããã¾ãã uuid (ã¾ãã¯ <code>hypervisor_id</code> ã«å¿ãã¦ãã¹ãåã¾ãã¯ hwuuid) ããã®ãªãã·ã§ã³ã®ã³ã³ãåºåãã®ä¸è¦§ã«æå®ããã¦ãããã¹ãã®å ´åã«ã®ã¿ã¬ãã¼ãããã¾ããã¯ã¤ã«ãã«ã¼ãããã³æ­£è¦è¡¨ç¾ããµãã¼ããããè¤æ°ã®ã¬ã³ã¼ãã¯ã³ã³ãã§åºåãããå¿è¦ãããã¾ããã³ã³ããªã©ã®ç¹æ®æå­ãå«ã¾ãã¦ããå ´åã¯å¤ãäºéå¼ç¨ç¬¦ã§å²ã¿ã¾ãããã¹ã¦ã®æ¹è¡æå­ã¯çæãããè¨­å®ãã¡ã¤ã«ã§åé¤ãããç©ºç½ã¯åé ­ããã³æ«å°¾ããåé¤ããã¾ãã AHV åé¨ãããã°ãæå¹ã«ããã«ã¯ããªãã·ã§ã³ Enable debugging output ãå¿è¦ã§ããä¸¡æ¹ã®ãªãã·ã§ã³ãæå¹ãªå ´åã«è¿½å ã® AHV ãããã°æå ±ãæä¾ãã¾ãã AHV åé¨ãããã°ãæå¹ã«ããã«ã¯ãEnable debugging output ã®ãªãã·ã§ã³ã¯å¿é ã§ããä¸¡æ¹ã®ãªãã·ã§ã³ãæå¹ãªå ´åã«è¿½å ã® AHV ãããã°æå ±ãæä¾ãã¾ãã virt-who è¨­å®ã®çµç¹ æ¦è¦ ææè ææèã¯æå®ããã¦ãã¾ãã kubeconfig ãã¡ã¤ã«ã¸ã®ãã¹ Prism Central Prism Element Prism ãã¬ã¼ãã¼ æå®ãã virt-who è¨­å®ã® deploy ã¹ã¯ãªããã®ã¬ã³ããªã³ã°ãè¡ãã¾ãã ã¹ã±ã¸ã¥ã¼ã« æ¥ç¶åã® Prism ãã¬ã¼ãã¼é¸æ virt-who è¨­å®ãè¡¨ç¤ºãã¾ãã ãã¤ãã¼ãã¤ã¶ã¼ã®ç¹å®æ¹æ³ãæå®ãã¾ãã ãã¤ãã¼ãã¤ã¶ã¼ã <b>hostname</b>ã<b>uuid</b> ã¾ãã¯ <b>hwuuid</b> ã§ç¹å®ãããããã«æå®ãã¾ãã
                              ä¸é¨ã®ä»®æ³åããã¯ã¨ã³ãã§ã¯ãããã®ãã¹ã¦ãå®è£ããã¦ãã¾ããã
                              ããã©ã«ãã¯ <b>hostname</b> ã§ãããæå³ãä»ãããã¤ãã¼ãã¤ã¶ã¼å
                                  ãæä¾ãã¾ããããã¹ãåãå¤æ´ãããå ´åã¯ããã¤ãã¼ãã¼ã¶ã¼ç»é²ã®éè¤ãçããå¯è½æ§ãããã¾ãããããé¿ããã«ã¯ãä»£ããã« <b>uuid</b> ãä½¿ç¨ã§ãã¾ãã<b>hwuuid</b> ã¯ esx ã®ã¿ã«é©ç¨ããã¾ãã
                                  ãã®ãã­ããã£ã¼ã¯ãvirt-who ã®ååã®å®è¡åã«è¨­å®ããããã¨ã«ãªã£ã¦ãã¾ãããããå¾ã§å¤æ´ããã¨ããµãã¹ã¯ãªãã·ã§ã³ããã¼ã¸ã£ã¼ã§ã¨ã³ããªã¼ã®éè¤ãçãã¾ãã ç¶æ æå è¨­å®ãããã­ã¤ããã¦ããªãããã¾ãã¯ virt-who ãã¹ãã¼ã¿ã¹ãå ±åã§ãã¾ããã§ãã æéåã«çä¿¡ãã virt-who ã¬ãã¼ã virt-who ã¬ãã¼ãã¯æéåã«çä¿¡ãã¦ããããããã¯ãã¤ãã¼ãã¤ã¶ã¼ã«å¤æ´ããªããã¨ãç¤ºãã¦ãã¾ã æ°è¦è¨­å®ãå®ç¾©ããã«ã¯ãæ°è¦è¨­å®ãã¿ã³ãã¯ãªãã¯ãã¦ãã©ã¼ã ã«è¨å¥ãã¾ãããã¹ã¦ã®å¿é æå ±ãå¥åããå¾ã«ãvirt-who è¨­å®ã¹ã¯ãªãããçæããã¾ããã¹ã¯ãªãããã³ãã¼ãã¦ãããæåã§ã¤ã³ã¹ãã¼ã«ããããã¾ãã¯ããããªã¢ã¼ãå®è¡ã«ãããé¸æããã¿ã¼ã²ãããã¹ãä¸ã§ããã­ã¤ãããã¨ãã§ãã¾ãã åè¨ã®è¨­å® sysconfig ãã¡ã¤ã«ãä½æã§ãã¾ãã virt-who è¨­å®ãã¡ã¤ã«ãä½æã§ãã¾ãã systemctl ãä½¿ç¨ãã¦ virt-who ãµã¼ãã¹ãæå¹ã«ã§ãã¾ãã virt-who ããã±ã¼ã¸ãã¤ã³ã¹ãã¼ã«ã§ãã¾ããããã¹ããé©åã«ãµãã¹ã¯ã©ã¤ãããã¦ãããkatello-host-tools ãªãã¸ããªã¼ã¸ã®ã¢ã¯ã»ã¹ããããã¨ãç¢ºèªãã¾ãã virt-who ãµã¼ãã¹ãèµ·åã§ãã¾ãããè©³ç´°ã¯ãvirt-who ã­ã°ãåç§ãã¦ãã ãã ä¸æ ä¸æãªè¨­å®ã¹ãã¼ã¿ã¹ äºæããªãç¶æ³ã«ãã£ã¦çããä¸æãªè¨­å®ã¹ãã¼ã¿ã¹ ç¡å¶é virt-who è¨­å®ã®æ´æ° ä»¥ä¸ã® Hammer ã³ãã³ãã¾ãã¯ã¹ã¯ãªãããä½¿ç¨ãã¦ãã®è¨­å®ãããã­ã¤ãã¾ãããããããroot æ¨©éãå¿è¦ã§ããkatello-host-tools ã«ã¢ã¯ã»ã¹ã§ããã¿ã¼ã²ãããã¹ãã§ Hammer ã³ãã³ãã¾ãã¯ã¹ã¯ãªãããå®è¡ããå¯è½ãªå ´åã¯ Foreman ãã¹ãã§ virt-who ã¬ãã¼ããå®è¡ãã¾ãã VMware vCenter ãµã¼ãã¼ã®å®å¨ä¿®é£¾ãã¹ãåã¾ãã¯ IP ã¢ãã¬ã¹ Virt-who è¨­å®ã¹ãã¼ã¿ã¹ Virt-who è¨­å® %s Virt-who è¨­å® Virt-who è¨­å®ã¹ãã¼ã¿ã¹ ãã¯ã¤ããªã¹ã %s æéãã¨ 