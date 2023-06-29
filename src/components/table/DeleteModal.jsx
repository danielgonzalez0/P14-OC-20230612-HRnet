import React from 'react';
import { Modal } from 'library-react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsDeleted,
  setIsSelected,
  setIsSuccessfull,
} from '../../redux/formStatus.slice';
import { deleteUser } from '../../redux/users.slice';
import PropTypes from 'prop-types'

const DeleteModal = ({ employeeSelected }) => {
  const isSuccessfull = useSelector((state) => state.status.isSuccessfull);
  const isDeleted = useSelector((state) => state.status.isDeleted);
  const isModified = useSelector((state) => state.status.isModified);
  const isSelected = useSelector((state) => state.status.isSelected);
  const dispatch = useDispatch();
  const employee = useSelector((state) =>
    state.employees.filter(
      (employee) => employee.id === parseInt(employeeSelected)
    )
  );

  const ContentDeleteModal = () => {
    if (employee[0])
      return (
        <>
          <p style={{ textAlign: 'center' }}>
            {`${employee[0].first_name} ${employee[0].last_name}`}
          </p>
          <div className="btn-container btn-wrapper">
            <button
              className="btn-pagination"
              onClick={() => {
                dispatch(setIsDeleted(false));
              }}
            >
              cancel
            </button>
            <button
              className="btn-pagination"
              onClick={() => {
                dispatch(setIsSelected(false));
                dispatch(deleteUser(employee[0].id));
                dispatch(setIsSuccessfull(true));
              }}
            >
              delete
            </button>
          </div>
        </>
      );
  };

  if (isSelected && !isSuccessfull && !isModified)
    return (
      <>
        <Modal
          title={'Are you sure to delete employee: '}
          content={<ContentDeleteModal />}
          close={() => {
            dispatch(setIsDeleted(false));
          }}
          show={isDeleted}
          customClassName={{
            closeBtn: 'close-modal',
            modal: 'custom-modal-container form-modal',
            title: 'custom-modal-title',
            content: 'custom-modal-form',
          }}
        />
      </>
    );

  if (!isModified)
    return (
      <>
        <Modal
          close={() => {
            dispatch(setIsDeleted(false));
            dispatch(setIsSuccessfull(false));
            dispatch(setIsSelected(false));
          }}
          show={isSuccessfull}
          title={''}
          content={`Employee was deleted!`}
          customClassName={{
            closeBtn: 'close-modal',
            modal: 'custom-modal-container',
            title: '',
            content: '',
          }}
        />
      </>
    );
};

DeleteModal.propTypes = {
  employeeSelected: PropTypes.string
}

export default DeleteModal;
