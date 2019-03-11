import React, { Component } from "react";

import Contacts from "../../components/Contacts/Contacts";

export class Chat extends Component {
  render() {
    return (
      <div className="w-100 container-fluid page">
        <div className="row">
          <Contacts />
          <div className="col-lg-6">Chat area</div>
          <div className="col-lg-3">profile</div>
        </div>
      </div>
    );
  }
}

export default Chat;
