/* eslint-disable react/no-array-index-key */
import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import { MenuNav, MenuUl } from "./SidebarMenu.style";
import { SidebarContext, SidebarContextType } from '../Sidebar';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";


interface Props {
  children: React.ReactNode
  className: string
  popperArrow: boolean
}

const SidebarMenu = forwardRef<HTMLElement, Props>(
  ({ children, className, popperArrow, ...rest }, ref) => {
    const menuRef = ref ? ref : React.createRef<HTMLElement>();
    
    const { textColor, backgroundColor } = useContext<SidebarContextType>(SidebarContext);

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
            {React.Children.map(children, (child : any) =>
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
    className: PropTypes.string.isRequired,
    children: PropTypes.any, // PropTypes.node,
    popperArrow: PropTypes.bool.isRequired
}

export default SidebarMenu;

export { SidebarMenu as CDBSidebarMenu };