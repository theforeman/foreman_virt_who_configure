require File.expand_path('../lib/foreman_virt_who_configure/version', __FILE__)
require 'date'

Gem::Specification.new do |s|
  s.name        = 'foreman_virt_who_configure'
  s.version     = ForemanVirtWhoConfigure::VERSION
  s.date        = Time.zone.today
  s.authors     = ['TODO: Your name']
  s.email       = ['TODO: Your email']
  s.homepage    = 'TODO'
  s.summary     = 'TODO: Summary of ForemanVirtWhoConfigure.'
  # also update locale/gemspec.rb
  s.description = 'TODO: Description of ForemanVirtWhoConfigure.'

  s.files = Dir['{app,config,db,lib,locale}/**/*'] + ['LICENSE', 'Rakefile', 'README.md']
  s.test_files = Dir['test/**/*']

  s.add_dependency 'deface'
  s.add_development_dependency 'rubocop'
  s.add_development_dependency 'rdoc'
end
