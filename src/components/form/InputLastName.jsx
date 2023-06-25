import React from 'react';
import InputForm from './InputForm';

const InputLastName = ({register, errors}) => {
  return (
    <>
      <InputForm
        name={'last_name'}
        type={'text'}
        id={'lastName'}
        label={'lastName'}
        labelText={'Last name'}
        isModal={true}
        isAutoComplete={false}
        placeholder={'ex: McLane'}
        register={register}
        errors={errors.last_name?.message}
      />
    </>
  );
};

export default InputLastName;
