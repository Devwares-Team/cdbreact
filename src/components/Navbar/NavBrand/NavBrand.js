import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Component } from "./NavBrand.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";


const NavBrand = ({ className, href, ...attributes }) => {

    const classes = classNames('navbar-brand', className);

    const navBrand = () => {

        if (href) {
            return <Component data-test='navbar-brand' to={href} {...attributes} className={classes} />;
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