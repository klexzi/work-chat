import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import Input from "../../ui/Input/Input";
import Checkbox from "../../ui/Checkbox/Checkbox";
import Button from "../../ui/Button/Button";
import validateValue from "../../utils/validate-value";
import normalizePhone from "../../utils/normalize-phone";
import capitalize from "../../utils/capitalize";
const SignupForm = props => {
  // TODO: Async validation for email
  return (
    <React.Fragment>
      <h4 className="text-center mt-2 mt-md-0 mb-3 mb-md-4">WorkChat Signup</h4>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <div className="d-md-flex mb-md-4 mb-3">
          <div className="col-md-6 mb-3 mb-md-0 p-0">
            <Field
              component={Input}
              label="FirstName"
              type="name"
              name="firstname"
              normalize={capitalize}
            />
          </div>
          <div className="col-md-6 p-0">
            <Field
              component={Input}
              label="LastName"
              type="name"
              name="lastname"
              normalize={capitalize}
            />
          </div>
        </div>
        <div className="mb-md-4 mb-3">
          <Field component={Input} name="email" type="email" label="Email" />
        </div>
        <div className="mb-md-4 mb-3">
          <Field
            component={Input}
            name="password"
            type="password"
            label="Password"
          />
        </div>
        <div className="mb-md-4 mb-3">
          <Field
            component={Input}
            name="confirm-password"
            type="password"
            label="Confirm Password"
          />
        </div>
        <div className="mb-md-4 mb-3">
          <Field
            component={Input}
            name="phone"
            type="phone"
            label="Phone"
            normalize={normalizePhone}
          />
        </div>

        <div className="mb-md-4 mb-3">
          <Field
            component={Checkbox}
            name="policy"
            type="checkbox"
            label="Accept our Terms and Condition"
          />
        </div>

        <Button classes="btn primary-bg text-white btn-block rounded-pill btn-md-lg mb-3">
          Proceed <i className="ml-3 fas fa-arrow-right" />
        </Button>
      </form>
      <div className="small text-center">
        Already have an account?
        <Link to="/login" className="text-info">
          &nbsp; Log in
        </Link>
      </div>
    </React.Fragment>
  );
};

// const onSubmit = values => {
//   console.log(values);
// };
const validate = values => {
  let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let checkFirstname = validateValue(values.firstname);
  let checkLastname = validateValue(values.lastname);
  let checkEmail = validateValue(
    values.email,
    emailRegEx,
    "invalid email address"
  );

  let errors = {};
  if (checkFirstname !== "") {
    errors.firstname = checkFirstname;
  }
  if (checkLastname !== "") {
    errors.lastname = checkLastname;
  }
  if (checkEmail !== "") {
    errors.email = checkEmail;
  }
  if (!values.password) {
    errors.password = "required";
  } else if (values.password.length < 8) {
    errors.password = "password too short";
  } else if (
    values.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) &&
    !values.password.match(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
    )
  ) {
    errors.password = "weak password";
  }
  if (!values["confirm-password"]) {
    errors["confirm-password"] = "required";
  } else if (values["confirm-password"] !== values.password) {
    errors["confirm-password"] = "password mismatch";
  }
  if (values.phone && values.phone.length < 15) {
    errors.phone = "not a valid phone number";
  }
  if (!values.policy) {
    errors.policy = "you must accept our terms and conditions";
  }
  return errors;
};
const warn = values => {
  let warnings = {};
  if (
    !/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(
      values.password
    )
  ) {
    warnings.password = "password is not strong";
  }
  return warnings;
};

export default reduxForm({
  form: "SignupForm",
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  warn
})(SignupForm);
