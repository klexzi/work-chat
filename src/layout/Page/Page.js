import React from "react";

const Page = props => {
  return (
    <div className="primary-bg container-fluid page">
      <div className="h-100 d-flex row align-items-center justify-content-center">
        {props.children}
      </div>
    </div>
  );
};

export default Page;
