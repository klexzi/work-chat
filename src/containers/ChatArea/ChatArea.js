import React from "react";
import PropTypes from "prop-types";

import Profile from "../../containers/Profile/Profile";
import LoginSvg from "../../assets/login.svg";
import Conversation from "../Conversation/Conversation";

const ChatArea = ({ chatSelected }) => {
  return (
    <div className="col-lg-9">
      <div className="row">
        {chatSelected === true ? (
          <div
            style={{ height: "100vh" }}
            className="col-lg-12 d-flex row align-items-center justify-content-center"
          >
            <div className="col-6">
              <img src={LoginSvg} alt="welcome chat" />
              <div className="h2 font-weight-light text-center mt-3">
                Work Chat, Communicate and Connect with Members and Co- workers
              </div>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <Conversation />
            <Profile />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

ChatArea.propTypes = {
  chatSelected: PropTypes.bool.isRequired
};
export default ChatArea;
