import React from 'react';

const SelectState = ({register, errors, setValue, setFormSelectedState, formSelectedState, states}) => {
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
        <span className="error-message">{errors.state?.message}</span>
      </div>
    );
};

export default SelectState;