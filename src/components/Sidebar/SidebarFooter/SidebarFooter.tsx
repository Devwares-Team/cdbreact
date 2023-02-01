import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props {
  children?: React.ReactNode,
  className?: string
}

const SidebarFooter = forwardRef<HTMLDivElement, Props>(({ children, className, ...rest }: Props, ref) => {
  const sidebarFooterRef = ref ? ref : React.createRef<HTMLDivElement>();
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
    children: PropTypes.any, // PropTypes.node.isRequired
}

export default SidebarFooter;

export { SidebarFooter as CDBSidebarFooter };