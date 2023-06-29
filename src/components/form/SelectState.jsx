import React from 'react';
import PropTypes from 'prop-types';

const SelectState = ({
  register,
  errors,
  setValue,
  setFormSelectedState,
  formSelectedState,
  states,
}) => {
  return (
    <div className="input-container">
      <label htmlFor="state">State</label>
      <select
        {...register('state')}
        id="state"
        className="form-input"
        defaultValue={formSelectedState}
        onChange={(e) => {
          setFormSelectedState(e.target.value);
          setValue('state', e.target.value);
        }}
      >
        {states.map((state, index) => {
          return (
            <option
              key={index}
              value={state.value}
              label={state.label}
            ></option>
          );
        })}
      </select>
      <span className="error-message">{errors}</span>
    </div>
  );
};

SelectState.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  setFormSelectedState: PropTypes.func.isRequired,
  formSelectedState: PropTypes.string,
  states: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

export default SelectState;
