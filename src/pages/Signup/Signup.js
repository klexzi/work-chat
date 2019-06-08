import React, { Component } from "react";
import { connect } from "react-redux";

import Page from "../../layout/Page/Page";
import Panel from "../../layout/Panel/Panel";
import ContactForm from "../../containers/ContactForm/ContactForm";
import CompleteSignup from "../../containers/CompleteSignup/CompleteSignup";
import {
  initCreateOrganization,
  initJoinOrganization
} from "../../store/actions";

export class Signup extends Component {
  state = { stage: 1 };
  static propTypes = {};

  componentDidUpdate() {
    if (this.props.auth.authenticated) {
      this.props.history.push("/verify-account");
    }
  }
  nextStage = values => {
    console.log("wizard submit", values);
    this.setState(prevState => {
      return { stage: prevState.stage + 1 };
    });
  };
  createOrganization = values => {
    let payload = values;
    payload.name = values.firstname + " " + values.lastname;
    delete payload.firstname;
    delete payload.lastname;
    delete payload.confirmPassword;
    delete payload.policy;
    this.props.dispatchCreateOrganization(payload);
  };

  joinOrganization = values => {
    let payload = values;
    payload.name = values.firstname + " " + values.lastname;
    delete payload.firstname;
    delete payload.lastname;
    delete payload.confirmPassword;
    delete payload.policy;
    this.props.dispatchJoinOrganization(payload);
  };
  render() {
    return (
      <Page>
        <Panel>
          {this.state.stage === 1 && <ContactForm onSubmit={this.nextStage} />}
          {this.state.stage === 2 && (
            <CompleteSignup
              createOrganization={this.createOrganization}
              joinOrganization={this.joinOrganization}
            />
          )}
        </Panel>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  dispatchCreateOrganization: payload =>
    dispatch(initCreateOrganization(payload)),
  dispatchJoinOrganization: payload => dispatch(initJoinOrganization(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
