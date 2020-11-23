/* eslint-disable react/no-array-index-key */
import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import { MenuNav, MenuUl } from "./SidebarMenu.style";
import { SidebarContext } from '../Sidebar';
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";


const SidebarMenu = forwardRef(
  ({ children, className, popperArrow, ...rest }, ref) => {
    const menuRef = ref ? ref : React.createRef();

    const { textColor, backgroundColor } = useContext(SidebarContext);

          
    return (
      <ThemeProvider theme={theme}>
        <MenuNav
          {...rest}
          ref={menuRef}
          className={classNames( "pro-menu", className)}
        >
          <MenuUl
          textColor={textColor}
          backgroundColor={backgroundColor}>
            {React.Children.map(children, child =>
              React.cloneElement(child, {
                firstchild: 1,
                popperarrow: popperArrow === true ? 1 : 0
              })
            )}
          </MenuUl>
        </MenuNav>
      </ThemeProvider>
    );
  }
);


SidebarMenu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    popperArrow: PropTypes.bool
}

export default SidebarMenu;

export { SidebarMenu as CDBSidebarMenu };