import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component, Container } from "./Progress.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

const Progress = (props) => {
  const {
    tag,
    children,
    className,
    color,
    max,
    min,
    height,
    value,
    text,
    wrapperStyle,
    barClassName,
    ...attributes
  } = props;
  const percent = ((value - min) / (max - min)) * 100;

  const progressClasses = classNames("progress", className);

  const progressBarClasses = classNames("progress-bar", barClassName);

  const computedHeight = height || (children && "1rem");

  const computedWrapperStyle = { ...wrapperStyle, height: computedHeight };

  const progressComponent = (
    <ThemeProvider theme={theme}>
      <Container {...attributes}>
        <div className="progress-text">{text}</div>
        <Component
          as={tag}
          data-test="progress"
          {...attributes}
          className={progressClasses}
          style={computedWrapperStyle}
        >
          <div
            className={progressBarClasses}
            style={{ width: `${percent}%`, height: computedHeight }}
            colors={color}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
          >
            {children}
          </div>
        </Component>
      </Container>
    </ThemeProvider>
  );
  return progressComponent;
};

Progress.propTypes = {
  barClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  colors: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ]),

  height: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  wrapperStyle: PropTypes.object,
};

Progress.defaultProps = {
  tag: "div",
  barClassName: "",
  className: "",
  colors: "dark",
  height: 10,
  max: 100,
  min: 0,
  value: 0,
  wrapperStyle: {},
  text: "",
};

export default Progress;
export { Progress as CDBProgress };
