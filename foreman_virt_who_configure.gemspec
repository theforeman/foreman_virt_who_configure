require File.expand_path('../lib/foreman_virt_who_configure/version', __FILE__)
require 'date'

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

  s.add_dependency 'deface'
  s.add_development_dependency 'rubocop'
  s.add_development_dependency 'rdoc'
end
