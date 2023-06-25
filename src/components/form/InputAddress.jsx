import React from 'react';
import InputForm from './InputForm';

const InputAddress = ({ register, errors }) => {
  return (
    <>
      <InputForm
        name={'address'}
        type={'text'}
        id={'street'}
        label={'street'}
        labelText={'Street'}
        isModal={false}
        isAutoComplete={false}
        placeholder={'ex: 77 Massachusetts Avenue'}
        register={register}
        errors={errors.address?.message}
      />
    </>
  );
};

export default InputAddress;
