import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props {
  children: React.ReactNode,
  className: string,
  center: any,
  start: any,
  end: any,
  around: any,
  between: any
}

const ModalFooter = (props: Props) => {
  const { className, children, center, start, end, around, between, ...attributes } = props;

  const classes = classNames('modal-footer', className, {
    'justify-content-start': start,
    'justify-content-end': end,
    'justify-content-center': center,
    'justify-content-between': between,
    'justify-content-around': around
  });

  return (
    <ThemeProvider theme={theme}>
      <div data-test='modal-footer' {...attributes} className={classes}>
        {children}
      </div>
    </ThemeProvider>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default ModalFooter;
export { ModalFooter as CDBModalFooter };
