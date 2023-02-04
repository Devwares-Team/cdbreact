import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./ButtonGroup.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
 
  children?: React.ReactNode,
  className?: string,
  role?: string,
  size?: string,
  vertical?: boolean,
  style? : React.CSSProperties
}


const ButtonGroup = (props : Props) => {
 let  {className,
  size,
  vertical,
  children,
  role,
  style,
  ...attributes
} = props 

  const classes = classNames(
    size ? `btn-group-${size}` : false,
    vertical ? "btn-group-vertical" : "btn-group",
    className
  );

  return (
    <ThemeProvider theme={theme}>
      <Component role="group" {...attributes} className={classes} style={style}>
        {children}
      </Component>
    </ThemeProvider>
  );
};

ButtonGroup.propTypes = {
  "aria-label": PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  role: "group",
};

export default ButtonGroup;
export { ButtonGroup as CDBBtnGrp };
