import React, { Component } from "react";

import Home from "../../containers/Home/Home";
import Chat from "../../containers/Chat/Chat";

export class Landing extends Component {
  // TODO: replace login state to use redux state
  state = { login: true };
  render() {
    return (
      <React.Fragment>
        {this.state.login === false && <Home />}
        {this.state.login === true && <Chat />}
      </React.Fragment>
    );
  }
}

export default Landing;
