import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const SharedFile = ({ imageUrl, fileName, name, date }) => {
  return (
    <div className="row container-fluid mt-3">
      <div className="col-3">
        <img src={imageUrl} className="img-fluid rounded" alt="shared file" />
      </div>
      <div className="col-9">
        <b className="h6 small font-weight-bold info-text">{fileName}</b>
        <p className="small font-weight-light mt-2">
          {name}
          <span className="float-right">{moment(date).format("LT")}</span>
        </p>
      </div>
    </div>
  );
};

SharedFile.propTypes = {};

export default SharedFile;
