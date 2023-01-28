import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Pagination.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props {
  children?: React.ReactNode,
  circle: boolean,
  className: string,
  colors: string
  size: string,
  tag: [Function, string],
  sm: boolean,
  color: any,
  shape: any
}

const Pagination = (props: Props) => {
  const {
    children,
    className,
    color,
    colors,
    tag,
    shape,
    size,
    sm,
    circle,
    ...attributes
  } = props;

  const paginationClasses = classNames("pagination", className);
  let paginationComponent = (
    <ThemeProvider theme={theme}>
      <Component
        as={(tag as unknown) as undefined}
        data-test="pagination"
        colors={color}
        circle={circle}
        shape={shape}
        size={size}
        sm={sm}
        {...attributes}
        className={paginationClasses}
      >
        {children}
      </Component>
    </ThemeProvider>
  );
  return paginationComponent;
};

Pagination.propTypes = {
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  colors: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "white",
    "dark",
  ]),
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  sm: PropTypes.bool,
};

Pagination.defaultProps = {
  circle: false,
  className: "",
  color: "dark",
  colors: "dark",
  tag: "ul",
  shape: "",
  size: "lg",
  sm: false
};

export default Pagination;
export { Pagination as CDBPagination };
