function virt_who_update_listing_mode() {
  var filtering_mode = $('#foreman_virt_who_configure_config_listing_mode').val();
  var whitelist = $('#foreman_virt_who_configure_config_whitelist').parents('div.form-group');
  var blacklist = $('#foreman_virt_who_configure_config_blacklist').parents('div.form-group');

  // UNLIMITED = 0, WHITELIST = 1, BLACKLIST = 2, see config.rb model for the definition
  if (filtering_mode == '0') {
    whitelist.hide();
    blacklist.hide();
  } else if (filtering_mode == '1') {
    whitelist.show();
    blacklist.hide();
  } else if (filtering_mode == '2') {
    whitelist.hide();
    blacklist.show();
  }
}

$(document).ready(function () {
  $('#foreman_virt_who_configure_config_hypervisor_type').change(function () {
    selected_type = $(this).val();
    $.each(['hypervisor_server', 'hypervisor_username'], function(index, value) {
      var element = $('#foreman_virt_who_configure_config_' + value)
      var help = element.data("help")[selected_type];
      element.parent().siblings('span.help-block.help-inline').children('a[rel=popover]').attr('data-content', help);
    });
  });

  virt_who_update_listing_mode();
  $('#foreman_virt_who_configure_config_listing_mode').change(virt_who_update_listing_mode);
});
