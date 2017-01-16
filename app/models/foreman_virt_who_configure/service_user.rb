module ForemanVirtWhoConfigure
  # holds the encrypted password for internal user that can be deployed to virt who reporter
  class ServiceUser < ActiveRecord::Base
    include Authorizable
    include Encryptable
    encrypts :encrypted_password

    belongs_to :user
    has_many :configs

    # Foreman 1.11 specifics, can be removed later
    def name
      self.username || self.to_s
    end

    def username
      self.user.login if self.user
    end
  end
end
