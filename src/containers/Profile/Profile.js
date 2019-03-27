import React, { Component } from "react";
import Faker from "faker";

import Avatar from "../../ui/Avatar/Avatar";
import ProfileName from "../../components/ProfileName/ProfileName";
import ProfileDetail from "../../components/ProfileDetail/ProfileDetail";
import SharedFiles from "../../components/SharedFiles/SharedFiles";
//TODO: profile would be gotten from store especially the selected contact reducer and passed as props
const profile = {
  name: Faker.name.firstName() + " " + Faker.name.lastName(),
  imageUrl: Faker.image.avatar(),
  role: Faker.name.jobTitle(),
  email: Faker.internet.email(),
  phone: Faker.phone.phoneNumber(),
  isOnline: true,
  isTyping: true
};
// TODO: remove this console
console.log(profile);
export class Profile extends Component {
  render() {
    return (
      <div className="col-lg-4 border chat-area p-0 pt-5">
        <div className="container-fluid row m-0 mt-5 mb-4 justify-content-center">
          <Avatar imageUrl={profile.imageUrl} uiFor="profile-picture" />
        </div>
        <div className="border border-left-0 border-right-0 border-bottom-0 px-4 py-2">
          <ProfileName {...profile} />
        </div>
        <div className="border border-left-0 border-right-0 border-bottom-0 px-4 py-2">
          <ProfileDetail uiFor="phone" data={profile.phone} />
        </div>
        <div className="border border-left-0 border-right-0 border-bottom-0 px-4 py-2">
          <ProfileDetail uiFor="email" data={profile.email} />
        </div>
        <div className="border border-left-0 border-right-0 border-bottom-0 py-2">
          <SharedFiles />
        </div>
      </div>
    );
  }
}

export default Profile;
