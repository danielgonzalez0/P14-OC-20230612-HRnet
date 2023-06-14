import React, { useMemo } from 'react';
import mockData from '../../assets/data/data.json';
import { useGlobalFilter, useTable, usePagination } from 'react-table';
import { dateParser } from '../../utils/utils';

const Table = () => {
  const data = useMemo(() => mockData, []);
  const columns = useMemo(
    () => [
      // header – this is the column's name that will be displayed to help identify each column.
      // accessor – this is the key in our data object. This is what will be used to assign each value to a column.
      { Header: 'First Name', accessor: 'first_name' },
      { Header: 'Last Name', accessor: 'last_name' },
      {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
        Cell: ({ value }) => {
          return dateParser(value);
        },
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
        Cell: ({ value }) => {
          return dateParser(value);
        },
      },
      { Header: 'Street', accessor: 'address' },
      { Header: 'City', accessor: 'city' },
      { Header: 'State', accessor: 'state' },
      { Header: 'Zip Code', accessor: 'zipCode' },
      { Header: 'Department', accessor: 'department' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    prepareRow,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="list-container">
      <div className="list-header">
        <div className="filter-entries-container">
          <span>show: </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span>entries</span>
        </div>
        <div className="search-container">
          <label>Search : </label>
          <input
            type="text"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="keywords"
          />
        </div>
      </div>

      <div className="table-container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {page.length > 0 && (
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
        {page.length === 0 && (
          <p className="no-match">No matching records found</p>
        )}
      </div>
      {page.length > 0 && (
        <div className="footer-list-container">
          <div className="footer-list-entries-container">
            Page {pageIndex + 1} of {pageOptions.length}
          </div>
          <div className="footer-list-pagination-container">
            {pageIndex > 0 && (
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="btn-pagination"
              >
                Previous
              </button>
            )}
            {pageIndex + 1 < pageOptions.length && (
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="btn-pagination"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
