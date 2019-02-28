import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({
  uiFor,
  input,
  label,
  type,
  meta: { touched, error, warning } = {}
}) => {
  let isValid = uiFor === "login" ? "" : "is-valid";
  let iconClass;
  switch (type) {
    case "email":
      iconClass = "fas fa-envelope";
      break;
    case "password":
      iconClass = "fas fa-lock";
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
      {touched && error && (
        <div className=" ml-5 pl-3 invalid-feedback">{error}</div>
      )}
    </div>
  );
};
Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  uiFor: PropTypes.string.isRequired
};

export default Input;
