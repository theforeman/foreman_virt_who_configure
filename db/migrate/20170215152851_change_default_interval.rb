class ChangeDefaultInterval < ActiveRecord::Migration
  def up
    change_column :foreman_virt_who_configure_configs, :interval, :integer, :default => 120
  end

  def down
    change_column :foreman_virt_who_configure_configs, :interval, :integer, :default => 60
  end
end
