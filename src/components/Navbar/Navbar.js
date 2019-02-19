import React from "react";

const Navbar = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light primary-bg sticky-top">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <a class="navbar-brand" href="#">
          WorkChat
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ml-auto my-2 my-lg-0 mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                ABOUT US
              </a>
            </li>
            <li class="nav-item">
              <a class="scroll nav-link" href="#" data-offset="70">
                FEATURES
              </a>
            </li>
            <li class="nav-item">
              <a class="scroll nav-link" href="#" data-offset="70">
                LOGIN
              </a>
            </li>
            <li class="nav-item">
              <a class="scroll nav-link" href="#" data-offset="70">
                <button className="btn btn-lg">GET STARTED</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
