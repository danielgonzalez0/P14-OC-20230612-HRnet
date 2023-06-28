import React from 'react';
import { Modal } from 'library-react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsDeleted,
  setIsSelected,
  setIsSuccessfull,
} from '../../redux/formStatus.slice';
import { deleteUser } from '../../redux/users.slice';

const DeleteModal = ({ employeeSelected }) => {
  const isSuccessfull = useSelector((state) => state.status.isSuccessfull);
  const isDeleted = useSelector((state) => state.status.isDeleted);
  const dispatch = useDispatch();
  const employee = useSelector((state) =>
    state.employees.filter(
      (employee) => employee.id === parseInt(employeeSelected)
    )
  );

  const ContentDeleteModal = () => {
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

  if (isDeleted && !isSuccessfull)
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

  if (isDeleted && isSuccessfull)
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

export default DeleteModal;
