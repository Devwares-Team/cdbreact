import React from "react";
import PropTypes from "prop-types";
import DataTableHead from "../DataTableHead";
import Table from "../../Table";
import TableBody from "../../Table/TableBody";
import TableFooter from "../../Table/TableFooter";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props{
  autoWidth: boolean,
  bordered: boolean,
  borderless: boolean,
  btn: boolean,
  dark: boolean,
  fixed: boolean,
  handleSort: Function,
  hover: boolean,
  responsive: boolean,
  responsiveLg: boolean,
  responsiveMd: boolean,
  responsiveSm: boolean,
  responsiveXl: boolean,
  small: boolean,
  sortable: boolean,
  sorted: boolean,
  striped: boolean,
  tbodyColor: string,
  tbodyTextWhite: boolean,
  theadColor: string,
  theadTextWhite: boolean,
  children: React.ReactNode
  columns : any,
  noBottomColumns: any,
  rows: any,
  noRecordsFoundLabel: any,
  DataTableHead : any,
  TableBody : any;
  Table: any,
  TableFooter: any,
}

const DataTableTable = (props : Props) => {
  const {
    autoWidth,
    bordered,
    borderless,
    btn,
    TableFooter,
    children,
    columns,
    dark,
    fixed,
    handleSort,
    hover,
    Table,
    noBottomColumns,
    noRecordsFoundLabel,
    responsive,
    responsiveLg,
    DataTableHead,
    responsiveMd,
    responsiveSm,
    responsiveXl,
    rows,
    small,
    sortable,
    sorted,
    striped,
    tbodyColor,
    tbodyTextWhite,
    theadColor,
    TableBody,
    theadTextWhite,
    ...attributes
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <div data-test="datatable-table" className="col-sm-12">
        <Table
          autoWidth={autoWidth}
          bordered={bordered}
          borderless={borderless}
          btn={btn}
          dark={dark}
          fixed={fixed}
          hover={hover}
          responsive={responsive}
          responsiveSm={responsiveSm}
          responsiveMd={responsiveMd}
          responsiveLg={responsiveLg}
          responsiveXl={responsiveXl}
          small={small}
          striped={striped}
          className="dataTable"
          {...attributes}
        >
          <DataTableHead
            color={theadColor}
            textWhite={theadTextWhite}
            columns={columns}
            handleSort={handleSort}
            sortable={sortable}
            sorted={sorted}
          />
          <TableBody
            color={tbodyColor}
            textWhite={tbodyTextWhite}
            rows={rows}
            columns={columns}
          />
          {!noBottomColumns && (
            <TableFooter
              color={theadColor}
              textWhite={theadTextWhite}
              columns={columns}
            />
          )}
          {children}
        </Table>
      </div>
    </ThemeProvider>
  );
};

DataTableTable.propTypes = {
  autoWidth: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  borderless: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
  hover: PropTypes.bool.isRequired,
  responsive: PropTypes.bool.isRequired,
  responsiveLg: PropTypes.bool.isRequired,
  responsiveMd: PropTypes.bool.isRequired,
  responsiveSm: PropTypes.bool.isRequired,
  responsiveXl: PropTypes.bool.isRequired,
  small: PropTypes.bool.isRequired,
  sortable: PropTypes.bool.isRequired,
  sorted: PropTypes.bool.isRequired,
  striped: PropTypes.bool.isRequired,
  tbodyColor: PropTypes.string.isRequired,
  tbodyTextWhite: PropTypes.bool.isRequired,
  theadColor: PropTypes.string.isRequired,
  theadTextWhite: PropTypes.bool.isRequired,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.object),
  noBottomColumns: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default DataTableTable;
export { DataTableTable as MDBDataTableTable };
