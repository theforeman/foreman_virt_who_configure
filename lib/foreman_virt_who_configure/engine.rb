require 'deface'

module ForemanVirtWhoConfigure
  class Engine < ::Rails::Engine
    engine_name 'foreman_virt_who_configure'

    config.autoload_paths += Dir["#{config.root}/app/controllers/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/helpers/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/models/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/overrides"]

    # Add any db migrations
    initializer 'foreman_virt_who_configure.load_app_instance_data' do |app|
      ForemanVirtWhoConfigure::Engine.paths['db/migrate'].existent.each do |path|
        app.config.paths['db/migrate'] << path
      end
    end

    initializer 'foreman_virt_who_configure.register_plugin', :before => :finisher_hook do |_app|
      Foreman::Plugin.register :foreman_virt_who_configure do
        requires_foreman '>= 1.11'

        # Add permissions
        security_block :foreman_virt_who_configure do
          permission :view_virt_who_config, :'foreman_virt_who_configure/hosts' => [:index], :resource => 'ForemanVirtWhoConfigure::Config'
        end

        # role 'ForemanVirtWhoConfigure', [:view_foreman_virt_who_configure]
        # TODO

        # add menu entry
        menu :top_menu, :virt_who_configs,
             url_hash: { controller: 'foreman_virt_who_configure/configs', action: :index },
             caption: N_('Virt-who configurations'),
             parent: :infrastructure_menu,
             after: :compute_resources

        # add dashboard widget
        # widget 'foreman_virt_who_configure_widget', name: N_('Foreman plugin template widget'), sizex: 4, sizey: 1
      end
    end

    # Precompile any JS or CSS files under app/assets/
    # If requiring files from each other, list them explicitly here to avoid precompiling the same
    # content twice.
    assets_to_precompile =
      Dir.chdir(root) do
        Dir['app/assets/javascripts/**/*', 'app/assets/stylesheets/**/*'].map do |f|
          f.split(File::SEPARATOR, 4).last
        end
      end
    initializer 'foreman_virt_who_configure.assets.precompile' do |app|
      app.config.assets.precompile += assets_to_precompile
    end
    initializer 'foreman_virt_who_configure.configure_assets', group: :assets do
      SETTINGS[:foreman_virt_who_configure] = { assets: { precompile: assets_to_precompile } }
    end

    # Include concerns in this config.to_prepare block
    config.to_prepare do
      begin
        Host::Managed.send(:include, ForemanVirtWhoConfigure::HostExtensions)
        HostsHelper.send(:include, ForemanVirtWhoConfigure::HostsHelperExtensions)
      rescue => e
        Rails.logger.warn "ForemanVirtWhoConfigure: skipping engine hook (#{e})"
      end
    end

    rake_tasks do
      Rake::Task['db:seed'].enhance do
        ForemanVirtWhoConfigure::Engine.load_seed
      end
    end

    initializer 'foreman_virt_who_configure.register_gettext', after: :load_config_initializers do |_app|
      locale_dir = File.join(File.expand_path('../../..', __FILE__), 'locale')
      locale_domain = 'foreman_virt_who_configure'
      Foreman::Gettext::Support.add_text_domain locale_domain, locale_dir
    end
  end

  def self.table_name_prefix
    "foreman_virt_who_configure_"
  end

  def self.use_relative_model_naming?
    true
  end
end
