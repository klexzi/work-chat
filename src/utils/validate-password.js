const validatePassword = password => {
  if (!password) {
    return "required";
  } else if (password.length < 8) {
    return "password too short";
  } else if (
    !password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) &&
    !password.match(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
    )
  ) {
    return "weak password";
  }
  return "";
};

export { validatePassword as default };
