import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Component } from "./NavToggle.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props{
    children: React.ReactNode,
    className: string,
    image: string,
    left: boolean,
    right: boolean,
    tag: [Function, string],
    type: "reset" | "submit" | "button"
}

const NavToggle = (props: Props) => {
    const { right, left, children, className, tag, image, ...attributes } = props;

    const classes = classNames(
        {
            'navbar-toggler-right': right,
            'navbar-toggler-left': left
        },
        'navbar-toggler',
        className
    );

    return (
        <ThemeProvider theme={theme}>
            <Component data-test='navbar-toggler' as={(tag as unknown) as undefined} {...attributes} className={classes}>
                {children ||
                    (image ? (
                        <span className='navbar-toggler-icon' style={{ backgroundImage: `url("${image}")` }} />
                    ) : (
                            <span className='navbar-toggler-icon' />
                        ))}
            </Component>
        </ThemeProvider>
    );
};

NavToggle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    image: PropTypes.string,
    left: PropTypes.bool,
    right: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    type: PropTypes.oneOf(["reset" , "submit" , "button"])
};

NavToggle.defaultProps = {
    tag: 'button',
    type: 'button'
};

export default NavToggle;
export { NavToggle as CDBNavToggle };