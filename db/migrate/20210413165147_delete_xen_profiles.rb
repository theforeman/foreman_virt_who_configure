class DeleteXenProfiles < ActiveRecord::Migration[6.0]
  def change
    ForemanVirtWhoConfigure::Config.where(:hypervisor_type => 'xen').destroy_all
  end
end
