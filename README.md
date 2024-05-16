# Foreman Virt Who Configure

A Foreman plugin to make virt-who configuration easier. This provides a simple UI for obtaining required information about the desired virt-who configuration, such as hypervisor credentials, check interval and other similar config options. After the information is gathered, it provides a configuration script that can be used to install and configure the virt-who instance. All incoming reports from such virt-who instance are tracked and monitored by the plugin.

## Installation

### Development setup:

* This plugin requires Katello to be installed in your Foreman instance. If it's there, simply install a package with the plugin (rpm only), run migrations and seed by running:

```
dnf install rubygem-foreman_virt_who_configure
foreman-rake db:migrate
foreman-rake db:seed
```

### Production setup:

* Run the following command to install the plugin with the Foreman Installer.
```
foreman-installer --enable-foreman-plugin-virt-who-configure
foreman-installer --enable-foreman-cli-virt-who-configure
```

## Usage

* After installation there is new "Virt-who Configurations" menu added in "Infrastructure" tab. The "Virt-who Configurations" -> "Create Config" provides options to add details about configuration, most of the fields have inline help.

* The virt-who configuration should be in an organization. If an organization has not selected then Owner field would be displayed where it is required to select organization. If an organization is already selected then Owner field is not displayed and virt-configuration will be automatically created in the selected organization scope.

* To deploy the configuration click on configuration name on "Virt-who Configurations" list page, "Overview" page shows details about configuration and "Deploy page" has all details on deploying configuration.

* More details are available at - https://theforeman.org/plugins/foreman_virt_who_configure

## Contributing

Fork and send a Pull Request. Thanks!

## Copyright

Copyright (c) 2024 - Foreman team

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
