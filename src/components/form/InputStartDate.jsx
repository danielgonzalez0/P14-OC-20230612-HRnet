import React from 'react';
import InputForm from './InputForm';

const InputStartDate = ({ register, errors }) => {
  return (
    <>
      <InputForm
        name={'startDate'}
        type={'date'}
        id={'startDate'}
        label={'startDate'}
        labelText={'Start date'}
        isModal={false}
        isAutoComplete={false}
        register={register}
        errors={errors.startDate?.message}
      />
    </>
  );
};

export default InputStartDate;

