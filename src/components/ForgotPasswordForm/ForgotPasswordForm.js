import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import validateEmail from "../../utils/validate-email";
import xhrLoader from "../../assets/xhr-loader.gif";
let ForgotPasswordForm = props => {
  return (
    <div className={" col-lg-6 col-md-9 p-md-2 ml-4 ml-md-0 text-center"}>
      <h2 className="mb-4"> Forgot Password</h2>

      <p className="text-capitalize mb-4">Enter your email address</p>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field
          component={Input}
          name="email"
          type="email"
          label="Your Email Address"
          notification={false}
        />
        <Button
          classes="btn primary-bg text-white btn-block rounded-pill btn-md-lg mt-3 mb-2"
          disabled={props.resendCodeState.processing}
        >
          Proceed <i className="ml-3 fas fa-arrow-right" />
          {props.resendCodeState.processing ? (
            <span>
              <img src={xhrLoader} alt="xhrLoader" className="img-fluid" />
            </span>
          ) : null}
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

const mapStateToProps = state => ({
  resendCodeState: state.resendCode
});

ForgotPasswordForm = reduxForm({
  form: "forgotPassword",
  destroyOnUnmount: false,
  validate: validateEmail
})(ForgotPasswordForm);

export default connect(mapStateToProps)(ForgotPasswordForm);
