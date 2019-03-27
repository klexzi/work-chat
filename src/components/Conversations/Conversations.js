import React from "react";
import Faker from "faker";

import Message from "../Message/Message";

import "./Conversations.scss";
let messages = [];
for (let i = 1; i <= 15; i++) {
  messages.push({
    type: i % 7 !== 0 ? "text" : "image",
    mediaUrl: Faker.random.image(),
    to: Faker.random.uuid(),
    from: i % 2 !== 0 ? "13" : Faker.random.uuid(),
    message: Faker.lorem.sentence(),
    date: Faker.date.recent()
  });
}

const Conversations = () => {
  return (
    <div className=" px-3 conversations" style={{ height: "91%" }}>
      {messages.length < 0 ? (
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "inherit", opacity: "0.4" }}
        >
          <p className="info-text h4">Start a Conversation </p>
        </div>
      ) : (
        messages.map((msg, i) => (
          <Message
            message={msg.message}
            key={i}
            to={msg.to}
            from={msg.from}
            date={msg.date}
            type={msg.type}
            mediaUrl={msg.mediaUrl}
          />
        ))
      )}
    </div>
  );
};

export default Conversations;
