import React from 'react';
import InputForm from './InputForm';

const InputDateOfBirth = ({register, errors}) => {
  return (
    <>
      <InputForm
        name={'dateOfBirth'}
        type={'date'}
        id={'dateOfBirth'}
        label={'dateOfBirth'}
        labelText={'Date of birth'}
        isModal={false}
        isAutoComplete={false}
        register={register}
        errors={errors.dateOfBirth?.message}
      />
    </>
  );
};

export default InputDateOfBirth;
