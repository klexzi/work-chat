import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import JoinOrganization from "../JoinOrganization/JoinOrganization";
import CreateOrganization from "../CreateOrganization/CreateOrganization";

class CompleteSignup extends Component {
  state = { joinOrganization: true, createOrganization: false };
  switchState = () => {
    this.setState({
      createOrganization: !this.state.createOrganization,
      joinOrganization: !this.state.joinOrganization
    });
  };
  animationTime = {
    enter: 300,
    exit: 500
  };
  render() {
    return (
      <div className="container-fluid row justify-content-center p-0">
        <Transition
          in={this.state.joinOrganization}
          timeout={this.animationTime}
          mountOnEnter
          unmountOnExit
        >
          {state => {
            return (
              <JoinOrganization
                switchState={this.switchState}
                onSubmit={this.props.onSubmit}
                transitionState={state}
              />
            );
          }}
        </Transition>
        <Transition
          in={this.state.createOrganization}
          timeout={this.animationTime}
          mountOnEnter
          unmountOnExit
        >
          {state => {
            return (
              <CreateOrganization
                switchState={this.switchState}
                onSubmit={this.props.onSubmit}
                transitionState={state}
              />
            );
          }}
        </Transition>
      </div>
    );
  }
}

export default CompleteSignup;
