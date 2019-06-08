import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Avatar.scss";
class Avatar extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    uiFor: PropTypes.string,
    myProfile: PropTypes.bool
  };
  state = { picOpt: false };

  styles = {
    cursor: "pointer",
    width:
      this.props.uiFor === "profile-thumbnail"
        ? "52px"
        : this.props.uiFor === "profile-picture"
        ? "256px"
        : "60px",
    height:
      this.props.uiFor === "profile-thumbnail"
        ? "52px"
        : this.props.uiFor === "profile-picture"
        ? "256px"
        : "59px"
  };

  togglePicOpt = () => {
    if (this.props.myProfile !== true) return;
    return this.setState(prevState => ({ picOpt: !prevState.picOpt }));
  };
  render() {
    return (
      <div
        onMouseEnter={this.togglePicOpt}
        onMouseLeave={this.togglePicOpt}
        className="position-relative secondary-bg rounded rounded-circle"
        style={this.styles}
      >
        <img
          src={this.props.imageUrl}
          onClick={this.props.onClick}
          className="img-fluid w-100 h-100 rounded rounded-circle"
          alt="profile"
        />
        {this.state.picOpt === true ? (
          <div className="pic-opt rounded rounded-circle d-flex flex-column justify-content-center align-items-center text-white font-weight-bold">
            <div className="mb-2"> View Photo</div>
            <div> Change Photo</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Avatar;
