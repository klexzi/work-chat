import React, { Component } from "react";
import PropTypes from "prop-types";

import "./AlertNotification.scss";
export class AlertNotification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  render() {
    let alertType =
      this.props.type === "error"
        ? "alert-danger"
        : this.props.type === "success"
        ? "alert-success"
        : "";
    return (
      <div
        className={`p-4 shadow shadow-lg alert ${alertType} alert-notification rounded text-center`}
      >
        {this.props.message}
      </div>
    );
  }
}
