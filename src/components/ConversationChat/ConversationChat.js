import React from "react";

import "./ConversationChat.scss";
import Conversations from "../Conversations/Conversations";
import ConversationInputArea from "../ConversationInputArea/ConversationInputArea";
const ConversationChat = () => {
  return (
    <div className="conversation-area secondary-bg">
      <Conversations />
      <ConversationInputArea />
    </div>
  );
};

export default ConversationChat;
