module ForemanVirtWhoConfigure
  class VirtWhoConfig < ActiveRecord::Base
    belongs_to :compute_resource
    belongs_to :organization
  end
end
