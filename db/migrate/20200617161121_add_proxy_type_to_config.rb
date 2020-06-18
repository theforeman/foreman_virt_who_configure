class AddProxyTypeToConfig < ActiveRecord::Migration[6.0]
  def change
    add_column :foreman_virt_who_configure_configs, :proxy_type, :integer, :null => false, :default => 0
  end
end
