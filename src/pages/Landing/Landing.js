import React, { Component } from "react";
import { connect } from "react-redux";

import Home from "../../containers/Home/Home";
import Chat from "../../containers/Chat/Chat";

class Landing extends Component {
  // TODO: replace login state to use redux state
  state = { login: false };
  render() {
    return (
      <React.Fragment>
        {this.props.authState.authenticated === false && <Home />}
        {this.props.authState.authenticated === true && <Chat />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  authState: state.auth
});
export default connect(mapStateToProps)(Landing);
