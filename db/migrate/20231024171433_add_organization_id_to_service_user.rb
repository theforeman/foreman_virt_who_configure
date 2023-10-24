class AddOrganizationIdToServiceUser < ActiveRecord::Migration[6.1]
  def up
    add_column :foreman_virt_who_configure_service_users, :organization_id, :integer

    ::ForemanVirtWhoConfigure::Config.find_each do |config|
      service_user = ::ForemanVirtWhoConfigure::ServiceUser.find_by(organization_id: config.organization_id)
      if service_user.present?
         config.update_columns(service_user_id: service_user.id)
         next
      end

      cfg_service_user = ::ForemanVirtWhoConfigure::ServiceUser.find_by(id: config.service_user_id)
      cfg_service_user.update_columns(organization_id: config.organization_id)
    end

    ::ForemanVirtWhoConfigure::ServiceUser.where(organization_id: nil).destroy_all
  end

  def down
    remove_column :foreman_virt_who_configure_service_users, :organization_id, :integer
  end
end
