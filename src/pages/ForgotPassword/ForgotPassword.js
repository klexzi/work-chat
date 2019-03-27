import React, { Component } from "react";

import Page from "../../layout/Page/Page";
import Panel from "../../layout/Panel/Panel";
import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm";

export class ForgotPassword extends Component {
  onSubmit = values => {
    console.log(values);
    this.props.history.push("/reset-code");
  };
  render() {
    return (
      <Page>
        <Panel>
          <div className="container-fluid row justify-content-center p-0">
            <ForgotPasswordForm onSubmit={this.onSubmit} />
          </div>
        </Panel>
      </Page>
    );
  }
}

export default ForgotPassword;
