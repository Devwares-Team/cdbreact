import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { Component, Button } from "./Alert.style";


type colors ="primary"|
   "secondary"|
   "success"|
   "danger"|
  "warning"|
   "info"|
   "dark"|
   "light"


 interface Props{
  className ?: string,
  color?:  colors,
  onClose ?: Function,
  onClosed ?: Function,
  tag ?: string,
  children ?: React.ReactNode,
  dismiss ?: boolean
  style?: React.CSSProperties
 }



const Alert = (props: Props) => {
  const { className, tag, color, children, dismiss, ...attributes } = props;

  const alertClasses = classNames("alert", className);

  const close = (e: any) => {
    e.target.parentNode.remove();
  }

  let alertComponent = (
    <ThemeProvider theme={theme}>
    <Component {...attributes} className={alertClasses} role="alert" as={(tag as unknown) as undefined} colors={color} >
      {children}
      { dismiss ? 
        <Button onClick={close} >&times;</Button>
        :
        null
      }
    </Component>
    </ThemeProvider>
  );

  return alertComponent;
};

Alert.defaultProps = {
  color: "primary",
  tag: "div",
};

Alert.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light"
  ]),
  onClose: PropTypes.func,
  onClosed: PropTypes.func,
  tag: PropTypes.string,
  dismiss: PropTypes.bool
};

export default Alert;
export { Alert as CDBAlert };
