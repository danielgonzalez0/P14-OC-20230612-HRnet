import React from 'react';
import InputForm from './InputForm';
import PropTypes from 'prop-types';

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
        errors={errors}
      />
    </>
  );
};

InputLastName.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.string,
};

export default InputLastName;
