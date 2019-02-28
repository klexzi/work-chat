import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Panel from "../../layout/Panel/Panel";
import ChatSVG from "../../components/ChatSVG/ChatSVG";

class Login extends Component {
  state = {};

  render() {
    return (
      <div className="primary-bg container-fluid page">
        <div className="h-100 d-flex row align-items-center justify-content-center">
          <Panel>
            <div className="col-md-6">
              <ChatSVG />
            </div>
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <LoginForm />
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Login;
