FROM quay.io/centos/centos:stream8 AS base

ENV PGHOST=postgres
ENV PGUSER=foreman
ENV PGPASS=foreman
ENV RAILS_ENV=test
ENV GIT_COMMITTER_NAME="gh_actions"
ENV GIT_COMMITTER_EMAIL="gh_actions@foreman_virt_who_configure.foreman"
ENV WORKDIR=/projects/foreman
ENV BUNDLE_PATH=vendor/bundle

RUN \
  dnf module install -y ruby:2.7 postgresql:12;\
  dnf install -y epel-release; \
  dnf install -y redhat-rpm-config libpq-devel ruby-devel systemd-devel make tar libvirt-devel zlib-devel libxml2-devel openssl-libs libvirt-devel nodejs automake gcc gcc-c++ kernel-devel libcurl-devel sqlite-devel git postgresql-server-devel; \
  git config --global user.name $GIT_COMMITTER_NAME; \
  git config --global user.email $GIT_COMMITTER_EMAIL; \
  mkdir /projects; \
  cd /projects; \
  git clone --depth 1 --branch 3.8-stable https://github.com/theforeman/foreman.git; \
  git clone --depth 1 --branch master https://github.com/theforeman/foreman_virt_who_configure.git

RUN \
  cd /projects/foreman; \
  echo "gemspec :path => '../foreman_virt_who_configure', :development_group => :dev" > bundler.d/foreman_virt_who_configure.local.rb; \
  cp ../foreman_virt_who_configure/config/database.yml.example config/database.yml; \
  cp ../foreman_virt_who_configure/config/Gemfile.lock.gh_test Gemfile.lock;

WORKDIR /projects/foreman
RUN \
  bundle config path vendor/bundle; \

RUN \
  cd /projects/foreman; \
  rm -rf Gemfile.lock; \
  bundle install --jobs=3 --retry=3 --without journald development console

COPY ./entrypoint.sh /usr/bin/

RUN sed -i s/SCLS=/SCLS=\""$SCLS"\"/g /usr/bin/entrypoint.sh

RUN chmod +x /usr/bin/entrypoint.sh

COPY ./run_tests.sh /usr/bin/
RUN chmod +x /usr/bin/run_tests.sh

CMD ["/usr/bin/run_tests.sh"]

ENTRYPOINT ["entrypoint.sh"]
