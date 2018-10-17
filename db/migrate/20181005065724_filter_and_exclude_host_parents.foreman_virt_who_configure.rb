class FilterAndExcludeHostParents < ActiveRecord::Migration[5.2]
  def change
    add_column :foreman_virt_who_configure_configs, :filter_host_parents, :text
    add_column :foreman_virt_who_configure_configs, :exclude_host_parents, :text
  end
end
