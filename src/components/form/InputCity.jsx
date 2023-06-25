import React from 'react';
import InputForm from './InputForm';

const InputCity = ({ register, errors }) => {
  return (
    <>
      <InputForm
        name={'city'}
        type={'text'}
        id={'city'}
        label={'city'}
        labelText={'City'}
        isModal={false}
        isAutoComplete={false}
        placeholder={'ex: New York'}
        register={register}
        errors={errors.city?.message}
      />
    </>
  );
};

export default InputCity;

