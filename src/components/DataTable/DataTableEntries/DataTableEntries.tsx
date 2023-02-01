import React from 'react';
import PropTypes from 'prop-types';
import DataTableSelectFree from '../DataTableSelect';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props {
  displayEntries: boolean,
  entries: number,
  entriesArr: number[],
  handleEntriesChange: any,
  label: [number, object, string],
  paging: boolean,
  barReverse?: boolean,
  onChange?: any,
  proSelect?: boolean,
}


const DataTableEntries = (props: Props) => {
  const {
    handleEntriesChange,
    displayEntries,
    entries,
    entriesArr,
    paging,
    onChange,
    label,
    barReverse,

    proSelect,

    ...attributes
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <div
        data-test='datatable-entries'
        className='col-sm-12 col-md-6'
        style={{
          display: 'flex', alignItems: 'center', justifyContent: barReverse ? 'flex-end' : ''

        }}
      >
        {paging && displayEntries && !proSelect && (
          <DataTableSelectFree
            value={entries}
            onChange={handleEntriesChange}

            entries={entriesArr}
            label={label}
            // barReverse={barReverse}
            {...attributes}
          />
        )}

      </div>
    </ThemeProvider>
  );
};

DataTableEntries.propTypes = {
  displayEntries: PropTypes.bool.isRequired,
  entries: PropTypes.number.isRequired,
  entriesArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleEntriesChange: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]).isRequired,
  paging: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool,
  proSelect: PropTypes.bool,
  onChange: PropTypes.func,
};


export default DataTableEntries;
export { DataTableEntries as MDBDataTableEntries };
