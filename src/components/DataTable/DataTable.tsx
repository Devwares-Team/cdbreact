import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import DataTableTable from './DataTableTable'
import DataTableTableScroll from './DataTableTableScroll'
import DataTableEntries from './DataTableEntries'
import DataTableSearch from './DataTableSearch'
import DataTableInfo from './DataTableInfo'
import DataTablePagination from './DataTablePagination'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

interface Props {
  autoWidth: boolean;
  barReverse: boolean;
  bordered: boolean;
  borderless: boolean;
  btn: boolean;
  children: React.ReactNode;
  className: string;
  dark: boolean;
  data: [object, string];
  disableRetreatAfterSorting: boolean;
  displayEntries: boolean;
  entries: number;
  entriesLabel: [string, number, object];
  entriesOptions: number;
  exportToCSV: boolean;
  filter: string;
  fixed: boolean;
  hover: boolean;
  info: boolean;
  infoLabel: [object, string];
  materialSearch: boolean;
  maxHeight: string;
  noBottomColumns: boolean;
  noRecordsFoundLabel: string;
  onPageChange: Function;
  onSearch: Function;
  onSort: Function;
  order: string;
  pagesAmount: number;
  paginationLabel: string;
  paging: boolean;
  proSelect: boolean;
  responsive: boolean;
  responsiveLg: boolean;
  responsiveMd: boolean;
  responsiveSm: boolean;
  responsiveXl: boolean;
  scrollX: boolean;
  scrollY: boolean;
  searching: boolean;
  searchLabel: string;
  small: boolean;
  sortable: boolean;
  sortRows: string;
  striped: boolean;
  tbodyColor: string;
  tbodyTextWhite: boolean;
  theadColor: string;
  theadTextWhite: boolean;
  rows?: any

}

