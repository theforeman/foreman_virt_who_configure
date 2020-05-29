# ForemanVirtWhoConfigure

A foreman plugin to make virt-who configuration easier. This provides simple UI for obtaining required information about the desired virt-who configuration, such as hypervisor credentials, check interval and similar. After the information is gathered, it provides a configuration script that can be used to install and configure the virt-who instance. All incoming reports from such virt-who instance are tracked and monitored by the plugin.

## Installation

This plugins requires Katello to be installed in your Foreman instance. If its there, simply install a package with the plugin (rpm only), run migrations and seed by running,

```
yum install rubygem-foreman_virt_who_configure
foreman-rake db:migrate
foreman-rake db:seed
```

## Usage

After installation there is new "Virt-who configurations" menu added in "Infrastructure" tab. The "Virt-who configurations" -> "Create Config" provides options to add details about configuration, most of the fields are having inline help.

The virt-who configuration should be in an organization. If organization has not selected then Owner field would be displayed where it is required to select organization. If organization is already selected then Owner field is not displayed and virt-configuration will be automatically created in selected organization scope.

To deploy the configuration click on configuration name on "Virt-who configurations" list page, "Overview" page shows details about configuration and "Deploy page" has all details on deploying configuration.

More details are available at - https://theforeman.org/plugins/foreman_virt_who_configure

## Contributing

Fork and send a Pull Request. Thanks!

## Copyright

Copyright (c) 2017 - Foreman team

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
