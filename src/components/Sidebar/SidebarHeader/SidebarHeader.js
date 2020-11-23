import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import { SidebarContext } from '../Sidebar';
import { HeaderContainer } from "./SidebarHeader.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";


const SidebarHeader = forwardRef(({ children, prefix, onToggle, className, ...rest }, ref) => {
  const sidebarHeaderRef = ref ? ref : React.createRef();

  const { toggled, handleToggleSidebar } = useContext(SidebarContext);

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer
        {...rest}
        ref={sidebarHeaderRef}
        className={classNames(className)}
      >
        <div className={classNames("head-div", {toggled})}>
          {prefix ? <span className="icon-suffix" onClick={() => handleToggleSidebar(toggled)}>{prefix}</span> : null}
         <span className="head-text">
            {children}
          </span>
    
        </div>
      </HeaderContainer>
    </ThemeProvider>
  );
});

SidebarHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default SidebarHeader;

export { SidebarHeader as CDBSidebarHeader };