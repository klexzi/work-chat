import React, { Component } from "react";
import Page from "../../layout/Page/Page";
import Panel from "../../layout/Panel/Panel";
import ContactForm from "../../components/ContactForm/ContactForm";
import CompleteSignup from "../../components/CompleteSignup/CompleteSignup";

export class Signup extends Component {
  state = { stage: 1 };
  static propTypes = {};

  nextStage = values => {
    console.log("wizard submit", values);
    this.setState(prevState => {
      return { stage: prevState.stage + 1 };
    });
  };
  onSubmit = values => {
    console.log("final submit", values);
  };
  render() {
    return (
      <Page>
        <Panel>
          {this.state.stage === 1 && <ContactForm onSubmit={this.nextStage} />}
          {this.state.stage === 2 && (
            <CompleteSignup onSubmit={this.onSubmit} />
          )}
        </Panel>
      </Page>
    );
  }
}

export default Signup;
