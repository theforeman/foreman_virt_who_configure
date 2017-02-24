FactoryGirl.define do
  factory :virt_who_config, :class => ::ForemanVirtWhoConfigure::Config do
    organization
    interval 120
    hypervisor_id 'hostname'
    hypervisor_type 'esx'
    hypervisor_server 'vmware.example.com'
    hypervisor_username 'root'
    hypervisor_password 'changeme'
    satellite_url 'foreman.example.com'
  end
end
