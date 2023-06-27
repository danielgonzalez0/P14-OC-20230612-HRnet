import React from 'react';
import { Modal } from 'library-react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsDeleted,
  setIsModified,
  setIsSelected,
  setIsSuccessfull,
} from '../../redux/formStatus.slice';
import FormNewEmployee from '../form/FormNewEmployee';

const FormModal = ({ employeeSelected }) => {
  const isSelected = useSelector((state) => state.status.isSelected);
  const isSuccessfull = useSelector((state) => state.status.isSuccessfull);
  const isModified = useSelector((state) => state.status.isModified);
  const dispatch = useDispatch();
  const employee = useSelector((state) =>
    state.employees.filter(
      (employee) => employee.id === parseInt(employeeSelected)
    )
  );

  if (isModified && !isSuccessfull)
    return (
      <>
        <Modal
          title={'Selected employee: '}
          content={<FormNewEmployee dataEmployee={employee} />}
          close={() => {
            // dispatch(setIsSelected(false));
            dispatch(setIsModified(false));
            //  dispatch(setIsDeleted(false));
          }}
          show={isModified}
          customClassName={{
            closeBtn: 'close-modal',
            modal: 'custom-modal-container form-modal',
            title: 'custom-modal-title',
            content: 'custom-modal-form',
          }}
        />
      </>
    );


  if (isModified && isSuccessfull)
    return (
      <>
        <Modal
          close={() => {
            dispatch(setIsModified(false));
            dispatch(setIsSuccessfull(false));
            dispatch(setIsSelected(false));
          }}
          show={isSuccessfull}
          title={''}
          content={`Employee ${employee[0].first_name} ${employee[0].last_name} was modified!`}
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

export default FormModal;
