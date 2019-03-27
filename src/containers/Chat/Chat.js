import React, { Component } from "react";

import Contacts from "../Contacts/Contacts";
import ChatArea from "../ChatArea/ChatArea";

export class Chat extends Component {
  //TODO: chatSelected should be gotten from redux store
  state = { chatSelected: false };
  render() {
    return (
      <div className="w-100 container-fluid page">
        <div className="row">
          <Contacts />
          <ChatArea chatSelected={this.state.chatSelected} />
        </div>
      </div>
    );
  }
}

export default Chat;
