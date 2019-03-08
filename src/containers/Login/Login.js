import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Panel from "../../layout/Panel/Panel";
import ChatSVG from "../../components/ChatSVG/ChatSVG";
import Page from "../../layout/Page/Page";

class Login extends Component {
  state = {};

  render() {
    return (
      <Page>
        <Panel>
          <div className="col-md-6 d-none d-md-block">
            <ChatSVG />
          </div>
          <div className="col-md-6 px-5 px-md-0 py-0">
            <div className="row justify-content-center">
              <div className="col-md-8 p-0">
                <LoginForm />
              </div>
            </div>
          </div>
        </Panel>
      </Page>
    );
  }
}

export default Login;
