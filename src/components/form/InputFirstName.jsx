import React from 'react';
import InputForm from './InputForm';
import PropTypes from 'prop-types'

const InputFirstName = ({register, errors}) => {
    return (
      <>
        <InputForm
          name={'first_name'}
          type={'text'}
          id={'firstName'}
          label={'firstName'}
          labelText={'First name'}
          isModal={true}
          isAutoComplete={false}
          placeholder={'ex: John'}
          register={register}
          errors={errors}
        />
      </>
    );
};

InputFirstName.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.string,
};


export default InputFirstName;