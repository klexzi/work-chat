import React, { Component } from "react";

import "./Overlay.scss";
export class Overlay extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="overlay" />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Overlay;
