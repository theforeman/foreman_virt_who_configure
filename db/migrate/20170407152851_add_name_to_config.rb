class AddNameToConfig < ActiveRecord::Migration
  def change
    add_column :foreman_virt_who_configure_configs, :name, :string, :null => false, :default => ''
  end
end
