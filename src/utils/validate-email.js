const validateEmail = values => {
  let errors = {};
  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values["organizationEmail"]) {
    errors["organizationEmail"] = "required";
  } else if (!values["organizationEmail"].match(emailRegex)) {
    errors["organizationEmail"] = "invalid email address";
  }
  return errors;
};

export default validateEmail;
