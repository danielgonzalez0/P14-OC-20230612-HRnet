import React from 'react';
import InputForm from './InputForm';

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
          errors={errors.first_name?.message}
        />
      </>
    );
};

export default InputFirstName;