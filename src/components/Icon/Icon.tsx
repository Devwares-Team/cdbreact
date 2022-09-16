import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Icon.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  icon: string,
  border: boolean,
  brand: boolean,
  className: string,
  fab: boolean,
  fal: boolean,
  far: boolean,
  fixed: boolean,
  flip: string,
  inverse: boolean,
  light: boolean,
  list: boolean,
  pull: string,
  pulse:boolean,
  regular:boolean,
  rotate: boolean,
  size: string,
  spin: boolean,
  stack: string
  duotone : any,
  fas : any,
  solid: any,
  fad : any
}

const Icon = (props: Props) => {
  const {
    border,
    brand,
    className,
    fab,
    duotone,
    fal,
    fad,
    far,
    solid,
    fixed,
    fas,
    flip,
    icon,
    inverse,
    light,
    list,
    pull,
    pulse,
    regular,
    rotate,
    size,
    spin,
    stack,
    ...attributes
  } = props;

  const iconPrefix =
    regular || far
      ? "far"
      : solid || fas
      ? "fas"
      : light || fal
      ? "fal"
      : duotone || fad
      ? "fad"
      : brand || fab
      ? "fab"
      : "fa";

  const classes = classNames(
    iconPrefix,
    list ? "fa-li" : false,
    icon ? `fa-${icon}` : false,
    size ? `fa-${size}` : false,
    fixed ? "fa-fw" : false,
    pull ? `fa-pull-${pull}` : false,
    border ? "fa-border" : false,
    spin ? "fa-spin" : false,
    pulse ? "fa-pulse" : false,
    rotate ? `fa-rotate-${rotate}` : false,
    flip ? `fa-flip-${flip}` : false,
    inverse ? "fa-inverse" : false,
    stack ? `fa-${stack}` : false,
    className
  );

  return (
    <ThemeProvider theme={theme}>
      <Component data-test="fa" {...attributes} className={classes}  />
    </ThemeProvider>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  border: PropTypes.bool,
  brand: PropTypes.bool,
  className: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  fixed: PropTypes.bool,
  flip: PropTypes.string,
  inverse: PropTypes.bool,
  light: PropTypes.bool,
  list: PropTypes.bool,
  pull: PropTypes.string,
  pulse: PropTypes.bool,
  regular: PropTypes.bool,
  rotate: PropTypes.string,
  size: PropTypes.string,
  spin: PropTypes.bool,
  stack: PropTypes.string
};

Icon.defaultProps = {
  border: false,
  brand: false,
  className: "",
  fab: false,
  fal: false,
  far: false,
  fixed: false,
  flip: "",
  inverse: false,
  light: false,
  list: false,
  pull: "",
  pulse: false,
  regular: false,
  rotate: "",
  size: "",
  spin: false,
  stack: ""
};

export default Icon;
export { Icon as CDBIcon };
