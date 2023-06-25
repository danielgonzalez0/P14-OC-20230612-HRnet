import React from 'react';

const SelectDepartment = ({register, errors, setValue}) => {
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
        <span className="error-message">{errors.department?.message}</span>
      </div>
    );
};

export default SelectDepartment;