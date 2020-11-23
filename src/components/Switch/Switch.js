import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Switch.style";
import { ThemeProvider } from 'styled-components'
import { theme } from './../../theme'

const Switch = (props) => {
  const { checked, className, ...attributes } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const switchClassName = classNames(className);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ThemeProvider theme={theme}>
    <Component className={switchClassName} {...attributes}>
      <div className="switch-container">
        <label>
          <input
            checked={isChecked}
            onChange={handleChange}
            className="switch"
            type="checkbox"
          />
          <div>
            <div></div>
          </div>
        </label>
      </div>
    </Component>
    </ThemeProvider>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  tag: PropTypes.string,
};
Switch.defaultProps = {
  tag: "div",
  checked: false,
};

export default Switch;

export { Switch as CDBSwitch };
