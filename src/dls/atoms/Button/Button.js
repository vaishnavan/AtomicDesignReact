import React from "react";
import PropTypes from "prop-types";
import { DefaultButton } from "./Button.styled";

const Button = ({ buttonText, varient, onClick }) => {
  return (
    <React.Fragment>
      <DefaultButton className={varient} onClick={onclick}>
        {buttonText}
      </DefaultButton>
    </React.Fragment>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  varient: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
