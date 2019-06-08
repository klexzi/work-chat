import React, { Component } from "react";
import { connect } from "react-redux";

import Page from "../../layout/Page/Page";
import Panel from "../../layout/Panel/Panel";
import VerificationCodeForm from "../../components/VerificationCodeForm/VerificationCodeForm";
import { initVerifyAccount, initResendCode } from "../../store/actions";

export class VerifyAccount extends Component {
  handleSubmit = values => {
    this.props.verifyAccount({ code: values, token: this.props.auth.token });
  };
  resendCode = () => {
    this.props.resendCode({
      type: "VERIFICATION",
      token: this.props.auth.token
    });
  };
  componentWillMount() {
    if (!this.props.auth || !this.props.auth.token) {
      this.props.history.push("login");
    }
  }
  componentDidUpdate() {
    if (this.props.verifyAccountState.accountVerified === true) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <Page>
        <Panel>
          <div className="container-fluid row justify-content-center p-0">
            <VerificationCodeForm
              uiFor="verify-account"
              handleSubmit={this.handleSubmit}
              resendCode={this.resendCode}
            />
          </div>
        </Panel>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  verifyAccountState: state.verifyAccount
});
const mapDispatchToProps = dispatch => ({
  verifyAccount: payload => dispatch(initVerifyAccount(payload)),
  resendCode: payload => dispatch(initResendCode(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyAccount);
