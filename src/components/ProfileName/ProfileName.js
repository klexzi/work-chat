import React from "react";
import PropTypes from "prop-types";

import "./ProfileName.scss";
const ProfileName = ({ uiFor, isTyping, isOnline, role, name }) => {
  return (
    <div className="p-0 pt-2">
      <div className="h4 text-truncate">
        {name}
        <span className="rounded rounded-circle online-status ml-2">
          &nbsp;
        </span>
      </div>
      <div className="mt-2 text-capitalize text-truncate">
        {uiFor === "chat" && isTyping === true ? (
          <i className="small">Typing...</i>
        ) : (
          <span className="lead small">{role}</span>
        )}
      </div>
    </div>
  );
};

ProfileName.propTypes = {
  uiFor: PropTypes.string,
  role: PropTypes.string.isRequired,
  isTyping: PropTypes.bool.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default ProfileName;
