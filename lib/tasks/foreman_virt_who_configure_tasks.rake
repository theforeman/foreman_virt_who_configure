require 'rake/testtask'

# Tasks
namespace :foreman_virt_who_configure do
  desc 'Clean default data created by this plugin, this will permanently delete the data!' 
  task cleanup: :environment do
    ForemanVirtWhoConfigure::Cleaner.new.clean_up!
  end
end

# Tests
namespace :test do
  desc 'Test ForemanVirtWhoConfigure'
  Rake::TestTask.new(:foreman_virt_who_configure) do |t|
    test_dir = File.join(File.dirname(__FILE__), '../..', 'test')
    t.libs << ['test', test_dir]
    t.pattern = "#{test_dir}/**/*_test.rb"
    t.verbose = true
    t.warning = false
  end
end

namespace :foreman_virt_who_configure do
  task :rubocop do
    begin
      require 'rubocop/rake_task'
      RuboCop::RakeTask.new(:rubocop_foreman_virt_who_configure) do |task|
        task.patterns = ["#{ForemanVirtWhoConfigure::Engine.root}/app/**/*.rb",
                         "#{ForemanVirtWhoConfigure::Engine.root}/lib/**/*.rb",
                         "#{ForemanVirtWhoConfigure::Engine.root}/test/**/*.rb"]
      end
    rescue
      puts 'Rubocop not loaded.'
    end

    Rake::Task['rubocop_foreman_virt_who_configure'].invoke
  end
end

Rake::Task[:test].enhance ['test:foreman_virt_who_configure']

load 'tasks/jenkins.rake'
if Rake::Task.task_defined?(:'jenkins:unit')
  Rake::Task['jenkins:unit'].enhance ['test:foreman_virt_who_configure', 'foreman_virt_who_configure:rubocop']
end
