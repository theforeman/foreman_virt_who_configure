class RemoveAhvUpdateIntervalFromConfig < ActiveRecord::Migration[6.0]
  def change
    remove_column :foreman_virt_who_configure_configs, :ahv_update_interval, :integer
  end
end
