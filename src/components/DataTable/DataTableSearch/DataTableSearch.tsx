import React from 'react';
import PropTypes from 'prop-types';
import DataTableInput from '../DataTableInput';
import classNames from 'classnames';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props {
  handleSearchChange: any,
  search: string,
  searching: boolean,
  barReverse?: boolean,
  label?: string,
  materialSearch?: boolean
  wrapperSearchStyle?: any,
  wrapperSearchClasses?: string,
  onChange?: any,

}

const DataTableSearch = (props: Props) => {
  const {
    handleSearchChange,
    search,
    searching,
    onChange,
    label,
    barReverse,
    wrapperSearchStyle,
    wrapperSearchClasses,
    materialSearch,
    ...attributes
  } = props;

  const classes = classNames('col-sm-12 col-md-6', wrapperSearchClasses);

  return (
    <ThemeProvider theme={theme}>
      {searching && (
        <div
          data-test='datatable-search'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: barReverse ? 'flex-start' : 'flex-end',
            ...wrapperSearchStyle
          }}
          className={classes}
        >
          <DataTableInput
            value={search}
            onChange={handleSearchChange}
            label={label}
            barReverse={barReverse}
            materialSearch={materialSearch}
            {...attributes}
          />
        </div>
      )}
    </ThemeProvider>
  );
};

DataTableSearch.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool,
  label: PropTypes.string,
  materialSearch: PropTypes.bool,
  wrapperSearchStyle: PropTypes.any,
  wrapperSearchClasses: PropTypes.string
};

DataTableSearch.defaultProps = {
  wrapperSearchStyle: {},
  wrapperSearchClasses: ""
}

export default DataTableSearch;
export { DataTableSearch as MDBDataTableSearch };
