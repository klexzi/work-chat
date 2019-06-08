import React, { Component } from "react";
import { connect } from "react-redux";

import Page from "../../layout/Page/Page";
import Panel from "../../layout/Panel/Panel";
import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm";
import { initResendCode } from "../../store/actions/resend-code";
import { AlertNotification } from "../../components/AlertNotification/AlertNotification";

export class ForgotPassword extends Component {
  onSubmit = values => {
    this.props.resendCode({
      type: "PASSWORD",
      token: undefined,
      email: values.email
    });
  };
  componentDidUpdate() {
    if (this.props.resendCodeState.codeSent === true) {
      this.props.history.push("/reset-code");
    }
  }
  render() {
    return (
      <Page>
        <Panel>
          <div className="container-fluid row justify-content-center p-0">
            <ForgotPasswordForm onSubmit={this.onSubmit} />
            {this.props.resendCodeState &&
              this.props.resendCodeState.error === true && (
                <AlertNotification
                  type="error"
                  message={this.props.resendCodeState.message}
                />
              )}
          </div>
        </Panel>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  resendCodeState: state.resendCode
});

const mapDispatchToProps = dispatch => ({
  resendCode: payload => dispatch(initResendCode(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
