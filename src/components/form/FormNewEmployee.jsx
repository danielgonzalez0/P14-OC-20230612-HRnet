import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import statesData from '../../assets/data/statesData';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal from '../modal/Modal';
import { minMaxDate } from '../../utils/utils';

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
  dateOfBirth: yup
    .date()
    .required('required')
    .typeError('a valid date is required')
    .max(minMaxDate(18, 'substract'), 'you must be at least 18')
    .min(minMaxDate(67, 'substract'), 'you must not be older than 67'),
  startDate: yup
    .date()
    .required('a valid date is required')
    .typeError('a valid date is required')
    .min(minMaxDate(67 - 18, 'substract'))
    .max(new Date().toDateString(), 'you cannot select a date in the future'),
  department: yup.string('must be a string').required('department is required'),
  street: yup.string('must be a string').required('street is required'),
  city: yup.string('must be a string').required('city is required'),
  state: yup.string('must be a string').required('state is required'),
  zipCode: yup
    .number('must be a number')
    .required('zip code is required')
    .min(501, 'zip code must be between 501 and 99950')
    .max(99950, 'zip code must be between 501 and 99950')
    .typeError('zip code must be between 501 and 99950'),
});

const FormNewEmployee = () => {
  const [states, setStates] = useState([]);

  const form = useForm({
    defaultValues: {
      firstName: 'John',
      lastName: 'McCLane',
      dateOfBirth: new Date(1980, 6, 10).toISOString().slice(0, 10),
      startDate: new Date(2000, 8, 20).toISOString().slice(0, 10),
      department: 'Sales',
      street: '77 Brooklyn',
      city: 'New York',
      state: 'New York',
      zipCode: 501,
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
            <label htmlFor="lastName">
              Last name <Modal />
            </label>
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
              autoComplete="none"
            />
            <span className="error-message">{errors.dateOfBirth?.message}</span>
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
              autoComplete="none"
            />
            <span className="error-message">{errors.startDate?.message}</span>
          </div>
          <div className="input-container">
            <label htmlFor="department">Department</label>
            <select
              {...register('department')}
              id="department"
              className="form-input"
            >
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Ressources">Human Ressources</option>
              <option value="Legal">Legal</option>
            </select>
            <span className="error-message">{errors.department?.message}</span>
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
              autoComplete="none"
              placeholder="ex: 77 Massachusetts Avenue"
            />
            <span className="error-message">{errors.street?.message}</span>
          </div>
          <div className="input-container">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              {...register('city')}
              className="form-input"
              autoComplete="none"
              placeholder="ex: New York"
            />
            <span className="error-message">{errors.city?.message}</span>
          </div>
          <div className="input-container">
            <label htmlFor="state">State</label>
            <select {...register('state')} id="state" className="form-input">
              {states.map((state, index) => (
                <option key={index} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
            <span className="error-message">{errors.state?.message}</span>
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
            />
            <span className="error-message">{errors.zipCode?.message}</span>
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
