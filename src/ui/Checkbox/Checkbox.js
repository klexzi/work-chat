import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ input, label, meta: { touched, error, warning } = {} }) => {
  return (
    <div className="ml-2 form-check">
      <input
        {...input}
        className={`form-check-input ${
          !touched ? "" : touched && error ? " is-invalid" : "is-valid"
        }`}
        type="checkbox"
        value=""
        id="checkbox"
      />
      <label className="form-check-label" htmlFor="checkbox">
        <small>{label}</small>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired
};

export default Checkbox;
