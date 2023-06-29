import React from 'react';
import InputForm from './InputForm';
import PropTypes from 'prop-types';

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
        errors={errors}
      />
    </>
  );
};

InputCity.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.string,
};

export default InputCity;

