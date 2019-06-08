import React, { Component } from "react";
import { connect } from "react-redux";

import Page from "../../layout/Page/Page";
import Panel from "../../layout/Panel/Panel";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import { initResetPassword } from "../../store/actions";

export class ResetPassword extends Component {
  onSubmit = values => {
    console.log(values);
    this.props.resetPassword({
      code: this.props.verifyCodeState.code,
      email: this.props.codeFormState.email,
      password: values.password
    });
  };
  componentWillMount() {
    if (
      !this.props.verifyCodeState ||
      this.props.verifyCodeState.codeVerified !== true
    ) {
      this.props.history.push("reset-code");
    }
  }
  componentDidUpdate() {
    if (!this.props.resetPasswordState.resetPassword === true) {
      this.props.history.push("login");
    }
  }
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

const mapStateToProps = state => {
  if (
    state.verifyCode &&
    state.form.forgotPassword &&
    state.form.forgotPassword.values
  ) {
    return {
      verifyCodeState: state.verifyCode,
      codeFormState: state.form.forgotPassword.values,
      resetPasswordState: state.resetPassword
    };
  }
};
const mapDispatchToProps = dispatch => ({
  resetPassword: payload => dispatch(initResetPassword(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
