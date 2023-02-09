import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props{
  children?: React.ReactNode,
  color?: string,
  columns?: any,
  textWhite?: boolean,
}

const TableHeader = (props: Props) => {
  const { children, color, columns, textWhite, ...attributes } = props;

  const isTheadColor = color === "dark" || color === "light";
  const classes = classNames({
    "text-white": textWhite,
    [`thead-${color}`]: color && isTheadColor,
    [`${color}`]: color && !isTheadColor,
  });

  let tableHeaderComponent = (
    <ThemeProvider theme={theme}>
      <thead data-test="table-head" {...attributes} className={classes}>
        {columns && (
          <tr>
            {columns.map((col) => (
              <th
                key={col.field}
                className={
                  col.hasOwnProperty("minimal") ? `th-${col.minimal}` : ""
                }
              >
                {col.label}
              </th>
            ))}
          </tr>
        )}
        {children}
      </thead>
    </ThemeProvider>
  );

  return tableHeaderComponent;
};

TableHeader.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool,
};

TableHeader.defaultProps = {
  textWhite: false,
};

export default TableHeader;
export { TableHeader as CDBTableHeader };
