import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Manager } from "react-popper";
import { Component } from "./DropDown.style";
import { DropDownProvider } from "./DropDownContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

const DropDown = (props) => {
  const { className, tag, children, dropleft, dropright, dropup, ...attributes } = props;
  const dropdownClasses = classNames("dropdown", className);

  let dropdownComponent = (
    <ThemeProvider theme={theme}>
      <DropDownProvider>
        <Manager>
          <Component
            className={dropdownClasses}
            role="dropdown"
            as={tag}
            dropleft={dropleft}
            dropright={dropright}
            dropup={dropup}
            {...attributes}
          >
            {children}
          </Component>
        </Manager>
      </DropDownProvider>
    </ThemeProvider>
  );

  return dropdownComponent;
};

DropDown.defaultProps = {
  dropleft: false,
  dropright: false,
  dropup: false,
  tag: "span",
};

DropDown.propTypes = {
  className: PropTypes.string,
  dropleft: PropTypes.bool,
  dropright: PropTypes.bool,
  dropup: PropTypes.bool,
  isOpen: PropTypes.bool,
  toogle: PropTypes.func,
  tag: PropTypes.string,
};

export default DropDown;
export { DropDown as CDBDropDown };
