import React, { Component } from "react";

import Contacts from "../Contacts/Contacts";
import ChatArea from "../ChatArea/ChatArea";
import ImageViewer from "../ImageViewer/ImageViewer";

export class Chat extends Component {
  //TODO: chatSelected, imageViewer should be gotten from redux store
  state = { chatSelected: true, imageViewer: false };
  render() {
    return (
      <div className="w-100 container-fluid page">
        <div className="row">
          <Contacts />
          <ChatArea chatSelected={this.state.chatSelected} />
          {this.state.imageViewer === true ? <ImageViewer /> : null}
        </div>
      </div>
    );
  }
}

export default Chat;
