import React, { Component } from "react";
import Faker from "faker";

import Avatar from "../../ui/Avatar/Avatar";
import Search from "../../ui/Search/Search";
import ChatTab from "../../components/ChatTab/ChatTab";
import ContactList from "../../components/ContactList/ContactList";
import ChatList from "../../components/ChatList/ChatList";
import "./contacts.scss";
import OptionMenu from "../../components/OptionMenu/OptionMenu";
import Profile from "../Profile/Profile";
//TODO: profile would be gotten from store and passed as props
const profile = {
  name: Faker.name.firstName() + " " + Faker.name.lastName(),
  imageUrl: Faker.image.avatar()
};
// TODO: remove this console
console.log(profile);
export class Contacts extends Component {
  state = {
    chatTab: true,
    contactTab: false,
    optionClicked: false,
    myProfile: true
  };
  toggleTab = () =>
    this.setState(prevState => ({
      chatTab: !prevState.chatTab,
      contactTab: !prevState.contactTab
    }));

  showMenu = () => {
    this.setState({ optionClicked: true }, () => {
      document.addEventListener("click", this.hideMenu);
    });
  };
  hideMenu = () => {
    this.setState({ optionClicked: false }, () => {
      document.removeEventListener("click", this.hideMenu);
    });
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        {this.state.myProfile === true ? (
          <Profile myProfile={this.state.myProfile} />
        ) : (
          <div className="col-lg-3 border chat-area p-0">
            <div className="font-weight-bold text-capitalize py-2 px-4 secondary-bg">
              organization name
            </div>
            <div className="container-fluid">
              <div className="row px-2 py-1">
                <div className="col-3 p-0">
                  <div className="dropdown">
                    <div>
                      <Avatar
                        onClick={this.showMenu}
                        imageUrl={profile.imageUrl}
                        uiFor="profile-thumbnail"
                      />
                    </div>
                    {this.state.optionClicked === true ? <OptionMenu /> : null}
                  </div>
                </div>
                <div className="col-9 px-0 pt-2">
                  <Search />
                </div>
              </div>
            </div>
            <ChatTab
              toggleTab={this.toggleTab}
              tabState={{
                chatTab: this.state.chatTab,
                contactTab: this.state.contactTab
              }}
            />
            {this.state.chatTab && (
              <div className="w-100 p-0">
                <ChatList />
              </div>
            )}
            {this.state.contactTab && (
              <div className="w-100 p-0">
                <ContactList />
              </div>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Contacts;
