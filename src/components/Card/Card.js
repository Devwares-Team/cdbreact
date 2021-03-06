import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Card.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

const Card = (props) => {
  const { className, tag, color, border, ...attributes } = props;

  const classes = classNames(color, className);

  return (
    <ThemeProvider theme={theme}>
      <Component
        data-test="card"
        as={tag}
        {...attributes}
        className={classes}
        border={border}
      />
    </ThemeProvider>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.string,
  border: PropTypes.bool,
};

Card.defaultProps = {
  tag: "div",
  border: false,
};

export default Card;
export { Card as CDBCard };
