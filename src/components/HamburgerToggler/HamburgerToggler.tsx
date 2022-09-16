import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  className: string,
  color: string,
  id: string,
  isOpen : boolean,
  onClick : any
}

const HamburgerToggler = (props : Props) => {
  const { id, color, className, isOpen, onClick, ...attributes } = props;

  const classes = classNames("hamburger-button__button", className);

  return (
    <ThemeProvider theme={theme}>
      <div {...attributes}>
        <input
          data-test="hamburger-toggler"
          type="checkbox"
          defaultChecked={isOpen || false}
          onChange={onClick}
          className="hamburger-button__checkbox"
          id={id}
        />
        <label id="nav-icon1" className={classes} htmlFor={id}>
          <span style={{ background: color }} />
          <span style={{ background: color }} />
          <span style={{ background: color }} />
        </label>
      </div>
    </ThemeProvider>
  );
};

HamburgerToggler.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string,
};

export default HamburgerToggler;
export { HamburgerToggler as CDBHamburgerToggler };
