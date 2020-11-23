import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import { InnerMenuItem, InnerMenuLi } from "./SidebarMenuItem.style";
import { SidebarContext } from '../Sidebar';
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";


const SidebarMenuItem = forwardRef(
  (
    {
      children,
      className,
      icon,
      iconClassName,
      active,
      firstchild,
      popperarrow,
      ...rest
    },
    ref
  ) => {
    const menuItemRef = ref ? ref : React.createRef();
    const { toggled } = useContext(SidebarContext);

    return (
      <ThemeProvider theme={theme}>
        <InnerMenuLi
          {...rest}
          ref={menuItemRef}
          className={classNames(className, { active }, { toggled })}
        >
          <InnerMenuItem className={classNames({ active }, { toggled })} tabIndex={0} role="button">
            {icon && (
              <i className={classNames(iconClassName, `fa-${icon}`, "fa", "side-icon")}></i>
            )}
            <span className="item-content">{children}</span>
          </InnerMenuItem>
        </InnerMenuLi>
      </ThemeProvider>
    );
  }
);

SidebarMenuItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  active: PropTypes.bool,
  firstchild: PropTypes.number,
  popperarrow: PropTypes.number
};

export default SidebarMenuItem;

export { SidebarMenuItem as CDBSidebarMenuItem };
