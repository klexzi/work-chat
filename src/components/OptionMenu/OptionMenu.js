import React from "react";

const OptionMenu = () => {
  return (
    <div className="dropdownmenu shadow" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="#">
        View Profile
      </a>
      <a className="dropdown-item" href="#">
        Logout
      </a>
    </div>
  );
};

export default OptionMenu;
