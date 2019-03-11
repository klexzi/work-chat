import React from "react";
import PropTypes from "prop-types";

const ChatTab = props => {
  return (
    <div className="secondary-bg">
      <nav className="nav nav-pills flex-column flex-sm-row">
        <span
          className={`btn flex-sm-fill text-sm-center nav-link tab p-1 ${
            props.tabState.chatTab === true ? "tab-active" : ""
          }`}
          onClick={props.toggleTab}
        >
          <i className="fas fa-comments headline" />
        </span>
        <span
          className={`btn flex-sm-fill text-sm-center nav-link tab p-1 ${
            props.tabState.contactTab === true ? "tab-active" : ""
          }`}
          onClick={props.toggleTab}
        >
          <i className="fas fa-address-book" />
        </span>
      </nav>
    </div>
  );
};

ChatTab.propTypes = {
  toggleTab: PropTypes.func.isRequired,
  tabState: PropTypes.object.isRequired
};

export default ChatTab;
