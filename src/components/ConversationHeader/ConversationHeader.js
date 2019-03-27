import React from "react";
import Faker from "faker";

import ProfileName from "../ProfileName/ProfileName";

const profile = {
  name: Faker.name.firstName() + " " + Faker.name.lastName(),
  isOnline: true,
  isTyping: false,
  role: Faker.name.jobTitle()
};
const ConversationHeader = props => {
  return (
    <div className="p-3 container-fluid">
      <div className="row">
        <div className="col-8">
          <ProfileName
            uiFor="chat"
            role={profile.role}
            name={profile.name}
            isOnline={profile.isOnline}
            isTyping={profile.isTyping}
          />
        </div>
        <div className="col-4">icons</div>
      </div>
    </div>
  );
};

export default ConversationHeader;
