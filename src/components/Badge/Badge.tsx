import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Component } from "./Badge.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props {
  children?: React.ReactNode,
  className ?: string,
  flat ?: boolean,
  size ?: string,
  borderType ?: string,
  color ?:  "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "dark"
  | "light",
  tag ?: string,
  icon ?: any;
  intensity ?:  50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  style?:  React.CSSProperties | any,
}

const Badge = (props: Props) => {
  const {
    className,
    tag,
    color,
    intensity,
    children,
    icon,
    borderType,
    size,
    flat,
    
    ...attributes
  } = props;
  const badgeClasses = classNames(className);
  // const _color = `${color}${intensity.toString()}`;
  const badgeComponent = (
    <ThemeProvider theme={theme}>
      <Component
        className={badgeClasses}
        role="badge"
        as={(tag as unknown) as undefined}
        colors={color}
        borderType={borderType}
        size={size}
        flat={flat}
        {...attributes}
      >
        {icon && (
          <span className="icon">
            <i className={`fa fa-${icon}`} />
          </span>
        )}

        {children}
      </Component>
    </ThemeProvider>
  );

  return badgeComponent;
};

Badge.defaultProps = {
  tag: "span",
  color: "primary",
  borderType: "",
  size: "medium",
  intensity: "900",
};

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  flat: PropTypes.bool,
  size: PropTypes.string,
  borderType: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.string,
  intensity: PropTypes.oneOfType([PropTypes.oneOf([50, 100, 200, 300, 400, 500, 600, 700, 800, 900]), PropTypes.string])
};

export default Badge;
export { Badge as CDBBadge };
