import React from 'react';
import InputForm from './InputForm';
import PropTypes from 'prop-types';

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
        errors={errors}
      />
    </>
  );
};

InputAddress.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.string
};

export default InputAddress;
