import React from "react";
import PropTypes from "prop-types";
import { BasicImage } from "./Image.styled";

const Image = ({ src, alt, height }) => {
  return (
    <React.Fragment>
      <BasicImage src={src} alt={alt} height={height} />
    </React.Fragment>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string
};

export default Image;
