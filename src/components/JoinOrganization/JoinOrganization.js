import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";

const JoinOrganization = props => {
  const classNames =
    props.transitionState === "entering"
      ? "animated bounceInDown"
      : props.transitionState === "exiting"
      ? "animated bounceOutDown"
      : null;
  return (
    <div className={classNames + " col-md-6 p-md-2 ml-4 ml-md-0 text-center"}>
      <h2> Join Your Organization</h2>
      <h6 className="w-75 mx-auto mb-5">
        Connect with your colleagues and start communicating
      </h6>

      <p className="text-capitalize">Enter your Organization email address</p>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field
          component={Input}
          name="organization-email"
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

const validate = values => {
  let errors = {};
  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values["organization-email"]) {
    errors["organization-email"] = "required";
  } else if (!values["organization-email"].match(emailRegex)) {
    errors["organization-email"] = "invalid email address";
  }
  return errors;
};

export default reduxForm({
  form: "SignupForm",
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(JoinOrganization);
