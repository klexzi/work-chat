import React from "react";
import PropTypes from "prop-types";
import Faker from "faker";

import Overlay from "../../ui/Overlay/Overlay";
import "./ImageViewer.scss";

const ImageViewer = props => {
  //TODO: image should be gotten from redux
  let image = Faker.random.image();
  return (
    <Overlay>
      <div className="image-viewer">
        <img className="img-fluid" src={image} alt="view" />
        <div className="close">
          <i className="fas fa-times" />
        </div>
      </div>
    </Overlay>
  );
};

ImageViewer.propTypes = {
  image: PropTypes.string
};

export default ImageViewer;
