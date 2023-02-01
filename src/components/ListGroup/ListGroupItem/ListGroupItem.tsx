import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./ListGroupItem.style";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props{
  active?: boolean,
  children?: React.ReactNode,
  className?: string,
  color?: string
  disabled?: boolean,
  hover?: boolean,
  info?: any,
  to?: string,
  href?: any;
  tag?: [Function, string],
}

const ListGroupItem = (props: Props) => {
  let {
    active,
    children,
    className,
    color,
    disabled,
    hover,
    info,
    to,
    tag,
    href,
    ...attributes
  } = props;

  const classes = classNames(
    "list-group-item",
    className,
    active && `active`,
    disabled,
    color && `list-group-item-${color}`,
    hover && "list-group-item-action"
  );

  let listGroupItemComponent = href ? (
    <Link
      data-test="list-group-item"
      {...attributes}
      className={classes}
      colors={color}
      href={href}
      style={{ textDecoration: "none" }}
    >
      {children}
    </Link>
  ) : (
    <Component
      data-test="list-group-item"
      {...attributes}
      className={classes}
      // colors={color}
    >
      {children}
    </Component>
  );
  return (
    <ThemeProvider theme={theme}>
      {listGroupItemComponent}
    </ThemeProvider>
  );
};

ListGroupItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "white",
  ]),
  disabled: PropTypes.bool,
  hover: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ListGroupItem.defaultProps = {
  tag: "li",
};

export default ListGroupItem;
export { ListGroupItem as CDBListGroupItem };
