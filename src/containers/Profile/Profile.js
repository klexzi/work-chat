import React, { Component } from "react";
import PropTypes from "prop-types";
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
  static propTypes = {
    myProfile: PropTypes.bool
  };
  render() {
    return (
      <div
        className={`${
          this.props.myProfile === true ? "col-lg-3" : "col-lg-4"
        } border chat-area p-0 pt-5`}
      >
        {this.props.myProfile === true ? (
          <div style={{ cursor: "pointer" }} className="px-4 info-text h2">
            <i className="fas fa-arrow-left" />
          </div>
        ) : null}
        <div className="container-fluid row m-0 mt-5 mb-4 justify-content-center">
          <Avatar
            imageUrl={profile.imageUrl}
            uiFor="profile-picture"
            myProfile={this.props.myProfile}
          />
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
        {this.props.myProfile !== true ? (
          <div className="border border-left-0 border-right-0 border-bottom-0 py-2">
            <SharedFiles />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Profile;
