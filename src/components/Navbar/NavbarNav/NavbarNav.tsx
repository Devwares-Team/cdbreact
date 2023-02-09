import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Component } from "./NavbarNav.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";


interface Props{
    children?: React.ReactNode,
    className?: string,
    left?: boolean,
    right?: boolean,
    tag?: [string, Function]
}

const NavbarNav = (props: Props) => {
    const { children, className, right, left, tag, ...attributes } = props;

    const classes = classNames(
        'navbar-nav',
        right ? 'ml-auto' : left ? 'mr-auto' : 'justify-content-around w-100',
        className
    );

    return (
        <ThemeProvider theme={theme}>
            <Component as={(tag as unknown) as undefined} data-test='navbar-nav' {...attributes} className={classes}>
                {children}
            </Component>
        </ThemeProvider>
    );
};

NavbarNav.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    left: PropTypes.bool,
    right: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

NavbarNav.defaultProps = {
    tag: 'ul'
};

export default NavbarNav;
export { NavbarNav as CDBNavbarNav };