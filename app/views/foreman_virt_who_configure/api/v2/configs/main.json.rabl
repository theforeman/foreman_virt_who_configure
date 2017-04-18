object @config

extends "foreman_virt_who_configure/api/v2/configs/base"

attributes :name, :interval, :organization_id, :whitelist, :blacklist, :hypervisor_id,
           :hypervisor_type, :hypervisor_server, :hypervisor_username, :debug,
           :satellite_url, :proxy, :no_proxy, :status, :last_report_at, :out_of_date_at
attributes :listing_mode => :filtering_mode
