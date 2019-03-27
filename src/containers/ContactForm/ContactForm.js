import React from "react";
import PropTypes from "prop-types";
import SignupForm from "../../components/SignupForm/SignupForm";
import ChatSVG from "../../components/ChatSVG/ChatSVG";

const ContactForm = props => {
  return (
    <React.Fragment>
      <div className="col-lg-6 d-none d-lg-block">
        <ChatSVG />
      </div>
      <div className="col-lg-6 px-4 px-md-0 py-0">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <SignupForm onSubmit={props.onSubmit} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
export default ContactForm;
