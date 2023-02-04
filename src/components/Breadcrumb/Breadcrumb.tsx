import React, { Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Breadcrumb.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";


interface Props{
  bold ?: boolean,
  children ?: React.ReactNode,
  className ?: string,
  light ?: boolean,
  uppercase ?:boolean,
  style?: React.CSSProperties,
  color?: "primary" |"secondary" | "success" | "danger" | "warning" | "info" | "light"| "dark" | "none"
}

const Breadcrumb = (props: Props) => {
  const { className,  bold, color = "primary", ...attributes } = props;

  const classes = classNames("breadcrumb", className);

  let children;

  if (bold) {
    children = props.children && Children.map(props.children, (child : any) => {
      return React.cloneElement(child, {
        bold: true,
      });
    });
  } else {
    children = props.children;
  }

  let breadcrumbComponent = (
    <ThemeProvider theme={theme}>
      <nav data-test="breadcrumb">
        <Component {...attributes} className={classes} colors={color}>
          {children}
        </Component>
      </nav>
    </ThemeProvider>
  );
  return breadcrumbComponent;
};

Breadcrumb.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  light: PropTypes.bool,
  uppercase: PropTypes.bool,
  child : PropTypes.node
};

export default Breadcrumb;
export { Breadcrumb as CDBBreadcrumb };
