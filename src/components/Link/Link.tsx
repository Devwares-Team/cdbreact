import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link as LinkRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  active?: boolean,
  children?: React.ReactNode,
  className?: string,
  disabled?: boolean,
  to?: string,
  onMouseUp?: React.MouseEventHandler<HTMLAnchorElement>,
  onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>,
}

const Link = (props: Props) => {
  const {
    active,
    children,
    className,
    disabled,
    onMouseUp,
    onTouchStart,
    to,
    ...attributes
  } = props;
  const classes = classNames(
    "nav-link",
    disabled && "disabled",
    active && "active",
    className
  );

  let linkComponent = (
    <ThemeProvider theme={theme}>
      <LinkRouter
        data-test="link-router"
        className={classes}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        to={to}
        {...attributes}
      >
        {children}
      </LinkRouter>
    </ThemeProvider>
  );

  return linkComponent;
};

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
};

Link.defaultProps = {
  active: false,
  className: "",
  disabled: false,
};

export default Link;
export { Link as CDBLink };
