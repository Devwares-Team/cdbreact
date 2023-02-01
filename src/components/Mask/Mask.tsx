import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Mask.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  children?: React.ReactNode,
  className?: string,
  overlay?: string,
  pattern?: [string, number],
  tag?: string,
}

const Mask = (props: Props) => {
  const { children, className, overlay, pattern, tag, ...attributes } = props;

  const maskClasses = classNames(className);
  let maskComponent = (
    <ThemeProvider theme={theme}>
      <Component
        as={(tag as unknown) as undefined}
        data-test="mask"
        {...attributes}
        pattern={pattern}
        overlay={overlay}
        className={maskClasses}
      >
        {children}
      </Component>
    </ThemeProvider>
  );
  return maskComponent;
};

Mask.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  overlay: PropTypes.string,
  pattern: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.string,
};

Mask.defaultProps = {
  className: "",
  overlay: "",
  pattern: "",
  tag: "div",
};

export default Mask;
export { Mask as CDBMask };
