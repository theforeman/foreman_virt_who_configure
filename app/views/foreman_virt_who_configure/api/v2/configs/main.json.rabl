object @config

extends "foreman_virt_who_configure/api/v2/configs/base"

glue :http_proxy do
  attributes :url => :proxy
end

attributes :name, :interval, :organization_id, :whitelist, :blacklist, :hypervisor_id,
           :hypervisor_type, :hypervisor_server, :hypervisor_username, :debug,
           :satellite_url, :proxy, :no_proxy, :status, :last_report_at, :out_of_date_at,
           :filter_host_parents, :exclude_host_parents, :kubeconfig_path,
           :prism_flavor, :ahv_update_interval, :ahv_internal_debug

child :http_proxy do
  attributes :id, :name, :url
end

attributes :listing_mode => :filtering_mode
