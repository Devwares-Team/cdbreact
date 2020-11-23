import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";

const ModalBody = props => {
  const { className, children, ...attributes } = props;

  const classes = classNames('modal-body', className);

  return (
    <ThemeProvider theme={theme}>
	    <div data-test='modal-body' {...attributes} className={classes}>
	      {children}
	    </div>
	</ThemeProvider>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default ModalBody;
export { ModalBody as CDBModalBody };
