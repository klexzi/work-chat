import React, { Component } from "react";

import Frag from "../../hoc/Frag/Frag";
import Button from "../../ui/Button/Button";
import chatImg1 from "../../assets/chat-img-1-2x.png";
import bgImg from "../../assets/bg-1-2x.png";
import "./Home.css";
class Home extends Component {
  state = {};
  styles = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "106vw 15vh"
  };
  render() {
    return (
      <div style={this.styles} className="page-home px-3 px-md-0">
        <div className="container mx-auto px-2 py-md-5 py-3">
          <h3 className="display-4">Work Chat</h3>
        </div>
        <div className="row d-flex align-items-center container mx-auto py-md-5 py-2">
          <div className="col-md-5 px-0">
            <h4 className="mb-md-4 mb-1">
              Get Your Organization Communicating
            </h4>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              tortor at auctor urna nunc id cursus. Ultricies integer quis
              auctor elit sed. Sed turpis tincidunt id aliquet risus feugiat in.
              Montes nascetur ridiculus mus mauris vitae ultricies. Ornare arcu
              dui vivamus arcu. Rhoncus aenean vel elit scelerisque mauris
              pellentesque. Ultrices dui sapien eget mi.
            </p>
            <Button classes="btn btn-lg primary-bg text-light my-xs-4">
              Get Started
            </Button>
            <Button classes="btn btn-lg bg-light shadow ml-md-2 text-dark">
              Login
            </Button>
          </div>
          <div className="col-md-5 mx-auto my-4">
            {" "}
            <img src={chatImg1} className="img-fluid d-none d-md-block" />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
