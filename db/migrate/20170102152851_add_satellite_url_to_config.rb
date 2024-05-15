class AddSatelliteURLToConfig < ActiveRecord::Migration[4.2]
  def change
    add_column :foreman_virt_who_configure_configs, :satellite_url, :string, :null => true
  end
end
