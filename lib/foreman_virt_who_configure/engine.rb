require 'katello'

module ForemanVirtWhoConfigure
  class Engine < ::Rails::Engine
    engine_name 'foreman_virt_who_configure'

    config.autoload_paths += Dir["#{config.root}/app/controllers/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/helpers/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/models/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/lib"]
    config.autoload_paths += Dir["#{config.root}/test/"]

    # Add any db migrations
    initializer 'foreman_virt_who_configure.load_app_instance_data' do |app|
      ForemanVirtWhoConfigure::Engine.paths['db/migrate'].existent.each do |path|
        app.config.paths['db/migrate'] << path
      end
    end

    initializer 'foreman_virt_who_configure.register_shell_script_mime_type' do
      Mime::Type.register "text/x-shellscript", :sh
    end

    initializer 'foreman_virt_who_configure.apipie' do
      Apipie.configuration.checksum_path += ['/api/']
    end

    initializer 'foreman_virt_who_configure.register_plugin', :before => :finisher_hook do |_app|
      Foreman::Plugin.register :foreman_virt_who_configure do
        requires_foreman '>= 3.7'

        apipie_documented_controllers ["#{ForemanVirtWhoConfigure::Engine.root}/app/controllers/foreman_virt_who_configure/api/v2/*.rb"]

        # Add permissions
        security_block :foreman_virt_who_configure do
          permission_options = { :resource_type => 'ForemanVirtWhoConfigure::Config' }
          permission :view_virt_who_config, { :'foreman_virt_who_configure/configs' => [:index, :show, :auto_complete_search, :deploy_script],
                                              :'foreman_virt_who_configure/api/v2/configs' => [:index, :show, :deploy_script] }, permission_options
          permission :create_virt_who_config, { :'foreman_virt_who_configure/configs' => [:new, :create],
                                                :'foreman_virt_who_configure/api/v2/configs' => [:create] }, permission_options
          permission :edit_virt_who_config, { :'foreman_virt_who_configure/configs' => [:edit, :update],
                                              :'foreman_virt_who_configure/api/v2/configs' => [:update] }, permission_options
          permission :destroy_virt_who_config, { :'foreman_virt_who_configure/configs' => [:destroy],
                                                 :'foreman_virt_who_configure/api/v2/configs' => [:destroy] }, permission_options
        end

        reporter_permissions = [ :create_hosts, :edit_hosts, :view_lifecycle_environments, :my_organizations ]
        begin
          if Permission.where(:name => ['create_content_hosts', 'edit_content_hosts']).count > 0
            # old Katello permissions detected (6.2 era)
            reporter_permissions += [:create_content_hosts, :edit_content_hosts]
          end
        rescue ActiveRecord::StatementInvalid
          # permissions could not be loaded, probably migration hasn't been run yet
        end

        begin
          role 'Virt-who Reporter', reporter_permissions, 'Role granting minimal set of permissions for virt-who to upload the report, it can be used if you configure virt-who manually and want to use user that has locked down account.'
        rescue ArgumentError
          # could not configure role, some permissions are missing
        end

        role 'Virt-who Manager',  [ :view_virt_who_config, :create_virt_who_config, :edit_virt_who_config, :destroy_virt_who_config ], 'Role granting all permissions to manage virt-who configurations, user needs this role to create, delete or update configurations.'

        role 'Virt-who Viewer',  [ :view_virt_who_config ], 'Role granting permissions to see all configurations including their configuration scripts, which means viewers could still deploy the virt-who instances for existing virt-who configurations.'

        # Available since Foreman 1.15
        add_all_permissions_to_default_roles if respond_to?(:add_all_permissions_to_default_roles)

        # add menu entry
        menu :top_menu, :virt_who_configs,
             url_hash: { controller: 'foreman_virt_who_configure/configs', action: :index },
             caption: N_('Virt-who configurations'),
             parent: :infrastructure_menu,
             after: :compute_resources

        # add dashboard widget
        widget 'foreman_virt_who_configs_status_widget', :name => N_('Virt-who Configs Status'), sizex: 6, sizey: 1
      end
    end

    # Precompile any JS or CSS files under app/assets/
    # If requiring files from each other, list them explicitly here to avoid precompiling the same
    # content twice.
    assets_to_precompile =
      Dir.chdir(root) do
        Dir['app/assets/javascripts/foreman_virt_who_configure/**/*', 'app/assets/stylesheets/foreman_virt_who_configure/**/*'].map do |f|
          f.split(File::SEPARATOR, 4).last.gsub(/\.scss\Z/, '')
        end
      end
    initializer 'foreman_virt_who_configure.assets.precompile' do |app|
      app.config.assets.precompile += assets_to_precompile
    end
    initializer 'foreman_virt_who_configure.configure_assets', group: :assets do
      SETTINGS[:foreman_virt_who_configure] = { assets: { precompile: assets_to_precompile } }
    end

    initializer 'foreman_virt_who_configure.register_paths' do |_app|
      ForemanTasks.dynflow.config.eager_load_paths.concat(%W(#{ForemanVirtWhoConfigure::Engine.root}/app/lib/actions))
    end

    # Include concerns in this config.to_prepare block
    config.to_prepare do
      SSO::METHODS.unshift SSO::BasicWithHidden
      ::Organization.send :include, VirtWhoTaxonomyExtensions
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

  def self.with_katello?
    (Katello rescue false) ? true : false
  end

  def self.table_name_prefix
    "foreman_virt_who_configure_"
  end

  def self.use_relative_model_naming?
    true
  end
end
