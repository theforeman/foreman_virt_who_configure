function virt_who_copy_configuration_to_clipboard(text) {
  try {
    navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(
      "Copying to clipboard is not supported in this browser, or with an insecure connection."
    );
    console.error(error);
  }
}
