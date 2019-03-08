import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "../../ui/Button/Button";
export class VerificationCodeForm extends Component {
  state = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    codeNumber: ""
  };
  static propTypes = {
    uiFor: PropTypes.string.isRequired
  };

  input1Ref = React.createRef();
  input2Ref = React.createRef();
  input3Ref = React.createRef();
  input4Ref = React.createRef();
  input5Ref = React.createRef();
  input6Ref = React.createRef();

  componentDidMount() {
    this.input1Ref.current.focus();
  }
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.codeNumber);
    this.props.handleSubmit(this.state.codeNumber);
  };
  handleChange = event => {
    let { id, value } = event.target;
    if (isNaN(value)) return;
    if (value < 0 || value > 9) return;
    let obj = {};
    obj[id] = value;
    this.setState(prevState => {
      return { ...obj, codeNumber: prevState.codeNumber + value };
    });
    this.focusNextInput(id);
  };
  focusNextInput = currentInput => {
    switch (currentInput) {
      case "input1":
        return this.input2Ref.current.focus();
      case "input2":
        return this.input3Ref.current.focus();
      case "input3":
        return this.input4Ref.current.focus();
      case "input4":
        return this.input5Ref.current.focus();
      case "input5":
        return this.input6Ref.current.focus();
      default:
        return;
    }
  };
  render() {
    let title;
    let subTitle;
    let linkName;

    if (this.props.uiFor === "reset-password") {
      title = "Reset Code";
      subTitle = "Enter the reset code sent to your email";
      linkName = "reset code";
    } else {
      title = "Verify Account";
      subTitle = "Enter the verification code sent to your email";
      linkName = "verification code";
    }
    return (
      <div className={" col-md-5 p-md-2 ml-4 ml-md-0 text-center"}>
        <h2 className="mb-4"> {title}</h2>

        <p className="text-capitalize mb-4">{subTitle}</p>
        <form autoComplete="off" onSubmit={this.onSubmit}>
          <div className="row justify-content-center">
            <input
              ref={this.input1Ref}
              onChange={this.handleChange}
              id="input1"
              value={this.state.input1}
              className="col- code-input mr-1 mr-md-2 form-control form-control-lg"
              type="text"
            />
            <input
              ref={this.input2Ref}
              onChange={this.handleChange}
              id="input2"
              value={this.state.input2}
              className="col- code-input mr-1 mr-md-2 form-control form-control-lg"
              type="text"
            />
            <input
              ref={this.input3Ref}
              onChange={this.handleChange}
              id="input3"
              value={this.state.input3}
              className="col- code-input mr-1 mr-md-2 form-control form-control-lg"
              type="text"
            />
            <input
              ref={this.input4Ref}
              onChange={this.handleChange}
              id="input4"
              value={this.state.input4}
              className="col- code-input mr-1 mr-md-2 form-control form-control-lg"
              type="text"
            />
            <input
              ref={this.input5Ref}
              onChange={this.handleChange}
              id="input5"
              value={this.state.input5}
              className="col- code-input mr-1 mr-md-2 form-control form-control-lg"
              type="text"
            />
            <input
              ref={this.input6Ref}
              onChange={this.handleChange}
              id="input6"
              value={this.state.input6}
              className="col- code-input form-control form-control-lg"
              type="text"
            />
          </div>

          <Button classes="btn primary-bg text-white btn-block rounded-pill btn-md-lg mt-3 mb-2">
            Proceed <i className="ml-3 fas fa-arrow-right" />
          </Button>
        </form>
        <div className="mt-4 small text-center">
          {`Didn't get the ${linkName}`}?
          <Link to="/login" className="mock-link text-info">
            &nbsp; Resend Code
          </Link>
        </div>
      </div>
    );
  }
}

export default VerificationCodeForm;
