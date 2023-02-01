import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Component } from "./Navbar.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
    className?: string,
    color?: string,
    dark?: boolean,
    double?: boolean,
    expand?: boolean| string,
    fixed?: string,
    light?: boolean,
    scrolling?: boolean,
    scrollingNavbarOffset?: number,
    sticky?: string,
    tag?: [Function, string],
    transparent?: boolean
}

const Navbar = (props: Props) => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleScroll = () => {
        const scrollingNavbarOffset = props.scrollingNavbarOffset || 50;
        if (window.pageYOffset > scrollingNavbarOffset) {
            setIsCollapsed(true)
        } else {
            setIsCollapsed(false);
        }
    };

    useEffect(() => {
        const { scrolling, scrollingNavbarOffset } = props;
        if (scrolling || scrollingNavbarOffset) {
            window.addEventListener('scroll', handleScroll);
        }
        return () => {

            if (scrolling || scrollingNavbarOffset) {
                window.removeEventListener('scroll', handleScroll);
            }
        }
    });

    const getExpandClass = (expand: boolean | string) => {
        if (expand === false) {
            return false;
        }
        if (expand === true || expand === 'xs') {
            return 'navbar-expand';
        }

        return `navbar-expand-${expand}`;
    };

    const {
        expand,
        light,
        dark,
        sticky,
        fixed,
        scrolling,
        color,
        className,
        scrollingNavbarOffset,
        tag,
        double,
        transparent,
        ...attributes
    } = props;


    const classes = classNames(
        {
            'navbar-light': light,
            'navbar-dark': dark,
            [`sticky-${sticky}`]: sticky,
            [`fixed-${fixed}`]: fixed,
            'scrolling-navbar': scrolling || scrollingNavbarOffset,
            'double-nav': double,
            'top-nav-collapse': isCollapsed,
            [`${color}`]: color && transparent ? isCollapsed : color
        },
        'navbar',
        getExpandClass(expand),
        className
    );

    return (
        <ThemeProvider theme={theme}>
            <Component as={(tag as unknown) as undefined} data-test='navbar' {...attributes} className={classes} role='navigation' />
        </ThemeProvider>
    );
}

Navbar.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    dark: PropTypes.bool,
    double: PropTypes.bool,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    fixed: PropTypes.string,
    light: PropTypes.bool,
    scrolling: PropTypes.bool,
    scrollingNavbarOffset: PropTypes.number,
    sticky: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    transparent: PropTypes.bool
};

Navbar.defaultProps = {
    tag: 'nav',
    expand: false,
    scrolling: false
};

export default Navbar;
export { Navbar as CDBNavbar };