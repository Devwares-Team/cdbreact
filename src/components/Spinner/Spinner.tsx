import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Component, Circle } from "./Spinner.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  className: string,
  tag: string,
  size: string,
  success: boolean,
  secondary: boolean,
  dark: boolean,
  danger: boolean,
  info: boolean,
  warning: boolean,
  color: any,
  multicolor: any
}

const Spinner = (props: Props) => {
  const {
    color,
    tag,
    size,
    className,
    secondary,
    info,
    success,
    warning,
    danger,
    dark,
    multicolor,
    ...attributes
  } = props;
  const spinnerClasses = classNames("spinner", className);
  const sizeValue =
    size === "big" ? "100px" : size === "small" ? "30px" : "65px";
  let spinnerComponent = (
    <ThemeProvider theme={theme}>
      <Component
        className={spinnerClasses}
        as={tag}
        size={size}
        {...attributes}
        width={sizeValue}
        height={sizeValue}
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle
          fill="none"
          stroke-width="6"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="30"
          danger={danger}
          success={success}
          info={info}
          secondary={secondary}
          dark={dark}
          warning={warning}
          multicolor={multicolor}
        ></Circle>
      </Component>
    </ThemeProvider>
  );
  return spinnerComponent;
};

Spinner.defaultProps = {
  tag: "svg",
};

Spinner.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
  size: PropTypes.string,
  success: PropTypes.bool,
  secondary: PropTypes.bool,
  dark: PropTypes.bool,
  danger: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
};

export default Spinner;
export { Spinner as CDBSpinner };
