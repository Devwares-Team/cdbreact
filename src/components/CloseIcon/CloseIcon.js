import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

export const CloseIcon = (props) => {
  const { onClick, className, ariaLabel, ...attributes } = props;
  const onClickHandler = (e) => {
    onClick && onClick(e);
  };
  const closeIconClasses = classNames("close", className);
  let closeIconComponent = (
    <ThemeProvider theme={theme}>
      <button
        data-test="close-button"
        type="button"
        {...attributes}
        className={closeIconClasses}
        onClick={onClickHandler}
        aria-label={ariaLabel}
      >
        <span aria-hidden="true">×</span>
      </button>
    </ThemeProvider>
  );
  return closeIconComponent;
};

CloseIcon.defaultProps = {
  ariaLabel: "Close",
};

CloseIcon.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default CloseIcon;
export { CloseIcon as CDBCloseIcon };
