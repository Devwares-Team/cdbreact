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

const TableFooter = (props: Props) => {
  const { children, color, columns, textWhite, ...attributes } = props;

  const isTheadColor = color === "dark" || color === "light";

  const classes = classNames({
    "text-white": textWhite,
    [`thead-${color}`]: color && isTheadColor,
    [`${color}`]: color && !isTheadColor,
  });

  return (
    <ThemeProvider theme={theme}>
      <thead
        data-test="table-foot"
        {...attributes}
        className={classes || undefined}
      >
        {columns && (
          <tr>
            {columns.map((col) => (
              <th
                key={col.field}
                className={
                  col.hasOwnProperty("minimal") ? `th-${col.minimal}` : undefined
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
};

TableFooter.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool,
};

TableFooter.defaultProps = {
  textWhite: false,
};

export default TableFooter;
export { TableFooter as CDBTableFooter };
