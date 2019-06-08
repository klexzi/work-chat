import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { initLogin } from "../../store/actions/auth";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import xhrLoader from "../../assets/xhr-loader.gif";

let LoginForm = props => {
  return (
    <React.Fragment>
      <h4 className="text-center mt-2 mt-md-0 mb-3 mb-md-5">WorkChat Login</h4>
      <form onSubmit={props.handleSubmit(props.login)}>
        <div className="mb-4">
          <Field
            component={Input}
            name="email"
            type="email"
            label="Email"
            notification={false}
          />
        </div>
        <div className="mb-4">
          <Field
            component={Input}
            name="password"
            type="password"
            label="Password"
            notification={false}
          />
        </div>

        <Button
          classes="btn primary-bg text-white btn-block rounded-pill btn-lg mt-5 mb-2"
          disabled={props.auth.processing}
        >
          Login
          {props.auth.processing ? (
            <span>
              <img src={xhrLoader} alt="xhrLoader" className="img-fluid" />
            </span>
          ) : null}
        </Button>
        <div className="d-flex">
          <Link to="/signup" className="small link-item pull-left">
            Create Account
          </Link>
          <Link
            to="/forgot-password"
            className="small link-item pull-right ml-auto"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </React.Fragment>
  );
};
const validate = values => {
  let errors = {};
  if (!values.email) {
    errors.email = "required";
  }
  if (!values.password) {
    errors.password = "required";
  }
  return errors;
};

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => ({
  login: payload => {
    dispatch(initLogin(payload));
  }
});

LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
export default reduxForm({
  form: "loginForm", // a unique identifier for this form
  validate // <--- validation function given to redux-form
  //warn // <--- warning function given to redux-form
})(LoginForm);
