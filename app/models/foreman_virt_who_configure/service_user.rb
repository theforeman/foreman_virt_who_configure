module ForemanVirtWhoConfigure
  # holds the encrypted password for internal user that can be deployed to virt who reporter
  class ServiceUser < ApplicationRecord
    include Authorizable
    include Encryptable
    encrypts :encrypted_password

    belongs_to :user
    has_many :configs, :inverse_of => :service_user

    # Foreman 1.11 specifics, can be removed later, otherwise when string does not start with "encrypts" prefix
    # we get 500 when we try to create log message that relies on name method
    def name
      username || to_s
    end

    def username
      User.as_anonymous_admin do
        user&.login
      end
    end
  end
end
