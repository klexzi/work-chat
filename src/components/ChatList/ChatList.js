import React from "react";
import PropTypes from "prop-types";
import Faker from "faker";

import Contact from "../Contact/Contact";
import "./ChatList.scss";
let chats = [];
for (let i = 1; i <= 10; i++) {
  chats.push({
    name: Faker.name.findName() + " " + Faker.name.lastName(),
    imageUrl: Faker.image.avatar(),
    role: Faker.name.jobTitle(),
    lastMessage: Faker.lorem.sentence(),
    date: Faker.date.recent().toString(),
    ownMessage: true,
    isTyping: false,
    messageStatus: "",
    newMessageCount: 234
  });
}
const ChatList = props => {
  return (
    <div className="chat-list">
      {chats.map((chat, i) => (
        <Contact
          uiFor="chat"
          name={chat.name}
          imageUrl={chat.imageUrl}
          lastMessage={chat.lastMessage}
          ownMessage={chat.ownMessage}
          messageStatus={chat.messageStatus}
          isTyping={chat.isTyping}
          newMessageCount={chat.newMessageCount}
          date={chat.date}
          key={i}
        />
      ))}
    </div>
  );
};

ChatList.propTypes = {};

export default ChatList;
