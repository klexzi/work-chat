import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import Avatar from "../../ui/Avatar/Avatar";
import "./Contact.scss";
import MessageStatus from "../MessageStatus/MessageStatus";
const Contact = ({
  imageUrl,
  role,
  name,
  lastMessage,
  uiFor,
  messageStatus,
  isTyping,
  ownMessage,
  date,
  newMessageCount
}) => {
  return (
    <div className="row container-fluid m-0 p-0 mt-3 contact">
      <div className="col-3 p-0">
        <Avatar imageUrl={imageUrl} />
      </div>
      <div className="col-6 p-0">
        <div className="font-weight-bold text-truncate">{name}</div>
        <div className="small mt-2 text-capitalize text-truncate">
          {uiFor === "chat" && isTyping === true ? (
            <i>Typing...</i>
          ) : ownMessage === true ? (
            <MessageStatus status={messageStatus} />
          ) : null}
          {uiFor === "chat" && lastMessage && !isTyping ? lastMessage : role}
        </div>
      </div>

      {uiFor === "chat" ? (
        <div className="col-3 p-0 pt-2 text-right">
          {newMessageCount > 0 && (
            <div className="badge badge-pill primary-bg text-white">
              {newMessageCount}
            </div>
          )}

          <div className="small mt-2">{moment(date).format("LT")}</div>
        </div>
      ) : null}
    </div>
  );
};

Contact.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  uiFor: PropTypes.string,
  lastMessage: PropTypes.string,
  ownMessage: PropTypes.bool,
  messageStatus: PropTypes.string,
  date: PropTypes.string,
  newMessageCount: PropTypes.number,
  isTyping: PropTypes.bool
};

export default Contact;
