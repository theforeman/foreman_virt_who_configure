class CreateVirtWhoConfigs < ActiveRecord::Migration
  def change
    create_table :foreman_virt_who_configure_virt_who_configs do |t|
      t.references :compute_resource, :foreign_key => true, :index => { :name => 'fvwc_vhc_compute_resource_id' }
      t.references :organization, :foreign_key => true, :index => { :name => 'fvwc_vhc_oragnization_id' }

      t.timestamps :null => false
    end
  end
end
