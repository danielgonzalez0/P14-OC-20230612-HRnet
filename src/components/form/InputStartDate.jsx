import React from 'react';
import InputForm from './InputForm';
import PropTypes from 'prop-types';

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
        errors={errors}
      />
    </>
  );
};

InputStartDate.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.string,
};

export default InputStartDate;

