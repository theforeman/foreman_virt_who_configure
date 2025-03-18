unless dependencies.find { |d| d.name == 'katello' } || gemspecs.find { |d| d.name == 'katello' }
  gem 'katello', github: 'Katello/katello', branch: 'master'
end
