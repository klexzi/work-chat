const confirmPassword = (password, secondPassword) => {
  if (!secondPassword) {
    return "required";
  } else if (secondPassword !== password) {
    return "password mismatch";
  }
  return "";
};

export { confirmPassword as default };
