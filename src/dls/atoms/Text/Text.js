import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from "./Text.styled";

const Text = ({ textSize, textContent, textFamily }) => {
  return (
    <React.Fragment>
      <Paragraph textFamily={textFamily} textSize={textSize}>
        {textContent}
      </Paragraph>
    </React.Fragment>
  );
};

Text.propTypes = {
  textSize: PropTypes.string,
  textFamily: PropTypes.string,
  textContent: PropTypes.string
};

export default Text;
