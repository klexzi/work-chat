import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import validatePassword from "../../utils/validate-password";
import confirmPassword from "../../utils/confirm-password";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";

const ResetPasswordForm = props => {
  return (
    <div className={" col-md-5 p-md-2 ml-4 ml-md-0 text-center"}>
      <h4 className="text-center mt-2 mt-md-0 mb-3 mb-md-4">Reset Password</h4>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <div className="mb-3">
          <Field
            component={Input}
            type="password"
            name="password"
            label="Password"
          />
        </div>
        <div className="mb-3">
          <Field
            component={Input}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
          />
        </div>
        <Button classes="btn primary-bg text-white btn-block rounded-pill btn-md-lg mb-3">
          Proceed <i className="ml-3 fas fa-arrow-right" />
        </Button>
      </form>
      <div className="mt-4 small text-center">
        Remember your Password?
        <Link to="login" className="mock-link text-info">
          &nbsp; Log in
        </Link>
      </div>
    </div>
  );
};

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const validate = values => {
  let errors = {};
  let checkPassword = validatePassword(values.password);
  let checkConfirmPassword = confirmPassword(
    values.password,
    values.confirmPassword
  );

  if (checkPassword !== "") {
    errors.password = checkPassword;
  }
  if (checkConfirmPassword !== "") {
    errors.confirmPassword = checkConfirmPassword;
  }
  return errors;
};
export default reduxForm({
  form: "resetPassword",
  validate
})(ResetPasswordForm);
