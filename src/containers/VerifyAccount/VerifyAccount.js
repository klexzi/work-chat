import React, { Component } from "react";

import Page from "../../layout/Page/Page";
import Panel from "../../layout/Panel/Panel";
import VerificationCodeForm from "../../components/VerificationCodeForm/VerificationCodeForm";

export class VerifyAccount extends Component {
  handleSubmit = values => {
    console.log("values", values);
  };
  render() {
    return (
      <Page>
        <Panel>
          <div className="container-fluid row justify-content-center p-0">
            <VerificationCodeForm
              uiFor="verify-account"
              handleSubmit={this.handleSubmit}
            />
          </div>
        </Panel>
      </Page>
    );
  }
}

export default VerifyAccount;
