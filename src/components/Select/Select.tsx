import React from "react";
import PropTypes, { string } from "prop-types";
import classNames from "classnames";
import { Component } from "./Select.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  options: [any],
  selected: string,
  className; string,
  optionClassName: any
}

const Select = (props: Props) => {
  const {
    className,
    options,
    optionClassName,
    selected,
    ...attributes
  } = props;

  const selectClasses = classNames("custom-select", className);
  const optionClasses = classNames(optionClassName);
  let selectComponent = (
    <ThemeProvider theme={theme}>
      <Component data-test="select" {...attributes} className={selectClasses}>
        <option>{selected}</option>
        {options &&
          options.map((optionType, index) => {
            return (
              <option key={optionType.value} className={optionClasses}>
                {optionType.text}
              </option>
            );
          })}
      </Component>
    </ThemeProvider>
  );

  return selectComponent;
};

Select.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.string,
};

Select.defaultProps = {
  tag: "div",
};

export default Select;
export { Select as CDBSelect };
