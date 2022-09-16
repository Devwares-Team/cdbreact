import React from "react";
import classNames from "classnames";
import { Component } from "./View.style";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  children: React.ReactNode,
  className: string,
  fixed: boolean,
  hover: boolean,
  rounded: boolean,
  src: string,
  tag: string,
  waves: any,
}

const View = (props: Props) => {
  const {
    children,
    className,
    fixed,
    hover,
    rounded,
    src,
    tag,
    waves,
    ...attributes
  } = props;

  const viewClasses = classNames(
    "view",
    className,
    rounded && "rounded",
    waves ? "Ripple-parent" : false
  );

  const viewStyle = src
    ? {
        backgroundAttachment: fixed ? "fixed" : null,
        backgroundImage: `url("${src}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }
    : {};

  return (
    <ThemeProvider theme={theme}>
      <Component
        as={tag}
        {...attributes}
        className={viewClasses}
        data-test="view"
        style={viewStyle}
      >
        {children}
      </Component>
    </ThemeProvider>
  );
};

View.defaultProps = {
  className: "",
  hover: false,
  rounded: false,
  src: "",
  tag: "div",
};

View.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  rounded: PropTypes.bool,
  src: PropTypes.string,
  tag: PropTypes.string,
};

export default View;
export { View as CDBView };
