class CreateConfigs < ActiveRecord::Migration
  def change
    create_table :foreman_virt_who_configure_configs do |t|
      t.integer :interval, :default => 60, :null => true
      # this is not a foreign key
      t.string :hypervisor_id, :null => true
      t.integer :listing_mode, :null => true
      t.text :whitelist, :null => true
      t.text :blacklist, :null => true

      t.references :compute_resource, :index => { :name => 'fvwc_c_compute_resource_id' }, :null => true
      t.references :organization, :index => { :name => 'fvwc_c_oragnization_id' }, :null => true
      t.references :service_user, :index => { :name => 'fvwc_su_service_user' }, :null => true

      t.timestamps :null => false
    end

    add_foreign_key :foreman_virt_who_configure_configs, :compute_resources, :column => :compute_resource_id
    add_foreign_key :foreman_virt_who_configure_configs, :taxonomies, :column => :organization_id
    add_foreign_key :foreman_virt_who_configure_configs, :foreman_virt_who_configure_service_users, :column => :service_user_id
  end
end
