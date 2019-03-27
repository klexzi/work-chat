import React, { Component } from "react";
import ConversationHeader from "../../components/ConversationHeader/ConversationHeader";
import ConversationChat from "../../components/ConversationChat/ConversationChat";

export class Conversation extends Component {
  render() {
    return (
      <div className="col-lg-8 p-0">
        <ConversationHeader />
        <ConversationChat />
      </div>
    );
  }
}

export default Conversation;
