class DeleteRhevmProfiles < ActiveRecord::Migration[6.0]
  def change
    ForemanVirtWhoConfigure::Config.where(:hypervisor_type => 'rhevm').destroy_all
  end
end
