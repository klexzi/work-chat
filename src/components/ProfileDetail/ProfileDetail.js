import React from "react";
import PropTypes from "prop-types";

import VintageTelephoneSvg from "../../assets/vintage-telephone.svg";
import EmailSvg from "../../assets/email.svg";
const ProfileDetail = ({ uiFor, data }) => {
  let svg = uiFor === "phone" ? VintageTelephoneSvg : EmailSvg;
  return (
    <div className="row p-0 pt-2">
      <div className="col-2">
        <i className="info-text">
          <img src={svg} alt="telephone svg" />
        </i>
      </div>
      <div className="col-10 pt-1 h6 text-truncate">{data}</div>
    </div>
  );
};

ProfileDetail.propTypes = {
  uiFor: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired
};

export default ProfileDetail;
