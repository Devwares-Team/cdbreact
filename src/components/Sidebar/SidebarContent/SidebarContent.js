import React, { forwardRef, useEffect, useState, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import { ContentContainer } from "./SidebarContent.style"
import { SidebarContext } from '../Sidebar';
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";


const SidebarContent = forwardRef(({ children, className, ...rest }, ref) => {

  const { handleToggleSidebar, breakpoint } = useContext(SidebarContext);


  const [width, setWidth] = useState(window.innerWidth);
  const finalbreakpoint = breakpoint || 720;



  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    if (width < finalbreakpoint) {
      handleToggleSidebar(false)
    }

    if (width > finalbreakpoint) {
      handleToggleSidebar(true)
    }


    return () => {
      window.removeEventListener("resize", handleWindowResize);

    }

  }, [handleToggleSidebar, width, finalbreakpoint])

  const sidebarContentRef = ref ? ref : React.createRef();



  return (
    <ThemeProvider theme={theme}>
      <ContentContainer
        {...rest}
        ref={sidebarContentRef}
        className={classNames("pro-sidebar-content", className)}
      >
        {children}
      </ContentContainer>
    </ThemeProvider>
  );
});

SidebarContent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}


export default SidebarContent;
export { SidebarContent as CDBSidebarContent };