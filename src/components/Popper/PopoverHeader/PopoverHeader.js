import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";

const PopoverHeader = ({ attributes, children, className, tag: Tag }) => {
  const classes = classNames('popover-header', className);

  return (
    <ThemeProvider theme={theme}>
      <Tag data-test='popover-header' {...attributes} className={classes}>
        {children}
      </Tag>
    </ThemeProvider>
  );
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

PopoverHeader.defaultProps = {
  className: '',
  tag: 'h3'
};

export default PopoverHeader;
export { PopoverHeader as CDBPopoverHeader };
