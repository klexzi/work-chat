import React from "react";
import PropTypes from "prop-types";

const Avatar = props => {
  let styles = {
    width:
      props.uiFor === "profile-thumbnail"
        ? "52px"
        : props.uiFor === "profile-picture"
        ? "356px"
        : "70px",
    height:
      props.uiFor === "profile-thumbnail"
        ? "52px"
        : props.uiFor === "profile-picture"
        ? "356px"
        : "69px"
  };
  return (
    <div className="secondary-bg rounded rounded-circle" style={styles}>
      <img
        src={props.imageUrl}
        className="img-fluid rounded rounded-circle"
        alt="profile"
      />
    </div>
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  uiFor: PropTypes.string
};

export default Avatar;
