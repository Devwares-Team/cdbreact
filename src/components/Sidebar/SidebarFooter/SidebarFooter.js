import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";


const SidebarFooter = forwardRef(({ children, className, ...rest }, ref) => {
  const sidebarFooterRef = ref ? ref : React.createRef();
  return (
    <ThemeProvider theme={theme}>
      <div
        {...rest}
        ref={sidebarFooterRef}
        className={classNames("pro-sidebar-footer", className)}
      >
        {children}
      </div>
    </ThemeProvider>
  );
});


SidebarFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default SidebarFooter;

export { SidebarFooter as CDBSidebarFooter };