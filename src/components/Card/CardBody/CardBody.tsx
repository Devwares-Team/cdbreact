import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Component } from './CardBody.style';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";


interface Props{
    cascade: boolean,
    className: string,
    tag: [Function, string]
}

const CardBody = (props: Props) => {
    const { className, tag, cascade, ...attributes } = props;

    const classes = classNames('card-body', cascade && 'card-body-cascade', className);

    return (
	    <ThemeProvider theme={theme}>
	    	<Component data-test='card-body' as={tag} {...attributes} className={classes} />
	    </ThemeProvider>
   	);
};

CardBody.propTypes = {
    cascade: PropTypes.bool,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardBody.defaultProps = {
    tag: 'div'
};

export default CardBody;
export { CardBody as CDBCardBody };