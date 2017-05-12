function virt_who_copy_configuration_to_clipboard(text) {
  var aux = document.createElement("textarea");
  $(aux).html(text);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
