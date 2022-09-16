import React from 'react'
import PropTypes from 'prop-types'
import Table from '../../Table'
import TableBody from '../../Table/TableBody'
import DataTableHead from '../DataTableHead'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../theme'

interface Props {
  autoWidth: boolean
  bordered: boolean
  borderless: boolean
  btn: boolean
  dark: boolean
  fixed: boolean
  handleSort: Function
  handleTableBodyScroll: any
  hover: boolean
  responsive: boolean
  responsiveLg: boolean
  responsiveMd: boolean
  responsiveSm: boolean
  responsiveXl: boolean
  small: boolean
  sortable: boolean
  sorted: boolean
  striped: boolean
  tbodyColor: string
  tbodyTextWhite: boolean
  theadColor: string
  theadTextWhite: boolean
  translateScrollHead: number
  children: React.ReactNode
  style: React.ReactNode
  columns: any
  maxHeight: string
  minWidth: any
  rows: any
  scrollX: boolean
  scrollY: boolean

  DataTableHead: any
  TableBody: any

  Table: any
}

const DataTableTableScroll = (props: Props) => {
  const {
    autoWidth,
    bordered,
    borderless,
    btn,

    children,
    columns,
    dark,
    TableBody,
    fixed,
    handleSort,
    handleTableBodyScroll,
    hover,
    style,
    maxHeight,
    responsive,
    responsiveLg,
    responsiveMd,
    responsiveSm,
    responsiveXl,
    rows,

    scrollX,
    Table,
    scrollY,
    small,
    sortable,
    DataTableHead,
    sorted,
    striped,
    tbodyColor,
    tbodyTextWhite,
    theadColor,
    theadTextWhite,
    translateScrollHead,
    ...attributes
  } = props

  const minWidth = scrollX
    ? `${columns
        .map((col) => col.width)
        .reduce((prev, curr) => prev + curr, 0)}px`
    : 'auto'

  return (
    <ThemeProvider theme={theme}>
      <div data-test='datatable-table-scroll' className='col-sm-12'>
        <div className='dataTables_scroll'>
          <div className='dataTables_scrollHead' style={{ overflow: 'hidden' }}>
            <div
              className='dataTables_scrollHeadInner'
              style={{
                position: 'relative',
                transform: `translateX(-${translateScrollHead}px)`,
                boxSizing: 'content-box',

                minWidth
              }}
            >
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
                className='dataTable'
                {...attributes}
              >
                <DataTableHead
                  color={theadColor}
                  textWhite={theadTextWhite}
                  columns={columns}
                  handleSort={handleSort}
                  scrollX={scrollX}
                  scrollY={scrollY}
                  sortable={sortable}
                  sorted={sorted}
                />
              </Table>
            </div>
          </div>

          <div
            className='dataTable_scrollBody'
            style={{ overflow: 'auto' }}
            onScroll={handleTableBodyScroll}
          >
            <Table
              style={{
                minWidth
              }}
              autoWidth={autoWidth}
              bordered={bordered}
              borderless={borderless}
              btn={btn}
              dark={dark}
              fixed={fixed}
              hover={hover}
              maxHeight={maxHeight}
              responsive={responsive}
              responsiveSm={responsiveSm}
              responsiveMd={responsiveMd}
              responsiveLg={responsiveLg}
              responsiveXl={responsiveXl}
              scrollY={scrollY}
              small={small}
              striped={striped}
              className='dataTable'
              {...attributes}
            >
              <colgroup>
                {columns.map((col) => (
                  <col
                    key={col.field}
                    style={{
                      width: `${col.width}px` || 'auto',
                      minWidth: `${col.width}px` || 'auto'
                    }}
                  />
                ))}
              </colgroup>
              <TableBody
                color={tbodyColor}
                textWhite={tbodyTextWhite}
                rows={rows}
                columns={columns}
              />
              {children}
            </Table>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

DataTableTableScroll.propTypes = {
  autoWidth: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  borderless: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleTableBodyScroll: PropTypes.func.isRequired,
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
  translateScrollHead: PropTypes.number.isRequired,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.object),
  maxHeight: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool
}

export default DataTableTableScroll
export { DataTableTableScroll as MDBDataTableTableScroll }
