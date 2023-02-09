import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Component } from "./NavItem.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props{
    active?: boolean,
    children?: React.ReactNode,
    className?: string,
    tag?: [Function, string]
    text?: any
}

const NavItem = (props: Props) => {
    const { children, className, active, text, tag, ...attributes } = props;

    const classes = classNames('nav-item', active && 'active', text && 'navbar-text', className);

    return (
        <ThemeProvider theme={theme}>
            <Component as={(tag as unknown) as undefined} data-test='nav-item' {...attributes} className={classes}>
                {children}
            </Component>
        </ThemeProvider>
    );
};

NavItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

NavItem.defaultProps = {
    tag: 'li'
};

export default NavItem;
export { NavItem as CDBNavItem };