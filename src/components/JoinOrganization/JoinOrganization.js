import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import validateEmail from "../../utils/validate-email";

const JoinOrganization = props => {
  const classNames =
    props.transitionState === "entering"
      ? "animated bounceInLeft"
      : props.transitionState === "exit"
      ? "animated bounceOutRight"
      : null;
  return (
    <div
      className={
        classNames + " col-lg-6 col-md-9 p-md-2 ml-4 ml-md-0 text-center"
      }
    >
      <h2> Join Your Organization</h2>
      <h6 className="w-75 mx-auto mb-5">
        Connect with your colleagues and start communicating
      </h6>

      <p className="text-capitalize">Enter your Organization email address</p>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field
          component={Input}
          name="organizationEmail"
          type="email"
          label="Your Organization Email"
        />
        <Button classes="btn primary-bg text-white btn-block rounded-pill btn-md-lg mt-3 mb-2">
          Proceed <i className="ml-3 fas fa-arrow-right" />
        </Button>
      </form>
      <div className="mt-4 small text-center">
        Want to create your own organization channel?
        <span onClick={props.switchState} className="mock-link text-info">
          &nbsp; Create organization account
        </span>
      </div>
    </div>
  );
};

JoinOrganization.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  switchState: PropTypes.func.isRequired
};

export default reduxForm({
  form: "SignupForm",
  validate: validateEmail,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(JoinOrganization);
