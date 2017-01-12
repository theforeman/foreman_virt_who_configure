class CreateServiceUsers < ActiveRecord::Migration
  def change
    create_table :foreman_virt_who_configure_service_users do |t|
      t.string :encrypted_password, :null => false
      t.references :user, :index => { :name => 'fvwc_su_user_id' }, :null => false

      t.timestamps :null => false
    end

    add_foreign_key :foreman_virt_who_configure_service_users, :users, :column => :user_id
  end
end
