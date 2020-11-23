import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component, Table as StyledTable } from "./Table.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

const Table = (props) => {
  const {
    autoWidth,
    bordered,
    borderless,
    btn,
    children,
    className,
    dark,
    fixed,
    hover,
    maxHeight,
    responsive,
    responsiveLg,
    responsiveMd,
    responsiveSm,
    responsiveXl,
    scrollY,
    small,
    striped,
    theadColor,
    wrapperClassName,
    ...attributes
  } = props;

  const tableClasses = classNames(
    "table",
    autoWidth && "w-auto",
    bordered && "table-bordered",
    borderless && "table-borderless",
    btn && "btn-table",
    fixed && "table-fixed",
    hover && "table-hover",
    striped && "table-striped",
    small && "table-sm",
    className
  );

  const wrapperClasses = classNames(
    {
      "table-dark": dark,
      "table-responsive": responsive,
      "table-responsive-sm": responsiveSm,
      "table-responsive-md": responsiveMd,
      "table-responsive-lg": responsiveLg,
      "table-responsive-xl": responsiveXl,
      "table-wrapper-scroll-y": scrollY,
    },
    wrapperClassName
  );

  const wrapperStyles = { maxHeight };

  let tableComponent = (
    <ThemeProvider theme={theme}>
      <Component
        data-test="table"
        className={wrapperClasses}
        style={wrapperStyles}
      >
        <StyledTable {...attributes} className={tableClasses}>
          {children}
        </StyledTable>
      </Component>
    </ThemeProvider>
  );
  return tableComponent;
};

Table.propTypes = {
  autoWidth: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  dark: PropTypes.bool,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  maxHeight: PropTypes.string,
  responsive: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollY: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
  theadColor: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default Table;
export { Table as CDBTable };
