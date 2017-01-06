module ForemanVirtWhoConfigure
  class Config < ActiveRecord::Base
    UNLIMITED = 0
    WHITELIST = 1
    BLACKLIST = 2

    belongs_to :compute_resource
    belongs_to :organization

    # service user used by virt-who to report back
    has_one :service_user
  end
end
