��    _                   6   	  )   @     j  ,   �  ?   �     �  	   �     �     	  !   	     >	      Q	     r	     �	     �	     �	  
   �	     �	     �	     �	     �	     	
  !   )
     K
     R
     Z
     n
     s
     �
     �
     �
     �
     �
     �
     �
     �
       
        &     4     B     O  	   \     f  
   z     �     �     �     �     �     �     �     �  $   �       :   ;     v  ;   {  
   �     �  <   �  	          
   +  	   6     @     W     Z  I   w     �     �     �     �     �       0   &     W     ^     f     {  %   �  K   �            =   2  	   p     z  B   �     �     �          '  	   F     P  �  _  D   T  3   �     �  6   �  :        Q     V  
   k     v  !   �     �  "   �     �     �     �               *     C     J  !   _     �  "   �     �     �     �     �     �          )     C     V     f     w     �     �     �     �     �     �     �     �            
   +     6  
   I     T     o          �     �     �  $   �     �  E        H  3   O     �     �  I   �     �               0     <     [      ^  L        �  	   �     �  3   �     -      3  .   T     �     �     �  &   �  8   �  k     	   o     y  C   �  
   �  $   �  L        T     m     �     �     �     �                           Z         0              P   5      <   /       L       *   +   &              %       ,   $   D   C   B   -   8   X   ^      "   	      F   A              I   S       K       7   T                 W             E               U      6   2      V   G       #   \   >       R               ;      @       
      :   '       ]   !              J   _       O       )   (   H       .   M         N   Y   Q   ?                 9   1   =      [       4   3    1. Copy this configuration script to a safe directory. 2. Make the script executable and run it. 3. Delete the script. A plugin to make virt-who configuration easy Account name by which virt-who is to connect to the hypervisor. Actions Blacklist Configs Configuration Status Configuration interval in minutes Configuration name Configuration numeric identifier Configuration script:  Config|Interval Config|Last Report Config|Name Connection Copy to clipboard Count Create Config Create a virt-who configuration Delete a virt-who configuration Delete virt-who configuration %s? Deploy Details Download the script Edit Edit Virt-who Config Enable debugging output Enable debugging output? Every 12 hours Every 2 days Every 2 hours Every 24 hours Every 3 days Every 4 hours Every 8 hours Every hour Exclude Hosts Exclude hosts Filter Hosts Filter hosts Filtering General information HTTP Proxy Hammer command:  Help Hypervisor ID Hypervisor type Ignore Proxy Ignore proxy Interval Interval was not provided Latest Configurations Without Change List of virt-who configurations Microsoft Hyper-V fully qualified host name or IP address. Name Name of this configuration, e.g. the name of the hypervisor New Config New Virt-who Config Newer version of virt-who is required, minimum version is %s No Change No Report Yet No Reports No change No configuration found OK On the target virt-who host: On this page you can define virt-who configurations for your hypervisors. Overview Owner Owner was not provided Path to kubeconfig file Schedule Show a virt-who configuration Specifies how the hypervisor will be identified. Status Success Total Configurations Unable to create sysconfig file Unable to create virt-who config file Unable to start virt-who service, please see virt-who logs for more details Unknown Unknown configuration status Unknown configuration status, caused by unexpected conditions Unlimited Update a virt-who configuration VMware vCenter server’s fully qualified host name or IP address. Virt-who Configs Status Virt-who Configuration %s Virt-who Configurations Virt-who Configurations Status Whitelist every %s hours Project-Id-Version: foreman_virt_who_configure 0.5.25
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2017-05-03 11:59+0000
Last-Translator: Pavel Borecki <pavel.borecki@gmail.com>, 2023
Language-Team: Czech (Czech Republic) (https://app.transifex.com/foreman/teams/114/cs_CZ/)
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Language: cs_CZ
Plural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;
 1. Zkopírujte tento nastavovací skript do bezpečného adresáře. 2. nastavte skript jako spustitelný a spusťte ho. 3. smazat skript. Zásuvný modul pro usnadnění nastavování virt-who Název účtu kterým je virt-who připojen k hypervizoru. Akce Seznam vyloučených Nastavení Stav nastavení Interval nastavení (v minutách) Název nastavení Číselný identifikátor nastaven Nastavovací skript: Interval Config|Poslední hlášení Název Připojení Zkopírovat do schránky Počet Vytvořit nastavení Vytvořit nastavení pro virt-who Smazat nastavení pro virt-who Smazat nastavení pro virt-who %s? Nasadit Podrobnosti Stáhnout skript Upravit Upravit nastavení pro Virt-who Zapnout ladící výstup Zapnout ladící výstup? Každých 12 hodin Každé dva dny Každé 2 hodiny Každých 24 hodin Každé 3 dny Každé 4 hodiny Každých 8 hodin Každou hodinu Vynechat stroje Vynechat stroje Filtrovat stroje Filtrovat stroje Filtrování Obecné informace HTTP proxy Příkaz v hammer: Nápověda Identifikátor hypervizoru Typ hypervizoru Ignorovat proxy Ignorovat proxy Interval Interval nebyl zadán Nejnovější nastavení beze změny Vypsat nastavení pro virt-who Plně kvalifikované doménové jméno nebo IP adresa vašeho stroje. Název Název tohoto nastavení, např. název hypervizoru Nové nastavení Nové virt-who nastavení Je zapotřebí novější verze virt-who, nejnižší možná verze je %s Beze změny Zatím žádné hlášení Žádné výkazy Beze změny Nenalezeno žádné nastavení OK Na cílovém hostiteli virt-who: Na této stránce je možné zadat nastavení virt-who pro své hypervizory. Přehled Vlastník Vlastník nebyl poskytnut Popis umístění souboru s nastaveními kubeconfig Plán Zobrazit nastavení pro virt-who Určuje jak budou identifikovány hypervizory. Stav Úspěch Celkem nastavení Nedaří se vytvořit sysconfig soubor Nedaří se vytvořit soubor s nastaveními pro virt-who Nedaří se spustit službu virt-who, další podrobnosti naleznete v záznamu událostí (log) ve virt-who Neznámý Neznámý stav nastavení Neznámý stav nastavení, způsobený neočekávanými podmínkami Neomezený Aktualizovat nastavení pro virt-who Plně kvalifikované doménové jméno nebo IP adresa vašeho VMware vCenter Stav nastavení virt-who Nastavení virt-who %s Nastavení pro virt-who Stav nastavení pro virt-who Seznam povolených každých %s hodin 