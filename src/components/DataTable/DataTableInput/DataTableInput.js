import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CDBInput } from "../../Input/Input";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";

const DataTableInput = ({
  value,
  onChange,
  label,
  barReverse,
  materialSearch,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        data-test="datatable-input"
        className={classNames(
          "mdb-datatable-filter",
          "flex-row",
          barReverse && "text-left"
        )}
      >
        {materialSearch ? (
          <CDBInput
            hint="Search"
            containerClass="mt-0"
            value={value}
            onChange={onChange}
            type="search"
            className="form-control form-control-sm"
            placeholder={label || "Search"}
          />
        ) : (
          <input
            className="form-control form-control-sm ml-0 my-1"
            type="text"
            placeholder={label || "Search"}
            aria-label="Search"
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

DataTableInput.propTypes = {
  barReverse: PropTypes.bool,
  label: PropTypes.string,
  materialSearch: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default DataTableInput;
export { DataTableInput as MDBDataTableInput };
