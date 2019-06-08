import React from "react";
import Faker from "faker";

import ProfileName from "../ProfileName/ProfileName";
import speechBubble from "../../assets/speech-bubble.svg";
import videoCamera from "../../assets/video-camera.svg";
const profile = {
  name: Faker.name.firstName() + " " + Faker.name.lastName(),
  isOnline: true,
  isTyping: false,
  role: Faker.name.jobTitle()
};
const ConversationHeader = props => {
  return (
    <div className="p-3 container-fluid">
      <div className="d-flex flex-row">
        <div className="flex-fill">
          <ProfileName
            uiFor="chat"
            role={profile.role}
            name={profile.name}
            isOnline={profile.isOnline}
            isTyping={profile.isTyping}
          />
        </div>
        <div className="flex-fill d-flex flex-row align-items-end justify-content-end">
          <div>
            <img src={speechBubble} className="" alt="voice-call-icon" />
          </div>
          <div>
            <img src={videoCamera} className="pl-3" alt="video-call-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationHeader;
