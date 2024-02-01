require File.expand_path('../lib/foreman_virt_who_configure/version', __FILE__)
require 'date'

begin
  Dir["locale/**/*.po"].each do |po|
    mo = po.sub(/foreman_virt_who_configure\.po$/, "LC_MESSAGES/foreman_virt_who_configure.mo")
    STDERR.puts "WARNING: File #{mo} does not exist, generate with 'make all-mo'!" unless File.exist?(mo)
    STDERR.puts "WARNING: File #{mo} outdated, regenerate with 'make all-mo'" if File.mtime(po) > File.mtime(mo)
  # Adding this so you can actually build the gem and the warnings come out, without this
  # we get an error when making the gem and it fails as well as a ruby error if the mo files don't exist
  rescue => e
    puts "#{e} not found"
  end
end

Gem::Specification.new do |s|
  s.name        = 'foreman_virt_who_configure'
  s.version     = ForemanVirtWhoConfigure::VERSION
  s.date        = Date.today.to_s
  s.authors     = ['Foreman virt-who-configure team']
  s.email       = ['foreman-dev@googlegroups.com']
  s.homepage    = 'https://github.com/theforeman/foreman_virt_who_configure'
  s.summary     = 'A plugin to make virt-who configuration easy'
  s.description = 'A plugin to make virt-who configuration easy'
  s.license     = 'GPLv3'

  s.files = Dir['{app,config,db,lib,locale}/**/*'] + ['LICENSE', 'Rakefile', 'README.md']
  s.test_files = Dir['test/**/*']

  s.add_development_dependency('theforeman-rubocop', '~> 0.0.6')
  s.add_development_dependency 'rdoc'
end
