class AddSatelliteUrlToConfig < ActiveRecord::Migration
  def change
    add_column :foreman_virt_who_configure_configs, :satellite_url, :string, :null => true
  end
end
