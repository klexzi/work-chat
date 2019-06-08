import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "../../components/LoginForm/LoginForm";
import Panel from "../../layout/Panel/Panel";
import ChatSVG from "../../components/ChatSVG/ChatSVG";
import Page from "../../layout/Page/Page";
import { AlertNotification } from "../../components/AlertNotification/AlertNotification";

class Login extends Component {
  state = {};

  componentDidUpdate() {
    if (this.props.auth.authenticated) {
      if (this.props.auth.isVerified) {
        this.props.history.push("/");
      } else {
        this.props.history.push("/verify-account");
      }
    }
  }
  render() {
    return (
      <Page>
        <Panel>
          <div className="col-lg-6 d-none d-lg-block">
            <ChatSVG />
          </div>
          <div className="col-lg-6 px-5 px-md-0 py-0">
            <div className="row justify-content-center">
              <div className="col-md-8 p-0">
                <LoginForm />
              </div>
            </div>
          </div>
          {this.props.auth.error === true && (
            <AlertNotification type="error" message={this.props.auth.message} />
          )}
        </Panel>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Login);
