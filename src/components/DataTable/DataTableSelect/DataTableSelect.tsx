import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props {
  entries?: any
  onChange?: any
  value?: number
  label?: any
}

const DataTableSelect = (props: Props) => {
  let { value, onChange, entries, label } = props;
  const getValue = (e) => {
    const value = parseInt(e.target.value, 10);
    onChange(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        data-test="datatable-select"
        className="dataTables_length bs-select"
        style={{
          display: "flex",
        }}
      >
        <label>{label}</label>
        <div>
          <select
            value={value}
            onChange={getValue}
            className="custom-select custom-select-sm form-control form-control-sm"
            style={{ marginLeft: ".5rem" }}
          >
            {entries.map((entry) => (
              <option key={entry} value={entry}>
                {entry}
              </option>
            ))}
          </select>
        </div>
      </div>
    </ThemeProvider>
  );
};

DataTableSelect.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default DataTableSelect;
export { DataTableSelect as CDBDataTableSelect }
