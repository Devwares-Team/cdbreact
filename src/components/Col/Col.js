import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Col.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

const Col = (props) => {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    top,
    bottom,
    middle,
    size,
    children,
    className,
    tag,
    ...attributes
  } = props;

  const colClasses = classNames(
    size && `col-${size}`,
    xs && `col-xs-${xs}`,
    sm && `col-sm-${sm}`,
    md && `col-md-${md}`,
    lg && `col-lg-${lg}`,
    xl && `col-xl-${xl}`,
    !size && !xs && !sm && !md && !lg && !xl ? "col" : "",
    top && "align-self-start",
    middle && "align-self-center",
    bottom && "align-self-end",
    className
  );
  let colComponent = (
    <ThemeProvider theme={theme}>
      <Component data-test="col" {...attributes} className={colClasses}>
        {children}
      </Component>
    </ThemeProvider>
  );

  return colComponent;
};

Col.propTypes = {
  bottom: PropTypes.bool,
  className: PropTypes.string,
  lg: PropTypes.string,
  md: PropTypes.string,
  middle: PropTypes.bool,
  size: PropTypes.string,
  sm: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
  xl: PropTypes.string,
  xs: PropTypes.string,
};

Col.defaultProps = {
  tag: "div",
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
};

export default Col;
export { Col as CDBCol };
