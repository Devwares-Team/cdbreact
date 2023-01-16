import React, { useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Reference } from "react-popper";
import { Component, Caret } from "./DropDownToggle.style";
import { DropDownContext } from "../DropDownContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props {
  className: string,
  color: string
  disabled: [Function, any]
  dropleft: boolean,
  dropright: boolean,
  dropup: boolean,
  dropdown: boolean,
  position: string,
  children: React.ReactNode,
  caret: boolean,
  size: string,
  nav: boolean,
  tag: [Function, string],
  onClick: Function,
  isOpen: Function,
  circle: [string, Function]
}

const DropdownToggle = (props: Props) => {
  const { isOpen } = useContext<any>(DropDownContext);
  const [isOpenValue, setIsOpenValue] = isOpen;

  const {
    className,
    tag,
    color,
    children,
    caret,
    nav,
    size,
    disabled,
    circle,
    dropleft,
    dropright,
    dropup,
    dropdown,
    ...attributes
  } = props;
  const dropdownToggleClasses = classNames(
    {
      "nav-link": nav,
    },
    className
  );
  const toggleDropdown = (e) => {
    const { disabled, nav, tag, onClick } = props;

    if (disabled) {
      return;
    }

    if (nav && !tag) {
      return;
    }

    if (onClick) {
      onClick(e);
    }

    setIsOpenValue(!isOpenValue);
  };
  const caretClasses = classNames(
    dropleft && "mr-3",
    dropright || dropdown || dropup ? "ml-3" : "",
    className
  );
  const CaretIcon = caret ? (
    <Caret
      className={caretClasses}
      dropleft={dropleft}
      dropright={dropright}
      dropdown={dropdown}
      dropup={dropup}
      {...attributes}
    >
      <span className="pro-arrow-wrapper">
        <span className="pro-arrow" />
      </span>
    </Caret>
  ) : null;

  let dropdownToggleComponent = (
    <ThemeProvider theme={theme}>
      <Reference>
        {({ ref }) => (
          <Component
            className={dropdownToggleClasses}
            ref={ref}
            as={tag}
            colors={color}
            size={size}
            disabled={disabled}
            circle={circle}
            onClick={(e) => {
              toggleDropdown(e);
            }}
          >
            {dropleft && CaretIcon}
            {children}
            {dropright || dropdown || dropup ? CaretIcon : null}
          </Component>
        )}
      </Reference>
    </ThemeProvider>
  );

  return dropdownToggleComponent;
};

DropdownToggle.defaultProps = {
  "aria-haspopup": true,
  color: "primary",
  tag: "button",
};

DropdownToggle.propTypes = {
  className: PropTypes.string,
  colors: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ]),

  dropleft: PropTypes.bool,
  dropright: PropTypes.bool,
  dropup: PropTypes.bool,
  dropdown: PropTypes.bool,
  position: PropTypes.string,
  children: PropTypes.node,
  caret: PropTypes.bool,
  size: PropTypes.string,
  nav: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default DropdownToggle;
export { DropdownToggle as CDBDropdownToggle };
