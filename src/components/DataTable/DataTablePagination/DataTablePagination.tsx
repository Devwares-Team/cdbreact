import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../Pagination';
import PageItem from '../../Pagination/PageItem';
import PageLink from '../../Pagination/PageLink';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";



interface Props {
  activePage: number,
  changeActivePage: Function,
  label: string,
  pages: any,
  pagesAmount: number
  className?: string,
  children?: React.ReactNode,
}

const DataTablePagination = (props: Props) => {


  const { activePage, changeActivePage, className, pages, label, ...attributes } = props;
  const [state, setState] = useState<{
    pages: any,
    pGroups: any[]
  }>({
    pages: pages,
    pGroups: []
  })

  // ComponentDidMount & ComponentDidUpdateLogic
  const mounted = useRef<boolean>()
  useEffect(() => {

    if (!mounted.current) { // Component Did Mount
      groupPages();
      mounted.current = true

    } else { // Compoennt Did Update
      const { pages } = props
      Promise.resolve().then(() => setState((prev) => ({ ...prev, pages }))).then(() => groupPages()) 
    }

  }, [pages])

  // useEffect(() => {

  //   const prevProps = () => {
  //     const { pages } = props;

  //     if (prevProps.pages !== pages) {
  //       setState({ pages: pages },
  //         groupPages());
  //     }
  //   }
  // });

  const pagesIndexify = () => {
    const { pages } = state;

    const mutablePages = [...pages];
    mutablePages.forEach((page, index) => (page.index = index));
    return mutablePages;
  };

  const groupPages = () => {
    const pGroups: any[] = [];
    const pages = pagesIndexify();
    const { pagesAmount } = props;

    while (pages.length > 0) {
      pGroups.push(pages.splice(0, pagesAmount));
    }

    setState((prev) => ({ ...prev, pGroups }));
  };

  const choosePagesGroup = () => {
    const { activePage, pagesAmount } = props;
    const { pGroups } = state;
    const pGroupNumber = Math.floor(activePage / pagesAmount);
    return pGroups.length ? pGroups[pGroupNumber] : [];
  };

  return (
    <ThemeProvider theme={theme}>
      <div data-test='datatable-pagination' className='col-sm-12 col-md-7' style={{
        display: "flex",
        justifyContent: "end"
      }}>
        <div className='dataTables_paginate' style={{
          width: ""
        }}>
          <Pagination sm>
            <PageLink
              disabled={activePage <= 0}
              aria-label={label[0]}
              onClick={() => changeActivePage(activePage - 1)}
              className=""
            >
              <span>{label[0]}</span>
            </PageLink>

            {choosePagesGroup().map(page => (
              <PageItem
                key={Object.keys(page[0])[0] + page.index}
                active={page.index === activePage}
                onClick={() => changeActivePage(page.index)}
              >
                {page.index + 1}
                {page.index === activePage && (
                  <span className='sr-only'>(current)</span>
                )}
              </PageItem>
            ))}

            <PageLink
              disabled={!pages.length || activePage === pages.length - 1}
              aria-label={label[1]}
              onClick={() => changeActivePage(activePage + 1)}
              className=""
            >
              <span>{label[1]}</span>
            </PageLink>
          </Pagination>
        </div>
      </div>
    </ThemeProvider>
  );

}

DataTablePagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  pages: PropTypes.array.isRequired,
  pagesAmount: PropTypes.number.isRequired,
  className : PropTypes.string,
  children: PropTypes.node
};

DataTablePagination.defaultProps = {
  children: "",
  className: ""
}

export default DataTablePagination;
export { DataTablePagination as MDBDataTablePagination };
