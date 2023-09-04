import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  useGlobalFilter,
  useTable,
  usePagination,
  useSortBy,
} from 'react-table';
import { dateParser } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSelected } from '../../redux/formStatus.slice';
import SelectionModal from './SelectionModal';
import FormModal from './FormModal';
import DeleteModal from './DeleteModal';
import PropTypes from 'prop-types';

const Table = () => {
  const [dataImport, setDataImport] = useState([]);
  const users = useSelector((state) => state.employees);
  const isSelected = useSelector((state) => state.status.isSelected);
  const dispatch = useDispatch();
  const [employeeSelected, setEmployedSelected] = useState();

  useEffect(() => {
    setDataImport(users);
     if (!isSelected) {
       // Recherchez tous les inputs radio avec name="table-radio" et décochez-les
       const radioInputs = document.querySelectorAll(
         'input[type="radio"][name="table-radio"]'
       );
       radioInputs.forEach((input) => {
         input.checked = false;
       });
     }

  }, [users, isSelected]);

  const data = useMemo(() => dataImport, [dataImport]);

  const CustomCell = useCallback(
    ({ row }) => {
      return (
        <input
          type="radio"
          name="table-radio"
          id={row.original.id}
          data-id={row.original.id}
          value={row.original.id}
          onClick={(e) => {
            setEmployedSelected(e.target.dataset.id);
            dispatch(setIsSelected(true));
            console.log(e.target.checked);
            console.log(isSelected);
          }}
        />
      );
    },
    [dispatch]
  );

  CustomCell.propTypes = {
    row: PropTypes.object.isRequired,
  };

  const columns = useMemo(
    () => [
      // header – this is the column's name that will be displayed to help identify each column.
      // accessor – this is the key in our data object. This is what will be used to assign each value to a column.
      { Header: 'First Name', accessor: 'first_name' },
      { Header: 'Last Name', accessor: 'last_name' },
      {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
        Cell: ({ value }) => dateParser(value),
        disableFilters: true,
        sortType: (a, b) => {
          return (
            new Date(b.values.dateOfBirth) - new Date(a.values.dateOfBirth)
          );
        },
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
        Cell: ({ value }) => dateParser(value),
        disableFilters: true,
        sortType: (a, b) => {
          return new Date(b.values.startDate) - new Date(a.values.startDate);
        },
      },
      { Header: 'Street', accessor: 'address' },
      { Header: 'City', accessor: 'city' },
      { Header: 'State', accessor: 'state' },
      { Header: 'Zip Code', accessor: 'zipCode' },
      { Header: 'Department', accessor: 'department' },
      {
        id: 'selection',
        Header: 'Selection',
        Cell: CustomCell,
      },
    ],
    [CustomCell]
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
    gotoPage,
    setPageSize,
    prepareRow,
  } = useTable(
    { columns, data, enableMultiRowSelection: false },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <SelectionModal employeeSelected={employeeSelected} />
      <FormModal employeeSelected={employeeSelected} />
      <DeleteModal employeeSelected={employeeSelected} />

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
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={index}
                    >
                      {column.render('Header')}
                      <span className="sort-icon">
                        {column.isSorted
                          ? column.isSortedDesc
                            ? '▼'
                            : '▲'
                          : '▼▲'}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {page.length > 0 && (
              <tbody {...getTableBodyProps()}>
                {page.map((row, index) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={index}>
                      {row.cells.map((cell, index) => (
                        <td {...cell.getCellProps()} key={index}>
                          {cell.render('Cell')}
                        </td>
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
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="btn-pagination"
              >
                Previous
              </button>
              {pageOptions.map((p, index) => {
                if (
                  (pageIndex > p - 2 && pageIndex < p + 2) ||
                  (p < 3 && pageIndex < 2) ||
                  (pageOptions.length - 4 < p &&
                    pageOptions.length - 1 === pageIndex)
                ) {
                  return (
                    <button
                      key={index}
                      className={
                        pageIndex === p
                          ? 'btn-pagination active-page'
                          : 'btn-pagination'
                      }
                      onClick={() => gotoPage(p)}
                    >
                      {p + 1}
                    </button>
                  );
                } else return null;
              })}
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="btn-pagination"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Table;
