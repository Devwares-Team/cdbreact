import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink as NavLinkRouter } from 'react-router-dom';
import CDBLink from '../../Link';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props{
    active?: boolean,
    children?: React.ReactNode,
    className?: string,
    disabled?: boolean,
    link?: boolean,
    to?: string
}

const NavLink = (props: Props) => {
    const { children, className, disabled, active, to, link, ...attributes } = props;
    const classes = classNames('nav-link', active && 'active', className);

    const Tag = link ? CDBLink : NavLinkRouter;

    return (
        <ThemeProvider theme={theme}>
            <Tag
                data-test='nav-link'
                className={classes}
                to={to}
                {...attributes}
            >
                {children}
            </Tag>
        </ThemeProvider>
    );
};

NavLink.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    link: PropTypes.bool,
    to: PropTypes.string
};

NavLink.defaultProps = {
    active: false,
    className: '',
    disabled: false,
    link: false
};

export default NavLink;
export { NavLink as CDBNavLink };