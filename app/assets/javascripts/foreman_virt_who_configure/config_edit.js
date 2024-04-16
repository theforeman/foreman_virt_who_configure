function virt_who_update_listing_mode() {
  var hypervisor_type = $('#foreman_virt_who_configure_config_hypervisor_type').val();
  var filtering_mode = $('#foreman_virt_who_configure_config_listing_mode').val();
  var whitelist = $('#foreman_virt_who_configure_config_whitelist').parents('div.form-group');
  var blacklist = $('#foreman_virt_who_configure_config_blacklist').parents('div.form-group');
  var whitelist_parent = $('#foreman_virt_who_configure_config_filter_host_parents').parents('div.form-group');
  var blacklist_parent = $('#foreman_virt_who_configure_config_exclude_host_parents').parents('div.form-group');
  var hypervisor_ids = foreman_virt_who_configure_config_hypervisor_id;

  // https://projects.theforeman.org/issues/26321
    if (hypervisor_type != 'esx') {
      $(hypervisor_ids).find('option[value=hwuuid]').remove();
    } else if (hypervisor_type == 'esx' && $(hypervisor_ids).find('option[value=hwuuid]').length == 0) {
      $(hypervisor_ids).append('<option value='+'hwuuid>'+'hwuuid'+'</option>');
    }

  // UNLIMITED = 0, WHITELIST = 1, BLACKLIST = 2, see config.rb model for the definition
  if (filtering_mode == '0') {
    whitelist.hide();
    blacklist.hide();
    whitelist_parent.hide();
    blacklist_parent.hide();
  } else if (filtering_mode == '1') {
    whitelist.show();
    if (hypervisor_type == 'esx') { whitelist_parent.show(); } else { whitelist_parent.hide(); }
    blacklist.hide();
    blacklist_parent.hide();
  } else if (filtering_mode == '2') {
    whitelist.hide();
    whitelist_parent.hide();
    blacklist.show();
    if (hypervisor_type == 'esx') { blacklist_parent.show(); } else { blacklist_parent.hide(); }
  }
}

function virt_who_update_hypervisor_fields() {
  selected_type = $('#foreman_virt_who_configure_config_hypervisor_type').val();
  var element = $('#foreman_virt_who_configure_config_hypervisor_username');
  element.closest('.form-group').toggle(selected_type != 'kubevirt');
  var element = $('#foreman_virt_who_configure_config_hypervisor_password');
  element.closest('.form-group').toggle(selected_type != 'libvirt' && selected_type != 'kubevirt');
  var element = $('#foreman_virt_who_configure_config_kubeconfig_path');
  element.closest('.form-group').toggle(selected_type == 'kubevirt');
  var element = $('#foreman_virt_who_configure_config_hypervisor_server');
  element.closest('.form-group').toggle(selected_type != 'kubevirt');
  var element = $('#foreman_virt_who_configure_config_ahv_internal_debug');
  element.closest('.form-group').toggle(selected_type == 'ahv');
  virt_who_update_listing_mode();
  var element = $('#foreman_virt_who_configure_config_prism_flavor');
  element.closest('.form-group').toggle(selected_type == 'ahv');
}

function virt_who_update_credentials_help() {
  selected_type = $(this).val();
  $.each(['hypervisor_server', 'hypervisor_username'], function(index, value) {
    var element = $('#foreman_virt_who_configure_config_' + value);
    var help = element.data("help")[selected_type];
    var inline_help_popover = element.parents('.form-group').find('.help-inline a[rel=popover]');
    if (inline_help_popover[0]) {
      // pre Foreman 1.15
      inline_help_popover.attr('data-content', help);
    } else {
      element.parents('.form-group').find('label a[rel=popover]').attr('data-content', help);
    }
  });
}

function virt_who_update_ahv_debug() {
  var element = $('#foreman_virt_who_configure_config_ahv_internal_debug');
  var element_debug = $('#foreman_virt_who_configure_config_debug');

  element.mouseenter(function(){
    var inline_help_popover_ahv = element.parents('.form-group').find('.help-inline a[rel=popover]');
    var inline_help_popover_global = element_debug.parents('.form-group').find('.help-inline a[rel=popover]');
    inline_help_popover_ahv.popover('show');
    inline_help_popover_global.popover('show');
  });
}

$(document).ready(function () {
  virt_who_update_listing_mode();
  virt_who_update_hypervisor_fields();
  virt_who_update_ahv_debug();

  $('#foreman_virt_who_configure_config_listing_mode').change(virt_who_update_listing_mode);
  $('#foreman_virt_who_configure_config_hypervisor_type').change(virt_who_update_credentials_help);
  $('#foreman_virt_who_configure_config_hypervisor_type').change(virt_who_update_hypervisor_fields);
});
