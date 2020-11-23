import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./ModalHeader.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";

const ModalHeader = (props) => {
  let closeButton;
  const {
    className,
    children,
    toggle,
    tag: Tag,
    closeAriaLabel,
    titleClass,
    ...attributes
  } = props;

  const classes = classNames("modal-header", className);

  const titleClasses = classNames("modal-title", titleClass);

  if (toggle) {
    closeButton = (
      <button
        type="button"
        onClick={toggle}
        className="close"
        aria-label={closeAriaLabel}
      >
        <span aria-hidden="true" style={{ height: "100px !important" }}>
          <svg
            height="10"
            viewBox="0 0 329.26933 329"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
          </svg>
        </span>
      </button>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Component data-test="modal-header" {...attributes} className={classes}>
        <Tag className={titleClasses}>{children}</Tag>
        {closeButton}
      </Component>
    </ThemeProvider>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
};

ModalHeader.defaultProps = {
  tag: "h4",
  closeAriaLabel: "Close",
};

export default ModalHeader;
export { ModalHeader as CDBModalHeader };
