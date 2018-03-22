class AddProxyAndNoProxyToConfig < ActiveRecord::Migration[4.2]
  def up
    add_column :foreman_virt_who_configure_configs, :proxy, :string
    add_column :foreman_virt_who_configure_configs, :no_proxy, :string
  end

  def down
    remove_column :foreman_virt_who_configure_configs, :no_proxy
    remove_column :foreman_virt_who_configure_configs, :proxy
  end
end
