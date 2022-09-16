import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Jumbotron.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  children: React.ReactNode,
  className: string,
  fluid: boolean,
}

const Jumbotron = (props: Props) => {
  const { className, children, fluid, ...attributes } = props;

  const jumbotronClasses = classNames(
    "jumbotron",
    fluid ? "jumbotron-fluid" : false,
    className
  );
  let jumbotronComponent = (
    <ThemeProvider theme={theme}>
      <Component
        data-test="jumbotron"
        {...attributes}
        className={jumbotronClasses}
      >
        {children}
      </Component>
    </ThemeProvider>
  );
  return jumbotronComponent;
};

Jumbotron.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool,
};

export default Jumbotron;
export { Jumbotron as CDBJumbotron };
