import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import validateValue from "../../utils/validate-value";

const CreateOrganization = props => {
  const classNames =
    props.transitionState === "entering"
      ? "animated bounceInLeft"
      : props.transitionState === "exiting"
      ? "animated bounceOutRight"
      : null;
  return (
    <div className={classNames + " col-md-6 p-md-2 ml-4 ml-md-0 text-center"}>
      <h2> Create Organization Account</h2>
      <p className="w-100 mx-auto mb-5">
        Create an organization account channel where all your staff or members
        can communicate with ease
      </p>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <div className="mb-3">
          <Field
            component={Input}
            name="organizationEmail"
            type="email"
            label="Organization Email"
          />
        </div>

        <Field
          component={Input}
          name="organizationName"
          type="organizationName"
          label="Organization Name"
        />
        <Button classes="btn primary-bg text-white btn-block rounded-pill btn-md-lg mt-3 mb-2">
          Proceed <i className="ml-3 fas fa-arrow-right" />
        </Button>
      </form>
      <div className="mt-4 small text-center">
        Want to join a organization channel?
        <span onClick={props.switchState} className="mock-link text-info">
          &nbsp; Join Organization Channel
        </span>
      </div>
    </div>
  );
};

CreateOrganization.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  switchState: PropTypes.func.isRequired
};

const validate = values => {
  let errors = {};
  let checkOrganizationName = validateValue(values["organizationName"]);
  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.organizationEmail) {
    errors.organizationEmail = "required";
  } else if (!values.organizationEmail.match(emailRegex)) {
    errors.organizationEmail = "invalid email address";
  }
  if (checkOrganizationName !== "") {
    errors.organizationName = checkOrganizationName;
  }
  return errors;
};

export default reduxForm({
  form: "SignupForm",
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(CreateOrganization);
