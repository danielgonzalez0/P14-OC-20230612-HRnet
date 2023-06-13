import React, { useMemo, useState } from 'react';
import mockData from '../../assets/data/data.json';
import { useGlobalFilter, useTable } from 'react-table';
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
  const [selectFilter, setSelectFilter] = useState(10);

  const { getTableProps, getTableBodyProps, headerGroups, state, setGlobalFilter, rows, prepareRow } =
    useTable({ columns, data }, useGlobalFilter);
    
  const { globalFilter } = state;


  return (
    <div className="list-container">
      <div className="list-header">
        <div className="filter-entries-container">
          <span>show: </span>
          <select
            value={selectFilter}
            onChange={(e) => setSelectFilter(e.target.value)}
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
          <tbody {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr className='no-match'>No matching records found</tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
