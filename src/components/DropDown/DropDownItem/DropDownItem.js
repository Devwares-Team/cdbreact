import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { omit } from "../../utils";
import { Component } from "./DropDownItem.style";
import { DropDownContext } from "../DropDownContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";

const DropDownItem = (props) => {
  const { isOpen } = useContext(DropDownContext);
  const [isOpenValue, setIsOpenValue] = isOpen;
  const {
    disabled,
    className,
    header,
    divider,
    onClick,
    toggle,
    href,
    active,
    tag,
    ...attrs
  } = omit(props, ["toggle"]);

  const dropDownItemClasses = classNames(
    {
      active,
      disabled,
      "dropdown-item": !divider && !header,
      "dropdown-header": header,
      "dropdown-divider": divider,
    },
    className
  );
  useEffect(() => {
    const { header, divider, href } = props;
    const tagType = header ? "h6" : divider ? "div" : href ? "a" : "button";
    attrs.tagType = tagType;
  });

  const toggleDropDown = (e) => {
    if (disabled || header || divider) {
      return;
    }

    if (onClick) {
      onClick(e);
    }
    setIsOpenValue(!isOpenValue);
  };

  const getTabIndex = () => {
    if (disabled || header || divider) {
      return "-1";
    }
    return "0";
  };

  const tabIndex = getTabIndex();
  let dropDownItemComponent = (
    <ThemeProvider theme={theme}>
      <Component
        data-test="dropdown-item"
        type={attrs.tagType}
        {...attrs}
        tabIndex={tabIndex}
        className={dropDownItemClasses}
        onClick={toggleDropDown}
        href={href}
        disabled={disabled}
        header={header}
        divider={divider}
      />
    </ThemeProvider>
  );

  return dropDownItemComponent;
};

DropDownItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  header: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.bool,
};

DropDownItem.defaultProps = {
  tag: "button",
  toggle: true,
};

export default DropDownItem;
export { DropDownItem as CDBDropDownItem };
