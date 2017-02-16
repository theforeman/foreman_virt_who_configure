$(document).ready(function () {
  $('#foreman_virt_who_configure_config_hypervisor_type').change(function () {
    selected_type = $(this).val();
    $.each(['hypervisor_server', 'hypervisor_username'], function(index, value) {
      var element = $('#foreman_virt_who_configure_config_' + value)
      var help = element.data("help")[selected_type];
      element.parent().siblings('span.help-block.help-inline').children('a[rel=popover]').attr('data-content', help);
    });
  });
});
