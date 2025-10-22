# Foreman Virt Who Configure Plugin

## Overview

The Foreman Virt Who Configure plugin is a Ruby on Rails plugin that simplifies the configuration and management of virt-who instances in Red Hat Foreman environments. Virt-who is a daemon that retrieves virtual machine information from hypervisors and reports it to Red Hat Satellite/Foreman for subscription management and host tracking.

## Purpose

This plugin provides a user-friendly web interface and API for:
- Creating and managing virt-who configurations
- Generating deployment scripts for virt-who instances
- Monitoring virt-who reports and status
- Supporting multiple hypervisor types (VMware vSphere, Microsoft Hyper-V, libvirt, KubeVirt, Nutanix AHV)

## Architecture

### Core Components

#### Models
- **`Config`** (`app/models/foreman_virt_who_configure/config.rb`)
  - Central model representing a virt-who configuration
  - Stores hypervisor connection details, filtering rules, and scheduling information
  - Supports multiple hypervisor types: esx, hyperv, libvirt, kubevirt, ahv
  - Handles configuration validation and deployment script generation
  - Tracks reporting status and last update times

- **`ServiceUser`** (`app/models/foreman_virt_who_configure/service_user.rb`)
  - Manages service account credentials for virt-who authentication

#### Controllers
- **`ConfigsController`** (`app/controllers/foreman_virt_who_configure/configs_controller.rb`)
  - Web UI controller for CRUD operations on virt-who configurations
  - Handles configuration creation wizard and deployment script downloads

- **`Api::V2::ConfigsController`** (`app/controllers/foreman_virt_who_configure/api/v2/configs_controller.rb`)
  - RESTful API controller for programmatic access
  - Supports JSON responses and shell script deployment downloads
  - Organization-scoped resource access

#### Services
- **`Cleaner`** (`app/services/foreman_virt_who_configure/cleaner.rb`)
  - Background service for cleaning up outdated configurations

- **`OutputGenerator`** (`app/models/foreman_virt_who_configure/output_generator.rb`)
  - Generates virt-who configuration files and deployment scripts

### Key Features

#### Hypervisor Support
- **VMware vSphere/vCenter (esx)**: VMware virtualization platform support
- **Microsoft Hyper-V (hyperv)**: Windows Server virtualization
- **libvirt**: Open-source virtualization API
- **KubeVirt (kubevirt)**: Container-native virtualization
- **Nutanix AHV (ahv)**: Nutanix hyperconverged infrastructure

#### Configuration Options
- **Scheduling**: Configurable reporting intervals (hourly, every 2/4/6/8/12/24 hours)
- **Filtering**: Whitelist/blacklist host filtering with regex support
- **Proxy Support**: HTTP proxy configuration for network connectivity
- **Debug Mode**: Enhanced logging for troubleshooting
- **Organization Scoping**: Multi-tenant organization support

#### Deployment
- Generates shell scripts for automated virt-who installation and configuration
- Supports both manual deployment and configuration management integration
- Provides Hammer CLI command examples for automation

### Database Schema

Key database tables managed by migrations in `db/migrate/`:
- `configs`: Main configuration storage
- `service_users`: Authentication credentials
- Various attribute additions over time (proxy settings, filtering, etc.)

### API Endpoints

**Base URL**: `/foreman_virt_who_configure/api/v2`

- `GET /configs` - List all configurations
- `GET /configs/:id` - Show specific configuration
- `POST /configs` - Create new configuration
- `PUT /configs/:id` - Update configuration
- `DELETE /configs/:id` - Delete configuration
- `GET /configs/:id/deploy_script` - Download deployment script

Organization-scoped variants available under `/organizations/:organization_id/configs`

### Internationalization

Comprehensive i18n support with translations in 30+ languages including:
- English, Spanish, French, German, Italian, Portuguese
- Chinese (Simplified/Traditional), Japanese, Korean
- Hindi, Bengali, Tamil, Telugu, Gujarati
- Russian, Polish, Czech, Swedish
- Arabic, Hebrew

Translation files located in `locale/` directory with `.po` files and compiled `.mo` files.

### Configuration Parameters

#### Required Parameters
- `name`: Configuration identifier
- `hypervisor_type`: Hypervisor platform (esx, hyperv, libvirt, kubevirt, ahv)
- `hypervisor_id`: Host identification method (hostname, uuid, hwuuid)
- `satellite_url`: Foreman server FQDN
- `organization_id`: Target organization

#### Optional Parameters
- `interval`: Reporting frequency in minutes (default: 240)
- `hypervisor_server`: Hypervisor hostname/IP
- `hypervisor_username`/`hypervisor_password`: Authentication credentials
- `whitelist`/`blacklist`: Host filtering rules
- `filter_host_parents`/`exclude_host_parents`: Parent host filtering
- `http_proxy_id`: HTTP proxy configuration
- `debug`: Enable debug logging
- `kubeconfig_path`: Kubernetes config file path (for kubevirt)

### Installation & Setup

#### Development Environment
```bash
dnf install rubygem-foreman_virt_who_configure
foreman-rake db:migrate
foreman-rake db:seed
```

#### Production Environment
```bash
foreman-installer --enable-foreman-plugin-virt-who-configure
foreman-installer --enable-foreman-cli-virt-who-configure
```

### Dependencies

- **Foreman**: >= 3.13
- **Katello**: Required for subscription management features
- **Ruby on Rails**: Framework dependency
- **Database**: PostgreSQL/MySQL support via ActiveRecord

### Testing

Test suite located in `test/` directory with:
- Unit tests for models and services
- Functional tests for controllers and API endpoints
- Factory definitions for test data generation

### Plugin Integration

Registered as a Foreman plugin with:
- Menu integration in Infrastructure section
- Permission system integration
- API documentation via Apipie
- Audit logging for configuration changes

### Security

- Role-based access control with granular permissions
- Organization-scoped data access
- Audit trail for configuration changes
- Encrypted credential storage
- CSRF protection on web forms

### Performance Considerations

- Background job processing for cleanup tasks
- Efficient database queries with proper indexing
- Minimal API payload sizes
- Cached configuration generation

This plugin is essential for organizations using Red Hat Satellite/Foreman with virtualized infrastructure, providing streamlined virt-who deployment and management capabilities across diverse hypervisor environments.