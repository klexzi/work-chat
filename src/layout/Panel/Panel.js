import React from "react";

import "./Panel.scss";
const Panel = props => {
  return (
    <div className="panel col-md-9 bg-white p-2 p-md-5 shadow d-flex row align-items-center ">
      {props.children}
    </div>
  );
};

export default Panel;
