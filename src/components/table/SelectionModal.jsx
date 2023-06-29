import { Modal } from 'library-react-modal';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsDeleted,
  setIsModified,
  setIsSelected,
} from '../../redux/formStatus.slice';
import PropTypes from 'prop-types';

const SelectionModal = ({ employeeSelected }) => {
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
      employeeSelected &&
      employee[0] && (
        <>
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
            <button
              className="btn-pagination"
              onClick={() => dispatch(setIsDeleted(true))}
            >
              delete
            </button>
          </div>
        </>
      )
    );
  };

  if (!isModified && !isDeleted)
    return (
      <>
        <Modal
          title={'Selected employee:'}
          content={<Content />}
          close={() => {
            dispatch(setIsSelected(false));
            dispatch(setIsModified(false));
            dispatch(setIsDeleted(false));
          }}
          show={isSelected}
          customClassName={{
            closeBtn: 'close-modal',
            modal: 'custom-modal-container',
            title: 'custom-modal-title',
            content: 'custom-content',
          }}
        />
      </>
      // )
    );
};

SelectionModal.propTypes = {
  employeeSelected: PropTypes.string,
};

export default SelectionModal;
