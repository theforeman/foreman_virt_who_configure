#!/bin/bash

echo "== Installing system packages =="
sudo apt-get update
sudo apt-get install -y libcurl4-openssl-dev libvirt-dev bundler make tar postgresql
echo

git config --global user.name "gh_actions"
git config --global user.email "gh_actions@foreman_virt_who_configure.foreman"

echo "gemspec :path => '../foreman_virt_who_configure', :development_group => :dev" > bundler.d/foreman_virt_who_configure.local.rb
cp ../foreman_virt_who_configure/config/database.yml.example config/database.yml

rm -rf Gemfile.lock
bundle install --jobs=3 --retry=3 --without journald development console

# wait for postgres
until PGPASSWORD=foreman psql -h localhost -U foreman -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 2
done

echo "== Creating database =="
bundle exec rails db:create

echo "== Migrating database =="
bundle exec rails db:migrate
