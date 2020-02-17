FactoryBot.define do
  factory :virt_who_config, :class => ::ForemanVirtWhoConfigure::Config do
    sequence(:name) { |n| "config #{n}" }
    organization
    interval { 120 }
    hypervisor_id { 'hostname' }
    hypervisor_type { 'esx' }
    hypervisor_server { 'vmware.example.com' }
    hypervisor_username { 'root' }
    hypervisor_password { 'changeme' }
    satellite_url { 'foreman.example.com' }
    listing_mode { ForemanVirtWhoConfigure::Config::UNLIMITED }
  end

  trait :out_of_date do
    last_report_at { (1.minute.ago - 120.minutes).utc }
    out_of_date_at { (1.minute.ago).utc }
  end

  trait :ok do
    last_report_at { (1.minute.ago).utc }
    out_of_date_at { (1.minute.ago + 120.minutes).utc }
  end
end
