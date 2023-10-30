#!/bin/bash

bundle install

# wait for postgres
until PGPASSWORD=$PGPASS psql -h "$PGHOST" -U $PGUSER -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 2
done

if [ "$( psql -tAc "SELECT 1 FROM pg_database WHERE datname='foreman-test'" )" = '1' ]
then
    echo "Database already exists"
else
    bundle exec rails db:create
fi

if [ "$( psql -tAc "SELECT 1 FROM pg_database WHERE datname='foreman-prod'" )" = '1' ]
then
    echo "Database already exists"
else
    bundle exec rails db:create RAILS_ENV=production
fi

bundle exec rails db:migrate

set -e

# bundle exec rake foreman_virt_who_configure:rubocop
bundle exec rake test:foreman_virt_who_configure
