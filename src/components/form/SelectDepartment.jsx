import React from 'react';
import PropTypes from 'prop-types';

const SelectDepartment = ({ register, errors, setValue }) => {
  return (
    <div className="input-container">
      <label htmlFor="department">Department</label>
      <select
        {...register('department')}
        id="department"
        className="form-input"
        onChange={(e) => {
          setValue('department', e.target.value);
        }}
      >
        <option value="Sales" label="Sales"></option>
        <option value="Marketing" label="Marketing"></option>
        <option value="Engineering" label="Engineering"></option>
        <option value="Human Ressources" label="Human Ressources"></option>
        <option value="Legal" label="Legal"></option>
      </select>
      <span className="error-message">{errors}</span>
    </div>
  );
};
SelectDepartment.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};
export default SelectDepartment;
