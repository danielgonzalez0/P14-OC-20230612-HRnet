import React, { useEffect, useState } from 'react';
import statesData from '../../assets/data/statesData';

const FormNewEmployee = () => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    setStates(statesData);
  }, []);

  return (
    <div className="form-container">
      <form>
        <div className="inputs">
          <div className="input-container">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              className="form-input"
              required
              autoComplete="none"
              placeholder="ex: John"
            />
            <span className="error-message">
              Je rentre expres une phrase très longue pour test l'affichage
            </span>
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              className="form-input"
              required
              autoComplete="none"
              placeholder="ex: McClane"
            />
            <span className="error-message"></span>
          </div>
          <div className="input-container">
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input
              type="date"
              id="dateOfBirth"
              className="form-input"
              required
              autoComplete="none"
            />
            <span className="error-message"></span>
          </div>
          <div className="input-container">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              className="form-input"
              required
              autoComplete="none"
            />
            <span className="error-message"></span>
          </div>
          <div className="input-container">
            <label htmlFor="department">Department</label>
            <select
              name="stdepartmentate"
              id="department"
              className="form-input"
              required
            >
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Ressources">Human Ressources</option>
              <option value="Legal">Legal</option>
            </select>
            <span className="error-message"></span>
          </div>
        </div>
        <fieldset className="address-inputs">
          <legend>Address</legend>
          <div className="input-container">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              className="form-input"
              required
              autoComplete="none"
              placeholder="ex: 77 Massachusetts Avenue"
            />
            <span className="error-message"></span>
          </div>
          <div className="input-container">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="form-input"
              required
              autoComplete="none"
              placeholder="ex: New York"
            />
            <span className="error-message"></span>
          </div>
          <div className="input-container">
            <label htmlFor="state">State</label>
            <select name="state" id="state" className="form-input" required>
              {states.map((state, index) => (
                <option key={index} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
            <span className="error-message"></span>
          </div>
          <div className="input-container">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="number"
              name="zipCode"
              id="zipCode"
              className="form-input"
              autoComplete="none"
              min={501}
              max={99950}
              placeholder="501 to 99950"
              required
            />
            <span className="error-message"></span>
          </div>
        </fieldset>
        <div className="btn-container">
          <input type="submit" value="send" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default FormNewEmployee;
