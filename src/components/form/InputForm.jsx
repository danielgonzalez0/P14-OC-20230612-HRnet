import React from 'react';
import Modal from '../modal/Modal';
import PropTypes from "prop-types"

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

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  isModal: PropTypes.bool,
  isAutoComplete: PropTypes.bool,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};
export default InputForm;
