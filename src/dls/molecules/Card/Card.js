import React from "react";
import { CardContainer } from "./Card.styled";
import PropTypes from "prop-types";
import { Image, Text, Button } from "../../atoms/index";

const Card = ({ src, alt, textContent, varient, buttonText }) => {
  return (
    <React.Fragment>
      <CardContainer>
        <Image src={src} alt={alt} />
        <Text textContent={textContent} />
        <Button varient={varient} buttonText={buttonText} />
      </CardContainer>
    </React.Fragment>
  );
};

Card.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  textContent: PropTypes.string,
  varient: PropTypes.string,
  buttonText: PropTypes.string
};

export default Card;
