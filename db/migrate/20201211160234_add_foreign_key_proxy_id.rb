class AddForeignKeyProxyId < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :foreman_virt_who_configure_configs, :http_proxies, :column => :http_proxy_id
  end
end
