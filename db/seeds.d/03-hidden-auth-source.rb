AuthSource.without_auditing do
  src = ForemanVirtWhoConfigure::AuthSourceHiddenWithAuthentication.first
  ForemanVirtWhoConfigure::AuthSourceHiddenWithAuthentication.create :name => "HiddenWithAuthentication" unless src.present?
end
