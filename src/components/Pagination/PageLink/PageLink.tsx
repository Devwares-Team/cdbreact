import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./PageLink.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props {
  children: React.ReactNode,
  disabled: boolean,
  className: string,
  tag: [Function, string],
  onClick: Function
}

const PageLink = (props: Props) => {
  const { children, className, onClick, tag, disabled, ...attributes } = props;

  const pageLinkClasses = classNames({ disabled }, "page-link", className);

  let pageLinkComponent = (
    <ThemeProvider theme={theme}>
      <Component
        as={tag}
        data-test="page-link"
        {...attributes}
        className={pageLinkClasses}
      >
        {children}
      </Component>
    </ThemeProvider>
  );

  return pageLinkComponent;
};

PageLink.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

PageLink.defaultProps = {
  tag: "a",
  disabled: false,
};

export default PageLink;
export { PageLink as CDBPageLink };
