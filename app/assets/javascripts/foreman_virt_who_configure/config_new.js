function virt_who_enable_https_proxy(item) {
  const checked = $(item).is(':checked');

  if( checked ){
    $("label[for='proxy']").text("HTTPS Proxy");
  } else {
    $("label[for='proxy']").text("HTTP Proxy");
  }
}
