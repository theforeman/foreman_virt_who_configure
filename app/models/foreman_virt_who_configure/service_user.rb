module ForemanVirtWhoConfigure
  # holds the encrypted password for internal user that can be deployed to virt who reporter
  class ServiceUser < ActiveRecord::Base
    include Encryptable
    encrypts :encrypted_password

    belongs_to :user
    belongs_to :config

    # Foreman 1.11 specifics, can be removed later
    def name
      self.to_s
    end
  end
end
