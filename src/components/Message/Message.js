import React, { memo } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./Message.scss";
import MessageStatus from "../MessageStatus/MessageStatus";
const Message = memo(props => {
  console.log(props.mediaUrl);
  let incomingMessage = props.from === "13";
  let classes =
    incomingMessage === true
      ? "incoming-message"
      : "outgoing-message text-light";
  return (
    <div
      className={
        incomingMessage === false ? "mt-1 d-flex justify-content-end" : "mt-1"
      }
    >
      {props.type === "text" ? (
        <div style={{ maxWidth: "max-content" }}>
          <div className={`message p-1 border rounded m-0 ${classes}`}>
            <div className="d-flex flex-row px-1">
              <div className="">{props.message}</div>
              <div className="pl-2 d-flex flex-column align-items-start justify-content-end small">
                <div className="small text-nowrap">
                  {moment(props.date).format("LT")}
                </div>
                {incomingMessage === false ? (
                  <div className="mt-auto ml-auto">
                    <MessageStatus status={"read"} />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`file-message message p-1 border rounded ${classes}`}
          style={{ width: "400px" }}
        >
          <img alt="asset" src={props.mediaUrl} className="img-fluid" />
          <div className=" pl-2 d-flex flex-column align-items-start justify-content-end small">
            <div
              className="small text-nowrap"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              {moment(props.date).format("LT")}
            </div>
            {incomingMessage === false ? (
              <div
                className="mt-auto ml-auto"
                style={{ position: "absolute", bottom: "10px", right: "10px" }}
              >
                <MessageStatus status={"read"} />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
});

Message.propTypes = {
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Message;
