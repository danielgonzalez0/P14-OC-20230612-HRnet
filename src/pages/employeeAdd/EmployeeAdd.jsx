import React, { useState } from 'react';
import FormNewEmployee from '../../components/form/FormNewEmployee';
import { Modal } from 'library-react-modal';

const EmployeeAdd = () => {
  const [isOpen, setIsOpen]=useState(false)
  const [employeeCreated, setEmployeeCreated] = useState('');

  return (
    <main>
      <h1>Add a new employee</h1>
      <FormNewEmployee setIsOpen={setIsOpen} setEmployeeCreated={setEmployeeCreated}/>
      <Modal
        close={() => setIsOpen(false)}
        show={isOpen}
        title={''}
        content={`Employee ${employeeCreated} was created!`}
        customClassName={{
          closeBtn: 'close-modal',
          modal: 'custom-modal-container',
          title: '',
          content: '',
        }}
      />
    </main>
  );
};

export default EmployeeAdd;
