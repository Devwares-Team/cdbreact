import React, { forwardRef, createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SidebarContainer, SidebarInner, SidebarLayout } from "./Sidebar.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

export const SidebarContext = createContext({
  toggled: false,
  handleToggleSidebar: () => {},
});

const Sidebar = forwardRef(
  (
    {
      children,
      className,
      textColor,
      backgroundColor,
      breakpoint,
      toggled,
      minWidth,
      maxWidth,
      ...rest
    },
    ref
  ) => {
    const handleToggleSidebar = (toggled) => {
      setSidebarState({ ...sidebarState, toggled: !toggled });
    };

    const [sidebarState, setSidebarState] = useState({
      toggled,
      handleToggleSidebar,
      textColor,
      backgroundColor,
      breakpoint,
    });

    useEffect(() => {
      if (toggled) {
        handleToggleSidebar(!toggled);
      }
    }, [toggled]);

    const sidebarRef = ref ? ref : React.createRef();

    return (
      <ThemeProvider theme={theme}>
        <SidebarContext.Provider value={sidebarState}>
          <SidebarContainer
            {...rest}
            ref={sidebarRef}
            className={classNames("pro-sidebar", className, {
              toggled: sidebarState.toggled,
            })}
            textColor={textColor}
            backgroundColor={backgroundColor}
            minWidth={minWidth}
            maxWidth={maxWidth}
          >
            <SidebarInner>
              <SidebarLayout>{children}</SidebarLayout>
            </SidebarInner>
          </SidebarContainer>
        </SidebarContext.Provider>
      </ThemeProvider>
    );
  }
);

Sidebar.defaultProps = {
  textColor: "#ffffff",
  backgroundColor: theme.colors.dark900,
  breakpoint: 720,
  toggled: false,
  minWidth: "80px",
  maxWidth: "270px",
};

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  breakpoint: PropTypes.number,
  toggled: PropTypes.boolean,
};

export default Sidebar;

export { Sidebar as CDBSidebar };
