import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../../ui/Button/Button";
import xhrLoader from "../../assets/xhr-loader.gif";
export class VerificationCodeForm extends Component {
  state = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    codeLength: 0
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
    let { input1, input2, input3, input4, input5, input6 } = this.state;
    let code = input1 + input2 + input3 + input4 + input5 + input6;
    console.log(code);
    this.props.handleSubmit(code);
  };
  handleChange = event => {
    let { id, value } = event.target;
    if (isNaN(value) && value !== "") return;
    if (+value < 0 || +value > 9) return;
    let obj = {};
    obj[id] = value;
    this.setState(prevState => {
      return {
        ...obj,
        codeLength:
          value === "" ? prevState.codeLength - 1 : prevState.codeLength + 1
      };
    });
    if (value !== "") this.focusNextInput(id);
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
      <div className={" col-lg-6 col-md-9 p-md-2 ml-4 ml-md-0 text-center"}>
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
              required
            />
            <input
              ref={this.input2Ref}
              onChange={this.handleChange}
              id="input2"
              value={this.state.input2}
              className="col- code-input mr-1 mr-md-2 form-control form-control-lg"
              type="text"
              required
            />
            <input
              ref={this.input3Ref}
              onChange={this.handleChange}
              id="input3"
              value={this.state.input3}
              className="col- code-input mr-1 mr-md-2 form-control form-control-lg"
              type="text"
              required
            />
            <input
              ref={this.input4Ref}
              onChange={this.handleChange}
              id="input4"
              value={this.state.input4}
              className="col- code-input mr-1 mr-md-2 form-control form-control-lg"
              type="text"
              required
            />
            <input
              ref={this.input5Ref}
              onChange={this.handleChange}
              id="input5"
              value={this.state.input5}
              className="col- code-input mr-1 mr-md-2 form-control form-control-lg"
              type="text"
              required
            />
            <input
              ref={this.input6Ref}
              onChange={this.handleChange}
              id="input6"
              value={this.state.input6}
              className="col- code-input form-control form-control-lg"
              type="text"
              required
            />
          </div>

          <Button
            classes={`btn primary-bg text-white btn-block rounded-pill btn-md-lg mt-3 mb-2 ${
              this.state.codeLength < 6 ? " disabled" : ""
            }`}
            disabled={
              this.state.codeLength < 6 || this.props.verifyAccount.processing
            }
          >
            Verify
            {this.props.verifyAccount.processing ? (
              <span>
                <img src={xhrLoader} alt="xhrLoader" className="img-fluid" />
              </span>
            ) : null}
          </Button>
        </form>
        <div className="mt-4 small text-center">
          {`Didn't get the ${linkName}`}?
          <span onClick={this.props.resendCode} className="mock-link text-info">
            &nbsp; Resend Code
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ verifyAccount: state.verifyAccount });

export default connect(mapStateToProps)(VerificationCodeForm);
