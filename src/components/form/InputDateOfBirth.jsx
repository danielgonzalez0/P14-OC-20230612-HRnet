import React from 'react';
import InputForm from './InputForm';
import PropTypes from "prop-types"

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
        errors={errors}
      />
    </>
  );
};

InputDateOfBirth.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.string,
};

export default InputDateOfBirth;
