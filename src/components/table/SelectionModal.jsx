import { Modal } from 'library-react-modal';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDeleted, setIsModified, setIsSelected } from '../../redux/formStatus.slice';


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
    return (employeeSelected &&
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
          <button className="btn-pagination">delete</button>
        </div>
      </>
    );
  };
  return (
    !isModified &&
    !isDeleted && (
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
    )
  );
};

export default SelectionModal;
