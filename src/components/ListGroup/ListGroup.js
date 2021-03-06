import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./ListGroup.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

const ListGroup = (props) => {
  const { children, className, tag, ...attributes } = props;

  const classes = classNames("list-group", className);
  let listGroupComponent = (
    <ThemeProvider theme={theme}>
      <Component data-test="list-group" {...attributes} className={classes}>
        {children}
      </Component>
    </ThemeProvider>
  );
  return listGroupComponent;
};

ListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ListGroup.defaultProps = {
  tag: "ul",
};

export default ListGroup;
export { ListGroup as CDBListGroup };
