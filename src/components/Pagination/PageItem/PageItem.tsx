import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./PageItem.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props {
  active: boolean,
  children: React.ReactNode,
  className: string,
  disabled: boolean,
  tag: [Function, string],
}

const PageItem = (props: Props) => {
  const { active, className, children, disabled, tag, ...attributes } = props;

  const pageItemClasses = classNames(
    {
      disabled: disabled,
      active: active,
    },
    "page-item",
    className
  );
  let pageItemComponent = (
    <ThemeProvider theme={theme}>
      <Component
        data-test="page-item"
        {...attributes}
        as={tag}
        className={pageItemClasses}
      >
        {children}
      </Component>
    </ThemeProvider>
  );
  return pageItemComponent;
};

PageItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

PageItem.defaultProps = {
  active: false,
  className: "",
  disabled: false,
  tag: "li",
};

export default PageItem;
export { PageItem as CDBPageItem };
