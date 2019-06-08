import React, { Component } from "react";
import { connect } from "react-redux";

import Page from "../../layout/Page/Page";
import Panel from "../../layout/Panel/Panel";
import VerificationCodeForm from "../../components/VerificationCodeForm/VerificationCodeForm";
import { initVerifyCode, initResendCode } from "../../store/actions";
import { AlertNotification } from "../../components/AlertNotification/AlertNotification";

export class ResetCode extends Component {
  handleSubmit = values => {
    this.props.verifyCode({
      code: values,
      email: this.props.codeFormState.email
    });
  };
  resendCode = () => {
    this.props.resendCode({
      type: "PASSWORD",
      token: undefined,
      email: this.props.codeFormState.email
    });
  };

  componentWillMount() {
    console.log("did mount");
    if (!this.props.codeFormState || !this.props.codeFormState.email) {
      this.props.history.push("forgot-password");
    }
  }

  componentDidUpdate() {
    if (this.props.verifyCodeState.codeVerified === true) {
      this.props.history.push("reset-password");
    }
  }
  render() {
    return (
      <Page>
        <Panel>
          <div className="container-fluid row justify-content-center p-0">
            <VerificationCodeForm
              uiFor="reset-password"
              handleSubmit={this.handleSubmit}
              resendCode={this.resendCode}
            />
            {this.props.verifyCodeState &&
              this.props.verifyCodeState.error === true && (
                <AlertNotification
                  type="error"
                  message={this.props.verifyCodeState.message}
                />
              )}
            {this.props.resendCodeState &&
              this.props.resendCodeState.codeSent === true && (
                <AlertNotification
                  type="success"
                  message={this.props.resendCodeState.message}
                />
              )}
          </div>
        </Panel>
      </Page>
    );
  }
}
const mapStateToProps = state => {
  if (state.form.forgotPassword && state.form.forgotPassword) {
    return {
      verifyCodeState: state.verifyCode,
      resendCodeState: state.resendCode,
      codeFormState: state.form.forgotPassword.values
    };
  }
};

const mapDispatchToProps = dispatch => ({
  verifyCode: payload => dispatch(initVerifyCode(payload)),
  resendCode: payload => dispatch(initResendCode(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetCode);
