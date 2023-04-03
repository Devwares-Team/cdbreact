import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Component } from "./NavBrand.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props{
    className?: string,
    href?: string
    children?: React.ReactNode
}

const NavBrand = (props: Props) => {

    let{ className, href, children, ...attributes }= props

    const classes = classNames('navbar-brand', className);

    const navBrand = () => {

        if (href) {
            return <Component data-test='navbar-brand' to={href} {...attributes} className={classes}>
                {children}
            </Component>;
        }
        return <div data-test='navbar-brand' {...attributes} className={classes} />;
    
    };

    return(
        <ThemeProvider theme={theme}> {navBrand()}</ThemeProvider>
    )
};


NavBrand.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string
};

export default NavBrand;
export { NavBrand as CDBNavBrand };