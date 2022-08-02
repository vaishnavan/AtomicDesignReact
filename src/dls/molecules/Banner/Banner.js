import React from "react";
import { BannerContainer } from "./Banner.styled";
import { Image } from "../../atoms";
import PropTypes from "prop-types";

const Banner = ({ src, alt, height }) => {
  return (
    <BannerContainer>
      <Image src={src} alt={alt} height={height} />
    </BannerContainer>
  );
};

Banner.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string
};

export default Banner;
