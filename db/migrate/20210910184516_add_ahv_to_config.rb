class AddAhvToConfig < ActiveRecord::Migration[6.0]
  def change
    add_column :foreman_virt_who_configure_configs, :prism_flavor, :string, :null => true
    add_column :foreman_virt_who_configure_configs, :ahv_update_interval, :integer, :null => true
    add_column :foreman_virt_who_configure_configs, :ahv_internal_debug, :boolean, :null => true
  end
end
