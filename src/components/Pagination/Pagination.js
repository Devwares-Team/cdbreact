import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Pagination.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

const Pagination = (props) => {
  const {
    children,
    className,
    color,
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
        as={tag}
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
  tag: "ul",
};

export default Pagination;
export { Pagination as CDBPagination };
