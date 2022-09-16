import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props{
  tag: any
  children: React.ReactNode,
  className: string,
  Tag: any
}

const PopoverBody = (props: Props) => {
  let{ children, className, tag:Tag, ...attributes } = props
  const classes = classNames('popover-body', className);

  return (
    <ThemeProvider theme={theme}>
      <Tag data-test='popover-body' {...attributes} className={classes}>
        {children}
      </Tag>
    </ThemeProvider>
  );
};

PopoverBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

PopoverBody.defaultProps = {
  tag: 'div'
};

export default PopoverBody;
export { PopoverBody as CDBPopoverBody };
