import React from 'react';
import Modal from '../modal/Modal';

const InputForm = ({
  name,
  type,
  id,
  label,
  labelText,
  isModal,
  isAutoComplete,
  placeholder,
  register,
  errors,
  min,
  max,
}) => {
  return (
    <div className="input-container relative">
      <label htmlFor={label}>
        {labelText}
        {isModal && <Modal />}
      </label>
      <input
        type={type}
        id={id}
        min={min}
        max={max}
        className="form-input"
        autoComplete={isAutoComplete ? 'on' : 'none'}
        placeholder={placeholder}
        //hook-react-form : destructuring syntax
        {...register(name)}
      />
      <span className="error-message">{errors}</span>
    </div>
  );
};

export default InputForm;
