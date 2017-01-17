class AddLabAttrsToConfig < ActiveRecord::Migration
  def change
    add_column :foreman_virt_who_configure_configs, :debug, :bool, :default => false, :null => true
    add_column :foreman_virt_who_configure_configs, :hypervisor_type, :string, :null => true
    add_column :foreman_virt_who_configure_configs, :hypervisor_server, :string, :null => true
    add_column :foreman_virt_who_configure_configs, :hypervisor_username, :string, :null => true
    add_column :foreman_virt_who_configure_configs, :hypervisor_password, :string, :null => true
  end
end
