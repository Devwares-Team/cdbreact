import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../Pagination';
import PageItem from '../../Pagination/PageItem';
import PageLink from '../../Pagination/PageLink';
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";

class DataTablePagination extends Component {
  state = {
    pages: this.props.pages,
    pGroups: []
  };

  componentDidMount() {
    this.groupPages();
  }

  componentDidUpdate = prevProps => {
    const { pages } = this.props;

    if (prevProps.pages !== pages) {
      this.setState({ pages: pages }, () => this.groupPages());
    }
  };

  pagesIndexify = () => {
    const { pages } = this.state;

    const mutablePages = [...pages];
    mutablePages.forEach((page, index) => (page.index = index));
    return mutablePages;
  };

  groupPages = () => {
    const pGroups = [];
    const pages = this.pagesIndexify();
    const { pagesAmount } = this.props;

    while (pages.length > 0) {
      pGroups.push(pages.splice(0, pagesAmount));
    }

    this.setState({ pGroups });
  };

  choosePagesGroup = () => {
    const { activePage, pagesAmount } = this.props;
    const { pGroups } = this.state;
    const pGroupNumber = Math.floor(activePage / pagesAmount);
    return pGroups.length ? pGroups[pGroupNumber] : [];
  };

  render() {
    const { activePage, changeActivePage, pages, label } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div data-test='datatable-pagination' className='col-sm-12 col-md-7'>
          <div className='dataTables_paginate'>
            <Pagination sm>
              <PageLink
                disabled={activePage <= 0}
                aria-label={label[0]}
                onClick={() => changeActivePage(activePage - 1)}
              >
                <span>{label[0]}</span>
              </PageLink>

              {this.choosePagesGroup().map(page => (
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
              >
                <span>{label[1]}</span>
              </PageLink>
            </Pagination>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

DataTablePagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  pages: PropTypes.array.isRequired,
  pagesAmount: PropTypes.number.isRequired
};

export default DataTablePagination;
export { DataTablePagination as MDBDataTablePagination };
