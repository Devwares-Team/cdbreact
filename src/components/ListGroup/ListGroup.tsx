import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./ListGroup.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props {
  children?: React.ReactNode,
  className?: string,
  tag?: Function | string,
  style?: React.CSSProperties
}

const ListGroup = (props: Props) => {
  const { children, className, tag, style, ...attributes } = props;

  const classes = classNames("list-group", className);
  let listGroupComponent = (
    <ThemeProvider theme={theme}>
      <Component data-test="list-group"style={style} {...attributes} className={classes}>
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
