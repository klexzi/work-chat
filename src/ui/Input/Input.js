import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({
  notification,
  input,
  label,
  type,
  meta: { touched, error, warning } = {}
}) => {
  let isValid = notification === false ? "" : "is-valid";
  let iconClass;
  switch (type) {
    case "email":
      iconClass = "fas fa-envelope";
      break;
    case "password":
      iconClass = "fas fa-lock";
      break;
    case "name":
      iconClass = "fas fa-user";
      break;
    case "phone":
      iconClass = "fas fa-phone";
      break;
    case "organization-name":
      iconClass = "fas fa-globe";
      break;
    default:
      iconClass = "";
  }
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text pl-4 pr-3" id="basic-addon1">
          <i className={iconClass} />
        </span>
      </div>
      <input
        {...input}
        type={type}
        className={`form-control input-bg input-field ${
          !touched ? "" : touched && error ? " is-invalid" : isValid
        }`}
        placeholder={label}
      />
      {touched &&
        ((error && (
          <div className=" ml-5 pl-3 text-left invalid-feedback">{error}</div>
        )) ||
          (warning && (
            <div className="ml-5 pl-3 text-left valid-feedback text-warning">
              {warning}
            </div>
          )))}
    </div>
  );
};
Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  notification: PropTypes.bool
};

export default Input;
