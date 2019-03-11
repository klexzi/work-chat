import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import validateEmail from "../../utils/validate-email";

const ForgotPasswordForm = props => {
  return (
    <div className={" col-lg-6 col-md-9 p-md-2 ml-4 ml-md-0 text-center"}>
      <h2 className="mb-4"> Forgot Password</h2>

      <p className="text-capitalize mb-4">
        Enter your Organization email address
      </p>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field
          component={Input}
          name="organizationEmail"
          type="email"
          label="Your Email Address"
          notification={false}
        />
        <Button classes="btn primary-bg text-white btn-block rounded-pill btn-md-lg mt-3 mb-2">
          Proceed <i className="ml-3 fas fa-arrow-right" />
        </Button>
      </form>
      <div className="mt-4 small text-center">
        Remember your password?
        <Link to="/login" className="mock-link text-info">
          &nbsp; Login
        </Link>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "forgotPassword",
  validate: validateEmail
})(ForgotPasswordForm);