const DataTable = (props: Props) => {
  const {
    autoWidth,
    barReverse,
    bordered,
    borderless,
    btn,
    children,
    className,
    dark,
    data,
    disableRetreatAfterSorting,
    displayEntries,
    entriesLabel,
    entriesOptions,
    exportToCSV,
    filter,
    fixed,
    hover,
    info,
    infoLabel,
    maxHeight,
    noBottomColumns,
    noRecordsFoundLabel,
    onPageChange,
    onSearch,
    onSort,
    order,
    pagesAmount,
    paginationLabel,
    paging,
    responsive,
    responsiveLg,
    responsiveMd,
    responsiveSm,
    responsiveXl,
    scrollX,
    scrollY,
    searching,
    searchLabel,
    small,
    sortable,
    rows,
    
    sortRows,
    striped,
    tbodyColor,
    tbodyTextWhite,
    theadColor,
    materialSearch,
    theadTextWhite,
    proSelect,
    ...attributes
  } = props

  const [state, setState] = useState({
    activePage: 0,
    columns: props.data.columns || [],
    entries: props.entries,
    filteredRows: props.data.rows || [],
    filterOptions: [],
    order: props.order || [],
    pages: [],
    rows: props.data.rows || [],
    search: '',
    searchSelect: '',
    sorted: false,
    translateScrollHead: 0,
    unsearchable: []
  })

  useEffect(() => {
    const { data, paging } = props
    const { order, columns, pages, rows } = state

    if (typeof data === 'string') {
      fetchData(data, paginateRows)
    }

    if (order.length > 0) {
      handleSort(order[0], order[1])
    } else {
      handleSort()
    }

    state.setUnsearchable(columns)

    if (paging) {
      paginateRowsInitialy()
    } else {
      pages.push(rows)
    }
  }, [])

  const refProps = useRef()
  const refState = useRef()
  const prevState = () => {
    refState.current = state
  }
  const prevProps = () => {
    refProps.current = props
  }

  useEffect(() => {
    const { columns } = state
    const { data } = props

    if (prevProps.data !== data) {
      typeof data === 'string'
        ? fetchData(data)
        : setData(data.rows, data.columns, paginateRows)

      state.setUnsearchable(columns)
      filterRows()
    }
  }, [prevState, prevProps])

  const setData = (rows = [], columns = [], callback) => {
    setState(
      () => ({
        ...state,
        columns,
        rows,
        filteredRows: props.disableRetreatAfterSorting ? filterRows() : rows
      }),
      callback && typeof callback === 'function' && (() => callback())
    )
  }

  state.setUnsearchable = (columns) => {
    const unsearchable = []

    columns.forEach((column) => {
      if (column.searchable !== undefined && column.searchable === false) {
        unsearchable.push(column.field)
      }
    })

    setState({ ...state, unsearchable })
  }

  const fetchData = (link, isPaginateRows) => {
    fetch(link)
      .then((res) => res.json())
      .then((json) =>
        setData(json.rows, json.columns, isPaginateRows ? paginateRows : null)
      )
      .catch((err) => console.log(err))
  }

  state.pagesAmount = () => Math.ceil(state.filteredRows.length / state.entries)

  const paginateRowsInitialy = () => {
    const { rows, entries, pages } = state

    const pagesAmount = state.pagesAmount

    for (let i = 1; i <= pagesAmount; i++) {
      const pageEndIndex = i * entries
      pages.push(rows.slice(pageEndIndex - entries, pageEndIndex))
    }
  }

  const handleEntriesChange = (value) => {
    setState(
      { ...state, entries: Array.isArray(value) ? value[0] : value },
      () => paginateRows()
    )
  }

  const handleSearchChange = (e) => {
    setState(
      { ...state, search: e.target.value },
      () => filterRows(),
      props.onSearch &&
      typeof props.onSearch === 'function' &&
      props.onSearch(e.target.value)
    )
  }

  const checkFieldValue = (array, field) => {
    return array[field] && typeof array[field] !== 'string'
      ? array[field].props.searchvalue
      : array[field]
  }

  const checkField = (field, a, b, direction) => {
    const [aField, bField] = [
      checkFieldValue(a, field),
      checkFieldValue(b, field)
    ]

    let comp = aField > bField ? -1 : 1
    if (direction === 'asc') {
      comp *= -1
    }

    return comp
  }

  const sort = (rows, sortRows, field, direction) => {
    rows.sort((a, b) => {
      if (sortRows && sortRows.includes(field)) {
        return checkField(field, a, b, direction)
      }

      return direction === 'asc'
        ? a[field] < b[field]
          ? -1
          : 1
        : a[field] > b[field]
          ? -1
          : 1
    })
  }

  const handleSort = (field, sort) => {
    const { onSort } = props

    if (sort === 'disabled') {
      return
    }

    setState(
      (prevState) => {
        const sort = () => ((rows)(sortRows)(field)(direction))
        const { sortRows } = props
        const { rows, columns } = prevState
        const direction = sort === 'desc' ? 'desc' : 'asc'

        columns.forEach((col) => {
          if (col.sort === 'disabled') {
            return
          }

          col.sort =
            col.field === field ? (col.sort === 'desc' ? 'asc' : 'desc') : ''
        })

        return {
          ...state,
          rows,
          columns,
          sorted: true
        }
      },
      () => filterRows()
    )

    onSort &&
      typeof onSort === 'function' &&
      onSort({ column: field, direction: sort === 'desc' ? 'desc' : 'asc' })
  }

  const filterRows = (search = state.search) => {
    const { unsearchable } = state
    const { sortRows, noRecordsFoundLabel } = props

    setState(
      (prevState) => {
        const filteredRows = prevState.rows.filter((row) => {
          for (const key in row) {
            if (
              (!unsearchable.length || !unsearchable.includes(key)) &&
              typeof row[key] !== 'function'
            ) {
              let stringValue = ''

              if (sortRows && typeof row[key] !== 'string') {
                const content = []
                const getContent = (element) =>
                  typeof element === 'object'
                    ? element.props.children &&
                    Array.from(element.props.children).map((el) =>
                      getContent(el)
                    )
                    : content.push(element)

                getContent(row[key])
                stringValue = content.join('')
              } else if (row[key]) {
                stringValue = row[key].toString()
              }
              if (stringValue.toLowerCase().includes(search.toLowerCase())) {
                return true
              }
            }
          }
          return false
        })

        if (filteredRows.length === 0) {
          console.log(prevState)
          filteredRows.push({
            message: noRecordsFoundLabel,

            colspan: prevState?.columns?.length
          })
        }
        let test = { ...state }
        if (props.disableRetreatAfterSorting) {
          test = {
            ...state,
            filteredRows,
            activePage: (prevState.activePage =
              prevState.activePage < prevState.pages.length ||
                prevState.activePage === 0
                ? prevState.activePage
                : prevState.pages.length - 1)
          }
        } else if (!props.disableRetreatAfterSorting) {
          test = { ...state, filteredRows, activePage: 0 }
        }

        return test
      },
      () => paginateRows()
    )
  }

  const paginateRows = () => {
    const pagesAmount = pagesAmount()

    setState((prevState) => {
      let { pages, entries, filteredRows, activePage } = prevState
      const { paging, disableRetreatAfterSorting } = props

      pages = []

      if (paging) {
        for (let i = 1; i <= pagesAmount; i++) {
          const pageEndIndex = i * entries
          pages.push(filteredRows.slice(pageEndIndex - entries, pageEndIndex))
        }
        if (!disableRetreatAfterSorting) {
          activePage =
            activePage < pages.length || activePage === 0
              ? activePage
              : pages.length - 1
        }
      } else {
        pages.push(filteredRows)
        activePage = 0
      }
      return { ...state, pages, filteredRows, activePage }
    })
  }

  const changeActivePage = (page) => {
    const { onPageChange } = props
    setState({ ...state, activePage: page })

    onPageChange &&
      typeof onPageChange === 'function' &&
      onPageChange({ activePage: page + 1, pagesAmount: pagesAmount() })
  }

  const handleTableBodyScroll = (e) => {
    setState({ ...state, translateScrollHead: e.target.scrollLeft })
  }

  const {
    columns,
    entries,
    filteredRows,
    pages,
    activePage,
    search,
    sorted,
    translateScrollHead
  } = state

  const tableClasses = classNames('dataTables_wrapper', className)

  return (
    <ThemeProvider theme={theme}>
      <div data-test='datatable' className={tableClasses}>
        <div className={'row'}>
          {barReverse ? (
            <React.Fragment>
              <DataTableSearch
                handleSearchChange={this.handleSearchChange}
                search={search}
                searching={searching}
                label={searchLabel}
                barReverse={barReverse}
                materialSearch={materialSearch}
              />
              <DataTableEntries
                paging={paging}
                displayEntries={displayEntries}
                entries={entries}
                handleEntriesChange={this.handleEntriesChange}
                entriesArr={entriesOptions}
                label={entriesLabel}
                barReverse={barReverse}
                proSelect={proSelect}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <DataTableEntries
                paging={paging}
                displayEntries={displayEntries}
                entries={entries}
                handleEntriesChange={handleEntriesChange}
                entriesArr={entriesOptions}
                label={entriesLabel}
                barReverse={barReverse}
                proSelect={proSelect}
              />
              <DataTableSearch
                handleSearchChange={handleSearchChange}
                search={search}
                searching={searching}
                label={searchLabel}
                barReverse={barReverse}
                materialSearch={materialSearch}
              />
            </React.Fragment>
          )}
        </div>
        {!scrollY && !scrollX && (
          <div className='row'>
            <DataTableTable
              autoWidth={autoWidth}
              bordered={bordered}
              borderless={borderless}
              btn={btn}
              dark={dark}
              fixed={fixed}
              hover={hover}
              noBottomColumns={noBottomColumns}
              noRecordsFoundLabel={noRecordsFoundLabel}
              responsive={responsive}
              responsiveSm={responsiveSm}
              responsiveMd={responsiveMd}
              responsiveLg={responsiveLg}
              responsiveXl={responsiveXl}
              small={small}
              striped={striped}
              theadColor={theadColor}
              theadTextWhite={theadTextWhite}
              columns={columns}
              handleSort={handleSort}
              sortable={sortable}
              tbodyColor={tbodyColor}
              tbodyTextWhite={tbodyTextWhite}
              rows={pages[activePage]}
              sorted={sorted}
              {...attributes}
            />
          </div>
        )}
        {(scrollY || scrollX) && (
          <div className='row'>
            <DataTableTableScroll
              autoWidth={autoWidth}
              bordered={bordered}
              borderless={borderless}
              btn={btn}
              dark={dark}
              fixed={fixed}
              handleTableBodyScroll={handleTableBodyScroll}
              hover={hover}
              maxHeight={maxHeight}
              responsive={responsive}
              responsiveSm={responsiveSm}
              responsiveMd={responsiveMd}
              responsiveLg={responsiveLg}
              responsiveXl={responsiveXl}
              scrollX={scrollX}
              scrollY={scrollY}
              small={small}
              striped={striped}
              theadColor={theadColor}
              theadTextWhite={theadTextWhite}
              columns={columns}
              handleSort={this.handleSort}
              sortable={sortable}
              sorted={sorted}
              tbodyColor={tbodyColor}
              tbodyTextWhite={tbodyTextWhite}
              rows={pages[activePage]}
              translateScrollHead={translateScrollHead}
              {...attributes}
            />
          </div>
        )}
        {paging && (
          <div className='row'>
            <DataTableInfo
              activePage={activePage}
              entries={entries}
              filteredRows={filteredRows}
              info={info}
              pages={pages}
              label={infoLabel}
              noRecordsFoundLabel={noRecordsFoundLabel}
            />
            <DataTablePagination
              activePage={activePage}
              changeActivePage={changeActivePage}
              pages={pages}
              pagesAmount={pagesAmount}
              label={paginationLabel}
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}

DataTable.propTypes = {
  autoWidth: PropTypes.bool,
  barReverse: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  dark: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  disableRetreatAfterSorting: PropTypes.bool,
  displayEntries: PropTypes.bool,
  entries: PropTypes.number,
  entriesLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  entriesOptions: PropTypes.arrayOf(PropTypes.number),
  exportToCSV: PropTypes.bool,
  filter: PropTypes.string,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  infoLabel: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  materialSearch: PropTypes.bool,
  maxHeight: PropTypes.string,
  noBottomColumns: PropTypes.bool,
  noRecordsFoundLabel: PropTypes.string,
  onPageChange: PropTypes.func,
  onSearch: PropTypes.func,
  onSort: PropTypes.func,
  order: PropTypes.arrayOf(PropTypes.string),
  pagesAmount: PropTypes.number,
  paginationLabel: PropTypes.arrayOf(PropTypes.string),
  paging: PropTypes.bool,
  proSelect: PropTypes.bool,
  responsive: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  searching: PropTypes.bool,
  searchLabel: PropTypes.string,
  small: PropTypes.bool,
  sortable: PropTypes.bool,
  sortRows: PropTypes.arrayOf(PropTypes.string),
  striped: PropTypes.bool,
  tbodyColor: PropTypes.string,
  tbodyTextWhite: PropTypes.bool,
  theadColor: PropTypes.string,
  theadTextWhite: PropTypes.bool
}

DataTable.defaultProps = {
  autoWidth: false,
  barReverse: false,
  bordered: false,
  borderless: false,
  btn: false,
  dark: false,
  data: {
    columns: [],
    rows: []
  },
  disableRetreatAfterSorting: false,
  displayEntries: true,
  entries: 10,
  entriesLabel: 'Show entries',
  entriesOptions: [10, 20, 50, 100],
  exportToCSV: false,
  fixed: false,
  hover: false,
  info: true,
  infoLabel: ['Showing', 'to', 'of', 'entries'],
  noRecordsFoundLabel: 'No matching records found',
  noBottomColumns: false,
  order: [],
  pagesAmount: 8,
  paging: true,
  paginationLabel: ['Prev', 'Next'],
  responsive: false,
  responsiveSm: false,
  responsiveMd: false,
  responsiveLg: false,
  responsiveXl: false,
  searching: true,
  searchLabel: 'Search',
  scrollX: false,
  scrollY: false,
  sortable: true,
  small: false,
  striped: false,
  theadColor: '',
  theadTextWhite: false,
  tbodyColor: '',
  tbodyTextWhite: false,
  proSelect: false,
  materialSearch: false
}

export default DataTable
export { DataTable as CDBDataTable }
