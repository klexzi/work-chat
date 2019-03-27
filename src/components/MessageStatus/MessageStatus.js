import React, { memo } from "react";
import PropTypes from "prop-types";

const MessageStatus = memo(function MessageStatus({ status }) {
  return (
    <span className="small mr-1">
      {status === "read" ? (
        <i className="fas fa-check-circle" />
      ) : status === "delivered" ? (
        <i className="far fa-check-circle" />
      ) : status === "sent" ? (
        <i className="fas fa-circle" />
      ) : (
        <i className="far fa-clock" />
      )}
    </span>
  );
});

MessageStatus.propTypes = {
  status: PropTypes.string.isRequired
};

export default MessageStatus;
