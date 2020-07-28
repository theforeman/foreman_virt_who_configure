class ReferConfigProxyToHttpProxy < ActiveRecord::Migration[6.0]
  def up
    add_column :foreman_virt_who_configure_configs, :http_proxy_id, :integer

    if User.where(login: User::ANONYMOUS_ADMIN).exists?
      User.as_anonymous_admin do
        http_proxies = HttpProxy.all
        ::ForemanVirtWhoConfigure::Config.find_each do |config|
          if config.proxy.present?
            migrate_config(http_proxies, config)
          end
        end
      end
    end

    remove_column :foreman_virt_who_configure_configs, :proxy
  end

  def down
    add_column :foreman_virt_who_configure_configs, :proxy, :string

    if User.where(login: User::ANONYMOUS_ADMIN).exists?
      User.as_anonymous_admin do
        ::ForemanVirtWhoConfigure::Config.find_each do |config|
          if config.http_proxy_id.present?
            config.proxy = config.http_proxy.full_url
            config.save!
          end
        end
      end
    end

    remove_column :foreman_virt_who_configure_configs, :http_proxy_id
  end

  private

  def migrate_config(http_proxies, config)
    http_proxy = http_proxies.find { |proxy| proxy.full_url == proxy_uri(config.proxy).to_s }

    if http_proxy.present?
      config.http_proxy = http_proxy
    else
      http_proxy = build_http_proxy(config.proxy)
      if http_proxy.save
        config.http_proxy_id = http_proxy.id
      end
    end

    config.save!
  rescue URI::InvalidURIError
    Rails.logger.debug "Config with id #{config.id} has not valid proxy #{config.proxy}"
  end

  def proxy_uri(config_proxy)
    uri = URI(config_proxy)
    unless ['http', 'https'].include? uri.scheme
      config_proxy = "http://#{config_proxy}"
      uri = URI(config_proxy)
    end
    uri
  end

  def build_http_proxy(proxy_url)
    uri = proxy_uri(proxy_url)
    url = if uri.port
            "#{uri.scheme}://#{uri.host}:#{uri.port.to_s}"
          else
            "#{uri.scheme}://#{uri.host}"
          end

    HttpProxy.new(name: "virt_who_#{uri.host}", url: url, username: uri.user, password: uri.password)
  end
end
