import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Container.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

const Container = (props) => {
  const { className, fluid, size, tag, children, ...attributes } = props;

  const containerClasses = classNames(
    fluid ? "container-fluid" : size ? `container-${size}` : "container",
    className
  );
  let containerComponent = (
    <ThemeProvider theme={theme}>
      <Component
        as={tag}
        data-test="container"
        {...attributes}
        className={containerClasses}
      >
        {children}
      </Component>
    </ThemeProvider>
  );
  return containerComponent;
};

Container.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Container.defaultProps = {
  tag: "div",
  fluid: false,
};

export default Container;
export { Container as CDBContainer };
