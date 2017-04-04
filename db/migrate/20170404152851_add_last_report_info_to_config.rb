class AddLastReportInfoToConfig < ActiveRecord::Migration
  def change
    add_column :foreman_virt_who_configure_configs, :last_report_at, :datetime
    add_column :foreman_virt_who_configure_configs, :out_of_date_at, :datetime
  end
end
