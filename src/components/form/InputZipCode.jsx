import React from 'react';
import InputForm from './InputForm';

const InputZipCode = ({ register, errors }) => {
  return (
    <>
      <InputForm
        name={'zipCode'}
        type={'number'}
        id={'zipCode'}
        label={'zipCode'}
        labelText={'Zip Code'}
        isModal={false}
        isAutoComplete={false}
        min={501}
        max={99950}
        placeholder={'501 to 99950'}
        register={register}
        errors={errors.zipCode?.message}
      />
    </>
  );
};

export default InputZipCode;

