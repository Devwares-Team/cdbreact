import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";


interface Props{
  children: React.ReactNode,
  className: string,
  role: string
}

const ButtonToolbar = (props) => {

  let { className, children, ...attributes } = props

    const classes = classNames('btn-toolbar', className );

    return (
      <ThemeProvider theme={theme}>
        <div  {...attributes} className={classes}>
          {children}
        </div>
      </ThemeProvider>
    );
};

ButtonToolbar.propTypes = {
  "aria-label": PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string
};

ButtonToolbar.defaultProps = {
  role: "toolbar"
};


export default ButtonToolbar;
export { ButtonToolbar as CDBBtnTb };