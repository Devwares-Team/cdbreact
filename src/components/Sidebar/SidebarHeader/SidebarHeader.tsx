import React, { forwardRef, useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { SidebarContext, SidebarContextType } from "../Sidebar";
import { HeaderContainer } from "./SidebarHeader.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props {
  children: React.ReactNode
  prefix: React.ReactNode
  className: string
}

const SidebarHeader = forwardRef<HTMLDivElement, Props>(
  ({ children, prefix, className, ...rest }, ref) => {
    const sidebarHeaderRef = ref ? ref : React.createRef<HTMLDivElement>();

    const { toggled, handleToggleSidebar } = useContext<SidebarContextType>(SidebarContext);

    return (
      <ThemeProvider theme={theme}>
        <HeaderContainer
          {...rest}
          ref={sidebarHeaderRef}
          className={classNames(className)}
        >
          <div className={classNames("head-div", { toggled })}>
            <span className="head-text">{children}</span>
            {prefix ? (
              <span
                className="icon-suffix"
                onClick={() => handleToggleSidebar(toggled)}
              >
                {prefix}
              </span>
            ) : null}
          </div>
        </HeaderContainer>
      </ThemeProvider>
    );
  }
);



SidebarHeader.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.any, // PropTypes.node,
  prefix: PropTypes.any, // PropTypes.node
};

export default SidebarHeader;

export { SidebarHeader as CDBSidebarHeader };
