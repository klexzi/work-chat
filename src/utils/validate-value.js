const validateValue = (
  value,
  regex = /^[a-zA-Z0-9_ ]*$/,
  regexMessage = "only letters and spaces allowed"
) => {
  if (!value) {
    return "required";
  } else if (!value.match(regex)) {
    return regexMessage;
  }
  return "";
};

export { validateValue as default };
