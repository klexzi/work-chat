import React, { Component } from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = props => {
  let classes = "button-border py-2 px-5";
  classes += props.classes ? " " + props.classes : "";
  if (props) return <button className={classes}> {props.children} </button>;
};

Button.propTypes = {
  classes: PropTypes.string.isRequired
};
export default Button;
