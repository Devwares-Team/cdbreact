import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Card.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  className?: string,
  color?: string,
  tag?: string,
  border?: boolean,
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Card = (props: Props) => {
  const { className, tag, color, border, ...attributes } = props;

  const classes = classNames(color, className);

  return (
    <ThemeProvider theme={theme}>
      <Component
        data-test="card"
        as={(tag as unknown) as undefined} 
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
  children: PropTypes.node
};

Card.defaultProps = {
  tag: "div",
  border: false,
};

export default Card;
export { Card as CDBCard };
