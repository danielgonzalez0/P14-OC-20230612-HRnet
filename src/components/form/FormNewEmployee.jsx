import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import statesData from '../../assets/data/statesData';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal from '../modal/Modal';

const schema = yup.object({
  firstName: yup
    .string('input must be a string')
    .required('first name is required')
    .matches(
      /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      'invalid name format: hover ? for more details'
    ),
  lastName: yup
    .string('input must be a string')
    .required('first name is required')
    .matches(
      /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      'invalid name format: hover ? for more details'
    ),
});

const FormNewEmployee = () => {
  const [states, setStates] = useState([]);

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: new Date().toLocaleDateString(),
      startDate: new Date(),
      department: '',
      street: '',
      city: '',
      state: '',
      zipCode: 0,
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  //hook-react-form: complete syntax
  // const { name, ref, onChange, onBlur } = register('firstName');
  //hook-react-form : destructuring syntax
  //direclty in the input in the render

  const handleSubmitForm = (data) => {
    console.log('form submitted', data);
  };

  useEffect(() => {
    setStates(statesData);
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
        <div className="inputs">
          <div className="input-container relative">
            <label htmlFor="firstName">
              First name
              <Modal />
            </label>
            <input
              type="text"
              id="firstName"
              className="form-input"
              autoComplete="none"
              placeholder="ex: John"
              //hook-react-form : destructuring syntax
              {...register('firstName', {
                // required: 'first name is required',
                // pattern: {
                //   value: /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                //   message: 'invalid name format: press ? for more informations',
                // },
              })}
              //hook-react-form: complete syntax
              // name={name}
              // ref={ref}
              // onChange={onChange}
              // onBlur={onBlur}
            />
            <span className="error-message">{errors.firstName?.message}</span>
          </div>
          <div className="input-container relative">
            <label htmlFor="lastName">Last name <Modal/></label>
            <input
              id="lastName"
              className="form-input"
              autoComplete="none"
              placeholder="ex: McClane"
              //hook-react-form : destructuring syntax
              {...register('lastName')}
              type="text"
            />
            <span className="error-message">{errors.lastName?.message}</span>
          </div>
          <div className="input-container">
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input
              type="date"
              id="dateOfBirth"
              {...register('dateOfBirth', {
                valueAsDate: true,
              })}
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
              {...register('startDate', {
                valueAsDate: true,
              })}
              className="form-input"
              required
              autoComplete="none"
            />
            <span className="error-message"></span>
          </div>
          <div className="input-container">
            <label htmlFor="department">Department</label>
            <select
              {...register('department')}
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
              {...register('street')}
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
              {...register('city')}
              className="form-input"
              required
              autoComplete="none"
              placeholder="ex: New York"
            />
            <span className="error-message"></span>
          </div>
          <div className="input-container">
            <label htmlFor="state">State</label>
            <select
              {...register('state')}
              id="state"
              className="form-input"
              required
            >
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
              {...register('zipCode', {
                valueAsNumber: true,
              })}
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
      <DevTool control={control} />
    </div>
  );
};

export default FormNewEmployee;
