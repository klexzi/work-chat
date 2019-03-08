import React, { Component } from "react";

import Page from "../../layout/Page/Page";
import Panel from "../../layout/Panel/Panel";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";

export class ResetPassword extends Component {
  onSubmit = values => {
    console.log(values);
  };
  render() {
    return (
      <Page>
        <Panel>
          <div className="container-fluid row justify-content-center p-0">
            <ResetPasswordForm onSubmit={this.onSubmit} />
          </div>
        </Panel>
      </Page>
    );
  }
}

export default ResetPassword;
