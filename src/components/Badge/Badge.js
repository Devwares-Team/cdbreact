import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Component } from "./Badge.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

const Badge = (props) => {
  const { className, tag, color, children, borderType, size, flat, ...attributes } = props;

  const badgeClasses = classNames("badge", className);

  let badgeComponent = (
    <ThemeProvider theme={theme}>
      <Component
        className={badgeClasses}
        role="badge"
        as={tag}
        colors={color}
        borderType={borderType}
        size={size}
        flat={flat}
        {...attributes}
      >
        {children}
      </Component>
    </ThemeProvider>
  );

  return badgeComponent;
};

Badge.defaultProps = {
  tag: "span",
  color: "primary",
  borderType: "box",
  size: "medium",
};

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  flat: PropTypes.bool,
  size: PropTypes.string,
  borderType: PropTypes.string,
  colors: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ]),
  tag: PropTypes.string,
};

export default Badge;
export { Badge as CDBBadge };
