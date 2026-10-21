begin
  organizations = Organization.unscoped.all
  locations = Location.unscoped.all
  User.as_anonymous_admin do
    JobTemplate.without_auditing do
      Dir[File.join("#{ForemanVirtWhoConfigure::Engine.root}/app/views/job_templates/**/*.erb")].each do |template|
        template = JobTemplate.import_raw!(File.read(template),
          :default => true,
          :lock => true,
          :update => true)
        template.organizations = organizations if template.present?
        template.locations = locations if template.present?
      end
    end
  end
rescue => e
  Rails.logger.warn("Skipping virt-who job template seeding: #{e.message}")
end
