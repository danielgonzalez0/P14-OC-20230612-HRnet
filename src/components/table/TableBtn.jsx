import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormNewEmployee from '../form/FormNewEmployee';
import { setIsSelected, setIsModified } from '../../redux/formStatus.slice';

const TableBtn = ({ employeeSelected }) => {
  const isSelected = useSelector((state) => state.status.isSelected);
  const isDeleted = useSelector((state) => state.status.isDeleted);
  const isModified = useSelector((state) => state.status.isModified);
  const dispatch = useDispatch();
  const employee = useSelector((state) =>
    state.employees.filter(
      (employee) => employee.id === parseInt(employeeSelected)
    )
  );

  const Content = () => {
    return (
      <>
        <p>Do you want: </p>
        <div className="btn-container btn-wrapper">
          <button
            className="btn-pagination"
            onClick={() => {
              dispatch(setIsModified(true));
            }}
          >
            modify
          </button>
          <button className="btn-pagination">delete</button>
        </div>
      </>
    );
  };

  return (
    isSelected && (
      <div className="btn-modal-container">
        <div className="content-container">
          <button
            className="btn-pagination close-modal"
            onClick={() => {
              dispatch(setIsSelected(false));
              dispatch(setIsModified(false));
            }}
          >
            X
          </button>
          {isModified && <FormNewEmployee dataEmployee={employee} />}
          {isDeleted && <></>}
          {!isModified && !isDeleted && (
            <>
              <h3>Selected Employee:</h3>
              <p>
                {employee[0].first_name} {employee[0].last_name}
              </p>
              <p>Do you want: </p>
              <div className="btn-container btn-wrapper">
                <button
                  className="btn-pagination"
                  onClick={() => {
                    dispatch(setIsModified(true));
                  }}
                >
                  modify
                </button>
                <button className="btn-pagination">delete</button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default TableBtn;
