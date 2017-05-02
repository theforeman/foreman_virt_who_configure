class AddReportedDataToConfig < ActiveRecord::Migration
  def change
    add_column :foreman_virt_who_configure_configs, :reported_data, :boolean, :null => false, :default => false
  end
end
