import React, { forwardRef, useEffect, useState, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import { ContentContainer } from "./SidebarContent.style"
import { SidebarContext, SidebarContextType } from '../Sidebar';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";


interface Props  {
  children?: React.ReactNode,
    className?: string,
  
}

const SidebarContent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props

  const { handleToggleSidebar, breakpoint } = useContext<SidebarContextType>(SidebarContext);


  const [width, setWidth] = useState(0);

  const finalbreakpoint = breakpoint || 720;



  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    if (width < finalbreakpoint) {
      handleToggleSidebar(false)
    }

    // if (width > finalbreakpoint) {
    //   handleToggleSidebar(true)
    // }


    return () => {
      window.removeEventListener("resize", handleWindowResize);

    }

  }, [handleToggleSidebar, width, finalbreakpoint])

  const sidebarContentRef = ref ? ref : React.createRef<HTMLDivElement>();



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
  children: PropTypes.any, // PropTypes.node
}


export default SidebarContent;
export { SidebarContent as CDBSidebarContent };